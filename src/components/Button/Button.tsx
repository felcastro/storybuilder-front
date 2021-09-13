import { ComponentPropsWithRef } from "react";
import styled, { css, DefaultTheme, StyledComponent, StyledComponentPropsWithRef } from "styled-components";
import { ColorScheme } from "../../theme/styled";
import { toRgba } from "../../utils";
import { Spinner } from "../Spinner";

type ButtonVariant = "solid" | "outline" | "ghost" | "link";

interface BaseButtonProps {
  variant: ButtonVariant;
  colorScheme: ColorScheme;
  isDisabled: boolean;
}

export const BaseButton = styled.button<BaseButtonProps>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  user-select: none;
  text-transform: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  cursor: pointer;
  border: 0px;
  transition: all 0.2s;
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
    `};
`;

const SolidButton = styled(BaseButton)`
  background: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  color: ${({ theme }) => theme.main.background};
  ${({ isDisabled, colorScheme, theme }) =>
    !isDisabled &&
    css`
      &:hover {
        background: ${theme.mode(
          theme.colors[colorScheme][600],
          theme.colors[colorScheme][300]
        )};
      }
      &:active {
        background: ${theme.mode(
          theme.colors[colorScheme][700],
          theme.colors[colorScheme][400]
        )};
      }
    `};
`;

const OutlineButton = styled(BaseButton)`
  background: inherit;
  border: 1px solid
    ${({ colorScheme, theme }) =>
      theme.mode(
        theme.colors[colorScheme][500],
        theme.colors[colorScheme][200]
      )};
  color: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  ${({ isDisabled, colorScheme, theme }) =>
    !isDisabled &&
    css`
      &:hover {
        background: ${theme.mode(
          theme.colors[colorScheme][500],
          theme.colors[colorScheme][200]
        )};
        border-color: ${theme.mode(
          theme.colors[colorScheme][500],
          theme.colors[colorScheme][200]
        )};
        color: ${({ theme }) => theme.main.background};
      }
      &:active {
        background: ${theme.mode(
          theme.colors[colorScheme][700],
          theme.colors[colorScheme][400]
        )};
        border-color: ${theme.mode(
          theme.colors[colorScheme][700],
          theme.colors[colorScheme][400]
        )};
      }
    `};
`;

const GhostButton = styled(BaseButton)`
  background: inherit;
  color: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  ${({ isDisabled, colorScheme, theme }) =>
    !isDisabled &&
    css`
      &:hover {
        background: ${theme.mode(
          theme.colors[colorScheme][50],
          toRgba(theme.colors[colorScheme][300], 0.12)
        )};
      }
      &:active {
        background: ${theme.mode(
          theme.colors[colorScheme][100],
          toRgba(theme.colors[colorScheme][400], 0.24)
        )};
      }
    `};
`;

const LinkButton = styled(BaseButton)`
  background: inherit;
  color: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  ${({ isDisabled, colorScheme, theme }) =>
    !isDisabled &&
    css`
      &:hover {
        text-decoration: underline;
      }
      &:active {
        color: ${theme.mode(
          theme.colors[colorScheme][700],
          theme.colors[colorScheme][400]
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
  variant?: keyof typeof buttonVariants;
  colorScheme?: ColorScheme;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Button = styled(
  ({
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
        variant={variant}
        colorScheme={colorScheme}
        isDisabled={isLoading || isDisabled}
        disabled={isLoading || isDisabled}
        {...props}
      >
        {isLoading && !isDisabled ? (
          <>
            <span style={{ opacity: 0 }}>{children}</span>
            <Spinner
              colorScheme={colorScheme}
              useFontColor={variant === "solid"}
              style={{ position: "absolute" }}
            />
          </>
        ) : (
          children
        )}
      </ButtonComponent>
    );
  }
)``;

// const variants: Record<ButtonVariant, ButtonVariantStyle> = {
//   outline: variantOutline,
//   link: variantLink,
// };

// export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
//   variant?: ButtonVariant;
//   colorScheme?: ColorScheme;
//   isLoading?: boolean;
//   isDisabled?: boolean;
// }

// export const Button = ({
//   variant = "outline",
//   colorScheme = "gray",
//   isLoading = false,
//   isDisabled = false,
//   children,
//   ...props
// }: ButtonProps) => {
//   return (
//     <BaseButton
//       variant={variant}
//       colorScheme={colorScheme}
//       isDisabled={isLoading || isDisabled}
//       disabled={isLoading || isDisabled}
//       {...props}
//     >
//       {isLoading && !isDisabled ? (
//         <>
//           <span style={{ opacity: 0 }}>{children}</span>
//           <Spinner
//             colorScheme={colorScheme}
//             useFontColor={variant === "outline"}
//             style={{ position: "absolute" }}
//           />
//         </>
//       ) : (
//         children
//       )}
//     </BaseButton>
//   );
// };
