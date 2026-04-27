import React from "react";

export default function Contact() {
  return (
    <div className="min-h-[70vh] bg-linear-to-b from-slate-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Header */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Get in touch
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Reach out for support, order queries, partnerships, or anything
            else. We’ll respond as soon as possible.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Company card */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                CLICKMERCE E-SHOP PRIVATE LIMITED
              </h2>

              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">
                    Address
                  </p>
                 <p className="mt-1 leading-6">
                   PAVANSUT PLAZA, 4TH FLOOR, NO.5,
                   <br />
                   WAKANER HIGHWAY
                   <br />
                   MORBI, LALPAR, RUDRA CORPORATION,
                   <br />
                   GUJARAT-363642
                 </p>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-500 uppercase">
                    Phone
                  </p>
                  <a
                    href="tel:+919909931373"
                    className="mt-1 inline-flex items-center gap-2 font-semibold text-slate-900 hover:underline"
                  >
                    📞 +91 9909931373
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-700">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                  🔒 Secure shopping
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                  🚚 Fast dispatch
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                  💬 Support
                </span>
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-6 grid gap-3">
              <a
                href="tel:+919909931373"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                Call now
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=RK%20World%20Tower%20150%20Feet%20Ring%20Road%20Rajkot%20360007"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-bold text-slate-900">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Fill this form and we’ll get back to you.
              </p>

              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  // plug your backend / email service here
                  alert("Message submitted (demo). Connect backend to enable.");
                }}
              >
                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Full name
                  </label>
                  <input
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Phone
                  </label>
                  <input
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-700">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-700">
                    Subject
                  </label>
                  <input
                    required
                    placeholder="Order issue / Support / Partnership"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Write your message…"
                    className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-500">
                    By submitting, you agree we may contact you back on phone.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Business hours / extra info */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Business hours
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  Mon–Sat: 10:00 AM – 7:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Need quick help?
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  Call us directly for urgent support.
                  <br />
                  <a
                    href="tel:+919909931373"
                    className="font-semibold text-slate-900 hover:underline"
                  >
                    +91 9909931373
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} CLICKMERCE E-SHOP PRIVATE LIMITED. All
          rights reserved.
        </div>
      </div>
    </div>
  );
}
