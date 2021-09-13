import { Link as RouterLink, LinkProps } from "react-router-dom";
import styled from "styled-components";
import { Button, ButtonProps } from "../Button";

const StyledLink = styled(Button).attrs(() => ({ forwardedAs: RouterLink }))``;

export type LinkButtonProps = LinkProps & ButtonProps;

export const LinkButton = ({
  variant = "link",
  children,
  ...props
}: LinkButtonProps) => (
  <StyledLink variant={variant} {...props}>
    {children}
  </StyledLink>
);
