import { ComponentPropsWithoutRef } from "react";
import styled, {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { toRgba } from "../../utils";

interface VariantStyleProps {
  colorScheme: string;
  isLoading: boolean;
  isDisabled: boolean;
}

const variantSolidEvents = css<VariantStyleProps>`
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

const variantSolid = css<VariantStyleProps>`
  background: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  color: ${({ theme }) => theme.mode("white", "black")};
  ${({ isLoading, isDisabled }) =>
    !isLoading && !isDisabled && variantSolidEvents};
`;

const variantOutlineEvents = css<VariantStyleProps>`
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

const variantOutline = css<VariantStyleProps>`
  border: 1px solid
    ${({ colorScheme, theme }) =>
      theme.mode(
        theme.colors[colorScheme][500],
        theme.colors[colorScheme][200]
      )};
  color: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  ${({ isLoading, isDisabled }) =>
    !isLoading && !isDisabled && variantOutlineEvents};
`;

const variantGhostEvents = css<VariantStyleProps>`
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

const variantGhost = css<VariantStyleProps>`
  color: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  ${({ isLoading, isDisabled }) =>
    !isLoading && !isDisabled && variantGhostEvents};
`;

const variantLinkEvents = css<VariantStyleProps>`
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

const variantLink = css<VariantStyleProps>`
  color: ${({ colorScheme, theme }) =>
    theme.mode(theme.colors[colorScheme][500], theme.colors[colorScheme][200])};
  ${({ isLoading, isDisabled }) =>
    !isLoading && !isDisabled && variantLinkEvents};
`;

type ButtonVariantStyle = FlattenInterpolation<
  ThemedStyledProps<VariantStyleProps, any>
>;

type ButtonVariant = "solid" | "outline" | "ghost" | "link";

const variants: Record<ButtonVariant, ButtonVariantStyle> = {
  solid: variantSolid,
  outline: variantOutline,
  ghost: variantGhost,
  link: variantLink,
};

const disabledStyle = css`
  opacity: 0.4;
  cursor: not-allowed;
`;

interface BaseButtonProps {
  variant: ButtonVariant;
  colorScheme: string;
  isLoading: boolean;
  isDisabled: boolean;
}

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
  ${({ variant }) => variants[variant]};
  ${({ isLoading, isDisabled }) => (isLoading || isDisabled) && disabledStyle};
`;

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  colorScheme?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Button = ({
  variant = "solid",
  colorScheme = "gray",
  isLoading = false,
  isDisabled = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      variant={variant}
      colorScheme={colorScheme}
      isLoading={isLoading}
      isDisabled={isDisabled}
      disabled={isLoading || isDisabled}
      {...props}
    >
      {isLoading && !isDisabled ? "Loading..." : children}
    </BaseButton>
  );
};
