import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { useTheme } from "../../contexts/ThemeProvider";

interface BaseButtonProps {
  bg: number;
  bgHover: string;
  bgActive: string;
  border?: string;
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
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-weight: 600;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  cursor: pointer;
  border: 0px;
  transition: background-color 0.2s;
  ${({ border }) => border && `border: ${border}`};
  color: ${({ color }) => color};
  background: ${({ bg }) => bg};
  &:hover {
    background: ${({ bgHover }) => bgHover};
  }
  &:active {
    background: ${({ bgActive }) => bgActive};
  }
`;

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "solid" | "outline" | "ghost" | "none";
  colorScheme?: string;
  isLoading?: boolean;
}

function toRgba(color: string, opacity: number) {
  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5, 7), 16);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

export const Button = ({
  variant = "solid",
  colorScheme = "gray",
  isLoading = false,
  children,
  ...props
}: ButtonProps) => {
  const { theme, colorMode } = useTheme();
  const color = theme.colors[colorScheme];

  const isDarkTheme = colorMode === "dark";
  const isSolid = variant === "solid";

  const bgColor = color[isDarkTheme ? 200 : 500];
  const bgHoverColor = color[isDarkTheme ? 300 : 600];
  const bgActiveColor = color[isDarkTheme ? 400 : 700];

  const styles = {
    bg: isSolid ? bgColor : "transparent",
    bgHover: isSolid ? bgHoverColor : toRgba(bgHoverColor, 0.12),
    bgActive: isSolid ? bgActiveColor : toRgba(bgActiveColor, 0.24),
    color: isSolid ? (isDarkTheme ? "black" : "white") : bgColor,
    border: variant === "outline" ? `1px solid ${bgColor}` : undefined,
  };

  return (
    <BaseButton {...styles} {...props}>
      {children}
    </BaseButton>
  );
};
