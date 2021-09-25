import styled, { StyledComponentPropsWithRef } from "styled-components";
import { ColorProps } from "../../theme/styled";

export type InputMessageStatus = "default" | "primary" | "error";

const inputMessageStatusConversion: Record<
  InputMessageStatus,
  keyof ColorProps
> = {
  default: "gray",
  primary: "primary",
  error: "red",
};

interface StyledInputMessageProps {
  $status: keyof ColorProps;
}

export const StyledInputMessage = styled.div<StyledInputMessageProps>`
  display: flex;
  justify-content: start;
  margin-top: ${({ theme }) => theme.spaces[1]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ $status, theme }) =>
    theme.mode(theme.colors[$status][500], theme.colors[$status][200])};
`;

export interface InputMessageProps extends StyledComponentPropsWithRef<"div"> {
  status?: InputMessageStatus;
}

export const InputMessage = ({
  status = "default",
  children,
  ...props
}: InputMessageProps) => (
  <StyledInputMessage $status={inputMessageStatusConversion[status]} {...props}>
    {children}
  </StyledInputMessage>
);
