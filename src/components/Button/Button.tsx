import styled, {
  css,
  DefaultTheme,
  StyledComponent,
  StyledComponentPropsWithRef,
} from "styled-components";
import { ColorScheme, FontSizeProps } from "../../theme/styled";
import { toRgba } from "../../utils";
import { Spinner } from "../Spinner";

type ButtonSize = "sm" | "md" | "lg";

type ButtonVariant = "solid" | "outline" | "ghost" | "link";

interface ButtonSizeProps {
  minWidth: number;
  height: number;
  padding: number;
  fontSize: keyof FontSizeProps;
}

const buttonSizes: Record<ButtonSize, ButtonSizeProps> = {
  sm: {
    minWidth: 7,
    height: 7,
    padding: 3,
    fontSize: "sm",
  },
  md: {
    minWidth: 9,
    height: 9,
    padding: 4,
    fontSize: "md",
  },
  lg: {
    minWidth: 10,
    height: 10,
    padding: 6,
    fontSize: "lg",
  },
};

interface BaseButtonProps {
  $size: ButtonSize;
  $colorScheme: ColorScheme;
  $isDisabled: boolean;
}

export const BaseButton = styled.button<BaseButtonProps>`
  font-size: ${({ theme, $size }) =>
    theme.fontSizes[buttonSizes[$size].fontSize]};
  user-select: none;
  text-transform: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding-inline-start: ${({ theme, $size }) =>
    theme.spaces[buttonSizes[$size].padding]};
  padding-inline-end: ${({ theme, $size }) =>
    theme.spaces[buttonSizes[$size].padding]};
  min-width: ${({ theme, $size }) => theme.spaces[buttonSizes[$size].minWidth]};
  height: ${({ theme, $size }) => theme.spaces[buttonSizes[$size].height]};
  cursor: pointer;
  border: 0px;
  transition: all 0.2s;
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
    `};
`;

const SolidButton = styled(BaseButton)`
  background: ${({ $colorScheme, theme }) =>
    theme.mode(
      theme.colors[$colorScheme][500],
      theme.colors[$colorScheme][200]
    )};
  color: ${({ theme }) => theme.main.background};
  ${({ $isDisabled, $colorScheme, theme }) =>
    !$isDisabled &&
    css`
      &:hover {
        background: ${theme.mode(
          theme.colors[$colorScheme][600],
          theme.colors[$colorScheme][300]
        )};
      }
      &:active {
        background: ${theme.mode(
          theme.colors[$colorScheme][700],
          theme.colors[$colorScheme][400]
        )};
      }
    `};
`;

const OutlineButton = styled(BaseButton)`
  background: inherit;
  border: 1px solid
    ${({ $colorScheme, theme }) =>
      theme.mode(
        theme.colors[$colorScheme][500],
        theme.colors[$colorScheme][200]
      )};
  color: ${({ $colorScheme, theme }) =>
    theme.mode(
      theme.colors[$colorScheme][500],
      theme.colors[$colorScheme][200]
    )};
  ${({ $isDisabled, $colorScheme, theme }) =>
    !$isDisabled &&
    css`
      &:hover {
        background: ${theme.mode(
          theme.colors[$colorScheme][500],
          theme.colors[$colorScheme][200]
        )};
        border-color: ${theme.mode(
          theme.colors[$colorScheme][500],
          theme.colors[$colorScheme][200]
        )};
        color: ${({ theme }) => theme.main.background};
      }
      &:active {
        background: ${theme.mode(
          theme.colors[$colorScheme][700],
          theme.colors[$colorScheme][400]
        )};
        border-color: ${theme.mode(
          theme.colors[$colorScheme][700],
          theme.colors[$colorScheme][400]
        )};
      }
    `};
`;

const GhostButton = styled(BaseButton)`
  background: inherit;
  color: ${({ $colorScheme, theme }) =>
    theme.mode(
      theme.colors[$colorScheme][500],
      theme.colors[$colorScheme][200]
    )};
  ${({ $isDisabled, $colorScheme, theme }) =>
    !$isDisabled &&
    css`
      &:hover {
        background: ${theme.mode(
          theme.colors[$colorScheme][50],
          toRgba(theme.colors[$colorScheme][300], 0.12)
        )};
      }
      &:active {
        background: ${theme.mode(
          theme.colors[$colorScheme][100],
          toRgba(theme.colors[$colorScheme][400], 0.24)
        )};
      }
    `};
`;

const LinkButton = styled(BaseButton)`
  height: auto;
  background: inherit;
  color: ${({ $colorScheme, theme }) =>
    theme.mode(
      theme.colors[$colorScheme][500],
      theme.colors[$colorScheme][200]
    )};
  padding-inline-start: 0;
  padding-inline-end: 0;
  ${({ $isDisabled, $colorScheme, theme }) =>
    !$isDisabled &&
    css`
      &:hover {
        text-decoration: underline;
      }
      &:active {
        color: ${theme.mode(
          theme.colors[$colorScheme][700],
          theme.colors[$colorScheme][400]
        )};
      }
    `};
`;

const buttonVariants: Record<
  ButtonVariant,
  StyledComponent<"button", DefaultTheme, BaseButtonProps, never>
> = {
  solid: SolidButton,
  outline: OutlineButton,
  ghost: GhostButton,
  link: LinkButton,
};

export interface ButtonProps extends StyledComponentPropsWithRef<"button"> {
  size?: ButtonSize;
  variant?: keyof typeof buttonVariants;
  colorScheme?: ColorScheme;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Button = ({
  size = "md",
  variant = "solid",
  colorScheme = "gray",
  isLoading = false,
  isDisabled = false,
  children,
  ...props
}: ButtonProps) => {
  const ButtonComponent = buttonVariants[variant];

  return (
    <ButtonComponent
      $size={size}
      $colorScheme={colorScheme}
      $isDisabled={isLoading || isDisabled}
      disabled={isLoading || isDisabled}
      {...props}
    >
      {isLoading && !isDisabled ? (
        <>
          <span style={{ opacity: 0 }}>{children}</span>
          <Spinner
            colorScheme={colorScheme}
            useFontColor={variant === "solid"}
            size={size}
            style={{ position: "absolute" }}
          />
        </>
      ) : (
        children
      )}
    </ButtonComponent>
  );
};
