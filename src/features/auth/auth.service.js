import { supabase } from "../../lib/supabase";

export const sendEmailOtp = async ({ email, phone = "", fullName = "" }) => {
  return await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      data: {
        phone: phone.trim() || null,
        full_name: fullName.trim() || null,
      },
    },
  });
};

export const verifyEmailOtp = async ({ email, token, phone = "", fullName = "" }) => {
  const verifyResponse = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });

  if (verifyResponse.error || !verifyResponse.data?.user) {
    return verifyResponse;
  }

  const updates = {};

  if (phone.trim() || fullName.trim()) {
    updates.data = {};
    if (phone.trim()) updates.data.phone = phone.trim();
    if (fullName.trim()) updates.data.full_name = fullName.trim();
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