import { motion, Variants } from "framer-motion";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import { toRgba } from "../../utils";

const variants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const StyledBackdrop = styled(motion.div).attrs({
  variants,
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  transition: { duration: 0.05 },
})`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal};
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.mode(
      toRgba(theme.colors.black, 0.6),
      toRgba(theme.colors.black, 0.6)
    )};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Backdrop = ({
  onClick,
  onMouseDown,
  children,
}: HTMLAttributes<HTMLDivElement>) => (
  <StyledBackdrop onClick={onClick} onMouseDown={onMouseDown}>
    {children}
  </StyledBackdrop>
);
