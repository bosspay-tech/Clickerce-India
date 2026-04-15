import { supabase } from "../../lib/supabase";

export const sendPhoneOtp = async (phone) => {
  return await supabase.auth.signInWithOtp({
    phone,
    options: {
      shouldCreateUser: true,
    },
  });
};

export const verifyPhoneOtp = async (phone, token) => {
  return await supabase.auth.verifyOtp({
    phone,
    token,
    type: "sms",
  });
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};