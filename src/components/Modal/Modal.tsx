import styled, { StyledComponentPropsWithRef } from "styled-components";
import { Backdrop } from "../Backdrop";

const StyledModal = styled.div`
  width: ${({ theme }) => theme.spaces[96]};
  background: ${({ theme }) => theme.main.background};
  padding: ${({ theme }) => theme.spaces[4]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

interface ModalProps extends StyledComponentPropsWithRef<"div"> {
  handleClose: () => void;
}

export const Modal = ({ handleClose, children, ...props }: ModalProps) => (
  <Backdrop onClick={handleClose}>
    <StyledModal onClick={(e) => e.stopPropagation()} {...props}>
      {children}
    </StyledModal>
  </Backdrop>
);
