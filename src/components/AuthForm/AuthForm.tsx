import { useState } from "react";
import styled from "styled-components";
import { PasswordRecoveryForm } from "./PasswordRecoveryForm";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spaces[4]};
`;

export type AuthFormType = "signIn" | "signUp" | "passwordRecovery";

interface AuthFormProps {
  onSubmit?: () => void;
  defaultForm?: AuthFormType;
}

export const AuthForm = ({
  onSubmit,
  defaultForm = "signIn",
}: AuthFormProps) => {
  const [currentForm, setCurrentForm] = useState<AuthFormType>(defaultForm);

  const forms = {
    signIn: <SignInForm onSignIn={onSubmit} setCurrentForm={setCurrentForm} />,
    signUp: <SignUpForm onSignUp={onSubmit} setCurrentForm={setCurrentForm} />,
    passwordRecovery: (
      <PasswordRecoveryForm
        onRecoverPassword={onSubmit}
        setCurrentForm={setCurrentForm}
      />
    ),
  };

  return <Wrapper>{forms[currentForm]}</Wrapper>;
};
