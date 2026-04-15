import { supabase } from "../../lib/supabase";

export const sendPhoneOtp = async ({ phone, email = "", fullName = "" }) => {
  return await supabase.auth.signInWithOtp({
    phone,
    options: {
      shouldCreateUser: true,
      data: {
        email: email.trim() || null,
        full_name: fullName.trim() || null,
      },
    },
  });
};

export const verifyPhoneOtp = async ({ phone, token, email = "", fullName = "" }) => {
  const verifyResponse = await supabase.auth.verifyOtp({
    phone,
    token,
    type: "sms",
  });

  if (verifyResponse.error || !verifyResponse.data?.user) {
    return verifyResponse;
  }

  const updates = {};

  if (email.trim()) {
    updates.email = email.trim();
  }

  if (fullName.trim()) {
    updates.data = {
      full_name: fullName.trim(),
    };
  }

  if (!Object.keys(updates).length) {
    return verifyResponse;
  }

  const updateResponse = await supabase.auth.updateUser(updates);

  if (updateResponse.error) {
    return {
      data: verifyResponse.data,
      error: updateResponse.error,
    };
  }

  return {
    data: {
      ...verifyResponse.data,
      user: updateResponse.data.user ?? verifyResponse.data.user,
    },
    error: null,
  };
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};