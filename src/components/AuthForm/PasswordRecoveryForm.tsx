import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../Button";
import { Input, InputMessage } from "../Input";
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

  p {
    margin-top: ${({ theme }) => theme.spaces[2]};
  }
`;

const signInFormSchema = yup.object().shape({
  email: yup.string().email().required(),
});

interface PasswordRecoveryFormProps {
  onRecoverPassword?: () => void;
  setCurrentForm: React.Dispatch<React.SetStateAction<AuthFormType>>;
}

export const PasswordRecoveryForm = ({
  onRecoverPassword,
  setCurrentForm,
}: PasswordRecoveryFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<{
    email: string;
    password: string;
  }>({
    resolver: yupResolver(signInFormSchema),
  });
  const watchFields = watch();

  async function onSubmit(data: any) {
    // TODO password recovery logic

    onRecoverPassword?.();
  }

  return (
    <Wrapper>
      <FormTitle>Password recovery</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            id="email"
            placeholder="E-mail"
            size="lg"
            isDisabled={isSubmitting}
            isInvalid={!!errors.email}
            {...register("email")}
          />
          {errors?.email && (
            <InputMessage status="error">{errors.email.message}</InputMessage>
          )}
        </div>
        <Button
          type="submit"
          colorScheme="primary"
          isLoading={isSubmitting}
          isDisabled={!watchFields?.email}
        >
          Send recovery link
        </Button>
      </Form>
      <FormFooter>
        <p>
          Remember your password?{" "}
          <Button
            variant="link"
            colorScheme="primary"
            isDisabled={isSubmitting}
            onClick={() => setCurrentForm("signIn")}
          >
            Sign in
          </Button>
        </p>
        <p>
          New here?{" "}
          <Button
            variant="link"
            colorScheme="primary"
            isDisabled={isSubmitting}
            onClick={() => setCurrentForm("signUp")}
          >
            Create an account
          </Button>
        </p>
      </FormFooter>
    </Wrapper>
  );
};
