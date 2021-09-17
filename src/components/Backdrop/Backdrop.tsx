import styled, { StyledComponentPropsWithRef } from "styled-components";

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal};
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black}e1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type BackdropProps = StyledComponentPropsWithRef<"div">;

export const Backdrop = ({ onClick, children, ...props }: BackdropProps) => (
  <StyledBackdrop onClick={onClick} {...props}>
    {children}
  </StyledBackdrop>
);
