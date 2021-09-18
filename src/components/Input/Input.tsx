import styled, { css, StyledComponentPropsWithRef } from "styled-components";
import { FontSizeProps } from "../../theme/styled";

type InputSize = "sm" | "md" | "lg";

interface InputSizeProps {
  height: number;
  fontSize: keyof FontSizeProps;
}

const buttonSizes: Record<InputSize, InputSizeProps> = {
  sm: {
    height: 7,
    fontSize: "sm",
  },
  md: {
    height: 9,
    fontSize: "md",
  },
  lg: {
    height: 10,
    fontSize: "lg",
  },
};

interface StyledInputProps {
  $size: InputSize;
  $isDisabled: boolean;
  $isInvalid: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: ${({ theme, $size }) => theme.spaces[buttonSizes[$size].height]};
  background: inherit;
  position: relative;
  padding-inline-start: ${({ theme }) => theme.spaces[4]};
  padding-inline-end: ${({ theme }) => theme.spaces[4]};
  font-size: ${({ theme, $size }) =>
    theme.fontSizes[buttonSizes[$size].fontSize]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: transparent solid 2px;
  outline-offset: 2px;
  border: 1px solid
    ${({ $isInvalid, theme }) =>
      $isInvalid
        ? theme.mode(theme.colors.red[500], theme.colors.red[200])
        : theme.main.borderColor};
  transition: background-color, color, border-color 0.2s;
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
    `};

  ${({ $isDisabled, theme }) =>
    !$isDisabled &&
    css`
      &:focus {
        border-color: ${theme.mode(
          theme.colors.primary[500],
          theme.colors.primary[200]
        )};
        box-shadow: ${theme.mode(
            theme.colors.primary[500],
            theme.colors.primary[200]
          )}
          0px 0px 0px 1px;
      }
    `};
`;

export interface InputProps
  extends Omit<StyledComponentPropsWithRef<"input">, "size"> {
  size?: InputSize;
  isDisabled?: boolean;
  isInvalid?: boolean;
}

export const Input = ({
  size = "md",
  isDisabled = false,
  isInvalid = false,
  ...props
}: InputProps) => (
  <StyledInput
    $size={size}
    $isDisabled={isDisabled}
    $isInvalid={isInvalid}
    disabled={isDisabled}
    {...props}
  />
);
