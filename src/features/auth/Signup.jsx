import { useMemo, useState } from "react";
import { sendEmailOtp, verifyEmailOtp } from "./auth.service";

function formatIndianPhone(phone) {
  const cleaned = phone.replace(/\D/g, "");

  if (!cleaned) return "";
  if (cleaned.startsWith("91") && cleaned.length === 12) return `+${cleaned}`;
  if (cleaned.length === 10) return `+91${cleaned}`;

  return `+${cleaned}`;
}

function isValidIndianPhone(phone) {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length === 10 || (cleaned.startsWith("91") && cleaned.length === 12);
}

function isValidOtp(otp) {
  return /^\d{6,8}$/.test(otp.trim());
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

export default function Signup() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
    otp: false,
  });

  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  const fullNameErr = useMemo(() => {
    if (!touched.fullName) return "";
    if (!fullName.trim()) return "Full name is required.";
    return "";
  }, [fullName, touched.fullName]);

  const emailErr = useMemo(() => {
    if (!touched.email) return "";
    if (!email.trim()) return "Email is required.";
    if (!isValidEmail(email)) return "Please enter a valid email address.";
    return "";
  }, [email, touched.email]);

  const phoneErr = useMemo(() => {
    if (!touched.phone) return "";
    if (!phone.trim()) return "Phone number is required.";
    if (!isValidIndianPhone(phone)) return "Please enter a valid 10-digit mobile number.";
    return "";
  }, [phone, touched.phone]);

  const otpErr = useMemo(() => {
    if (!otpSent || !touched.otp) return "";
    if (!otp.trim()) return "OTP is required.";
    if (!isValidOtp(otp)) return "Please enter a valid OTP.";
    return "";
  }, [otp, otpSent, touched.otp]);

  const canSendOtp =
    !sendingOtp && !!fullName.trim() && !!email.trim() && !!phone.trim() && !fullNameErr && !emailErr && !phoneErr;
  const canVerifyOtp =
    otpSent &&
    !verifyingOtp &&
    !!fullName.trim() &&
    !!email.trim() &&
    !!phone.trim() &&
    !!otp.trim() &&
    !fullNameErr &&
    !emailErr &&
    !phoneErr &&
    !otpErr;

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setFormError("");
    setSuccessMessage("");
    setTouched((t) => ({ ...t, fullName: true, email: true, phone: true }));

    if (!fullName.trim() || !email.trim() || !isValidEmail(email) || !phone.trim() || !isValidIndianPhone(phone)) {
      setFormError("Please enter your full name, valid email address, and valid mobile number.");
      return;
    }

    setSendingOtp(true);
    try {
      const formattedPhone = formatIndianPhone(phone);
      const { error } = await sendEmailOtp({
        phone: formattedPhone,
        email: email.trim(),
        fullName: fullName.trim(),
      });

      if (error) {
        setFormError(error.message || "Failed to send OTP. Please try again.");
        return;
      }

      setOtpSent(true);
      setOtp("");
      setTouched((t) => ({ ...t, otp: false }));
      setSuccessMessage(`OTP sent to ${email.trim()}`);
    } catch (_err) {
      setFormError("Something went wrong while sending OTP. Please try again.");
    } finally {
      setSendingOtp(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setFormError("");
    setSuccessMessage("");
    setTouched((t) => ({ ...t, fullName: true, email: true, phone: true, otp: true }));

    if (
      !fullName.trim() ||
      !email.trim() ||
      !isValidEmail(email) ||
      !phone.trim() ||
      !isValidIndianPhone(phone) ||
      !otp.trim() ||
      !isValidOtp(otp)
    ) {
      setFormError("Please complete your name, email, valid mobile number, and OTP.");
      return;
    }

    setVerifyingOtp(true);
    try {
      const formattedPhone = formatIndianPhone(phone);
      const { error } = await verifyEmailOtp({
        phone: formattedPhone,
        token: otp.trim(),
        email: email.trim(),
        fullName: fullName.trim(),
      });

      if (error) {
        setFormError(error.message || "OTP verification failed. Please try again.");
        return;
      }

      setSuccessMessage("Account created successfully with your email and mobile number. You are now logged in.");
    } catch (_err) {
      setFormError("Something went wrong while verifying OTP. Please try again.");
    } finally {
      setVerifyingOtp(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="px-6 pt-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Create your account
              </h2>
              <span className="text-xs font-semibold rounded-full bg-slate-100 px-3 py-1 text-slate-700 whitespace-nowrap">
                Email OTP Signup
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Sign up with your name, email, mobile number, and verify your email using OTP.
            </p>
          </div>

          <form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp} className="px-6 pb-6 pt-5">
            {formError ? (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {formError}
              </div>
            ) : null}

            {successMessage ? (
              <div className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {successMessage}
              </div>
            ) : null}

            <label className="block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={fullName}
                placeholder="Enter your full name"
                onChange={(e) => setFullName(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                className={[
                  "w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400",
                  "outline-none transition focus:ring-4",
                  fullNameErr
                    ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                    : "border-slate-200 focus:border-slate-400 focus:ring-slate-100",
                ].join(" ")}
                autoComplete="name"
                disabled={sendingOtp || verifyingOtp}
              />
              {fullNameErr ? (
                <p className="mt-2 text-xs text-red-600">{fullNameErr}</p>
              ) : (
                <p className="mt-2 text-xs text-slate-500">
                  Enter the name you want to use for your account.
                </p>
              )}
            </div>

            <label className="mt-4 block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                value={email}
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                className={[
                  "w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400",
                  "outline-none transition focus:ring-4",
                  emailErr
                    ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                    : "border-slate-200 focus:border-slate-400 focus:ring-slate-100",
                ].join(" ")}
                autoComplete="email"
                disabled={sendingOtp || verifyingOtp}
              />
              {emailErr ? (
                <p className="mt-2 text-xs text-red-600">{emailErr}</p>
              ) : (
                <p className="mt-2 text-xs text-slate-500">
                  We will use this email for account communication.
                </p>
              )}
            </div>

            <label className="mt-4 block text-sm font-medium text-slate-700">
              Mobile Number
            </label>
            <div className="mt-2">
              <input
                type="tel"
                value={phone}
                placeholder="9876543210"
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                className={[
                  "w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400",
                  "outline-none transition focus:ring-4",
                  phoneErr
                    ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                    : "border-slate-200 focus:border-slate-400 focus:ring-slate-100",
                ].join(" ")}
                autoComplete="tel"
                disabled={sendingOtp || verifyingOtp}
              />
              {phoneErr ? (
                <p className="mt-2 text-xs text-red-600">{phoneErr}</p>
              ) : (
                <p className="mt-2 text-xs text-slate-500">
                  Enter your 10-digit number. We will automatically use +91.
                </p>
              )}
            </div>

            {otpSent ? (
              <>
                <div className="mt-4 flex items-center justify-between">
                  <label className="block text-sm font-medium text-slate-700">
                    Enter OTP
                  </label>
                  <button
                    type="button"
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                    onClick={handleSendOtp}
                    disabled={sendingOtp || verifyingOtp}
                  >
                    {sendingOtp ? "Resending..." : "Resend OTP"}
                  </button>
                </div>

                <div className="mt-2">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={8}
                    value={otp}
                    placeholder="Enter OTP"
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    onBlur={() => setTouched((t) => ({ ...t, otp: true }))}
                    className={[
                      "w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400",
                      "outline-none transition focus:ring-4",
                      otpErr
                        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                        : "border-slate-200 focus:border-slate-400 focus:ring-slate-100",
                    ].join(" ")}
                    autoComplete="one-time-code"
                    disabled={verifyingOtp}
                  />
                  {otpErr ? (
                    <p className="mt-2 text-xs text-red-600">{otpErr}</p>
                  ) : (
                    <p className="mt-2 text-xs text-slate-500">
                      Enter the code sent to your email address.
                    </p>
                  )}
                </div>
              </>
            ) : null}

            {!otpSent ? (
              <button
                type="submit"
                disabled={!canSendOtp}
                className={[
                  "mt-5 w-full rounded-xl py-3 text-sm font-semibold transition",
                  "focus:outline-none focus:ring-4 focus:ring-slate-200",
                  canSendOtp
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-slate-200 text-slate-500 cursor-not-allowed",
                ].join(" ")}
              >
                {sendingOtp ? "Sending OTP..." : "Send OTP"}
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canVerifyOtp}
                className={[
                  "mt-5 w-full rounded-xl py-3 text-sm font-semibold transition",
                  "focus:outline-none focus:ring-4 focus:ring-slate-200",
                  canVerifyOtp
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-slate-200 text-slate-500 cursor-not-allowed",
                ].join(" ")}
              >
                {verifyingOtp ? "Verifying OTP..." : "Verify OTP & Sign Up"}
              </button>
            )}

            <div className="mt-5 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <button
                type="button"
                className="font-semibold text-slate-900 hover:underline"
                onClick={() => alert("Route to /login")}
              >
                Sign in
              </button>
            </div>

            <div className="mt-4 text-center text-xs text-slate-400">
              By creating an account, you agree to our{" "}
              <span className="underline cursor-pointer">Terms</span> &{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>.
            </div>
          </form>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-500 flex-wrap">
          <span className="rounded-full bg-slate-100 px-3 py-1">🔒 Secure</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">🚚 Fast checkout</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">✅ Trusted</span>
        </div>
      </div>
    </div>
  );
}
