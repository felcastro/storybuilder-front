import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../Button";
import { Input } from "../Input";
import { AuthFormType } from ".";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spaces[6]};

  Input,
  Button:not(:first-child) {
    margin-top: ${({ theme }) => theme.spaces[4]};
  }
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spaces[4]};
`;

const signUpFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

interface SignUpFormProps {
  onSignUp?: () => void;
  setCurrentForm: React.Dispatch<React.SetStateAction<AuthFormType>>;
}

export const SignUpForm = ({ onSignUp, setCurrentForm }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<{
    email: string;
    password: string;
  }>({
    resolver: yupResolver(signUpFormSchema),
  });
  const watchFields = watch();

  async function onSubmit(data: any) {
    // TODO sign up logic

    onSignUp?.();
  }

  return (
    <Wrapper>
      <FormTitle>Sign up to storybuilder</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          placeholder="E-mail"
          size="lg"
          isDisabled={isSubmitting}
          isInvalid={!!errors.email}
          {...register("email")}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          size="lg"
          isDisabled={isSubmitting}
          isInvalid={!!errors.password}
          {...register("password")}
        />
        <Button
          type="submit"
          colorScheme="primary"
          isLoading={isSubmitting}
          isDisabled={!watchFields?.email || !watchFields?.password}
        >
          Sign Up
        </Button>
      </Form>
      <FormFooter>
        <p>
          Already have an account?{" "}
          <Button
            variant="link"
            colorScheme="primary"
            isDisabled={isSubmitting}
            onClick={() => setCurrentForm("signIn")}
          >
            Sign in
          </Button>
        </p>
      </FormFooter>
    </Wrapper>
  );
};
