import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";

export interface User {
  code?: string;
  cpf: string;
  email: string;
  nome: string;
  telefone: string;
}

interface AuthState {
  user: User;
}

interface SignInCredentials {
  cpf: string;
  code?: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signInGeneric(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: TransactionsProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem("@copart:user");
    if (user) {
      return { user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ cpf, code }: SignInCredentials) => {
    const response = await api.post("/Onboarding/GetMemberInformation", {
      cpf,
      code,
    });

    const { item } = response.data;
    const newFormData = {
      email: item.email,
      nome: item.nome,
      telefone: item.telefone,
      code: code,
      cpf: cpf,
    };

    localStorage.setItem("@copart:user", JSON.stringify(newFormData));
    setData({ user: newFormData });
  }, []);

  const signInGeneric = useCallback(async ({ cpf }: SignInCredentials) => {
    const response = await api.post(
      "/Onboarding/GetMemberInformationByGenereicAccess",
      {
        cpf,
      }
    );

    const { item } = response.data;
    const newFormData = {
      email: item.email,
      nome: item.nome,
      telefone: item.telefone,
      code: "",
      cpf: cpf,
    };

    localStorage.setItem("@copart:user", JSON.stringify(newFormData));
    setData({ user: newFormData });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@copart:token");
    localStorage.removeItem("@copart:user");
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signInGeneric, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
