import { ReactNode } from "react";
import styled from "styled-components";
import { Button, ButtonProps } from "../Button";

const StyledButton = styled(Button)`
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export interface IconButtonProps extends ButtonProps {
  icon: ReactNode;
  ariaLabel: string;
}

export const IconButton = ({
  icon,
  ariaLabel,
  variant = "ghost",
  colorScheme = "primary",
  children,
  ...props
}: IconButtonProps) => (
  <StyledButton
    variant={variant}
    colorScheme={colorScheme}
    aria-label={ariaLabel}
    {...props}
  >
    {icon}
  </StyledButton>
);
