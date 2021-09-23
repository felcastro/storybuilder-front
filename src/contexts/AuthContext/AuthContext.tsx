import { Session, User } from "@supabase/supabase-js";
import {
  useEffect,
  useState,
  useContext,
  PropsWithChildren,
  createContext,
} from "react";
import { supabase } from "../../api/supabaseApi";

interface AuthContextProps {
  user?: User;
  session?: Session;
  signOut?: () => void;
}

const AuthContext = createContext<AuthContextProps>({});

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User>();
  const [session, setSession] = useState<Session>();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async () => checkUser());

    checkUser();

    return () => {
      data?.unsubscribe();
    };
  }, []);

  async function checkUser(): Promise<void> {
    const user = supabase.auth.user() || undefined;
    const session = supabase.auth.session() || undefined;
    setUser(user);
    setSession(session);
  }

  async function signOut(): Promise<void> {
    await supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ session, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
