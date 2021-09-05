import { ComponentPropsWithoutRef } from "react";
import styled, {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { toRgba } from "../../utils";

interface BaseButtonProps {
  variant: ButtonVariantStyle;
  colorScheme: string;
}

const variantSolid = css<BaseButtonProps>`
  background: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  color: ${({ theme }) => theme.mode("white", "black")};
  &:hover {
    background: ${({ colorScheme, theme }) =>
      theme.mode(
        theme.colors[colorScheme][600],
        theme.colors[colorScheme][300]
      )};
  }
  &:active {
    background: ${({ colorScheme, theme }) =>
      theme.mode(
        theme.colors[colorScheme][700],
        theme.colors[colorScheme][400]
      )};
  }
`;

const variantOutline = css<BaseButtonProps>`
  border: 1px solid
    ${({ colorScheme, theme }) =>
      theme.mode(
        theme.colors[colorScheme][500],
        theme.colors[colorScheme][200]
      )};
  color: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  &:hover {
    background: ${({ colorScheme, theme }) =>
      theme.mode(
        toRgba(theme.colors[colorScheme][600], 0.12),
        toRgba(theme.colors[colorScheme][300], 0.12)
      )};
  }
  &:active {
    background: ${({ colorScheme, theme }) =>
      theme.mode(
        toRgba(theme.colors[colorScheme][700], 0.24),
        toRgba(theme.colors[colorScheme][400], 0.24)
      )};
  }
`;

const variantGhost = css<BaseButtonProps>`
  color: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  &:hover {
    background: ${({ colorScheme, theme }) =>
      theme.mode(
        toRgba(theme.colors[colorScheme][600], 0.12),
        toRgba(theme.colors[colorScheme][300], 0.12)
      )};
  }
  &:active {
    background: ${({ colorScheme, theme }) =>
      theme.mode(
        toRgba(theme.colors[colorScheme][700], 0.24),
        toRgba(theme.colors[colorScheme][400], 0.24)
      )};
  }
`;

const variantLink = css<BaseButtonProps>`
  color: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: ${({ colorScheme, theme }) =>
      theme.mode(
        theme.colors[colorScheme][700],
        theme.colors[colorScheme][400]
      )};
  }
`;

type ButtonVariantStyle = FlattenInterpolation<
  ThemedStyledProps<BaseButtonProps, any>
>;

const BaseButton = styled.button<BaseButtonProps>`
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
  transition: background-color 0.2s;
  background: inherit;
  color: ${({ theme }) => theme.main.color};
  ${({ variant }) => variant};
`;

type ButtonVariant = "solid" | "outline" | "ghost" | "link";

const variants: Record<ButtonVariant, ButtonVariantStyle> = {
  solid: variantSolid,
  outline: variantOutline,
  ghost: variantGhost,
  link: variantLink,
};

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  colorScheme?: string;
  isLoading?: boolean;
}

export const Button = ({
  variant = "solid",
  colorScheme = "gray",
  isLoading = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      variant={variants[variant]}
      colorScheme={colorScheme}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
