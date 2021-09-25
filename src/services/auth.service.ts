import { supabase } from "../api/supabaseApi";

export interface SignInCredentials {
  email: string;
  password: string;
}

export function getUser() {
  return supabase.auth.user() || undefined;
}

export function getSession() {
  return supabase.auth.session() || undefined;
}

export async function signIn(signInCredentials: SignInCredentials) {
  return await supabase.auth.signIn(signInCredentials);
}

export async function signOut() {
  await supabase.auth.signOut();
}

export function onAuthStateChange(callback: () => void) {
  return supabase.auth.onAuthStateChange(callback);
}
