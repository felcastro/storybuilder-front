import { Link as RouterLink, LinkProps } from "react-router-dom";
import styled from "styled-components";
import { Button, ButtonProps } from "../Button";

export const Link = styled(
  ({
    children,
    variant = "link",
    colorScheme = "gray",
    ...props
  }: LinkProps & ButtonProps) => (
    <Button forwardedAs={styled(RouterLink)``} {...props}>
      {children}
    </Button>
  )
)<LinkProps & ButtonProps>``;
