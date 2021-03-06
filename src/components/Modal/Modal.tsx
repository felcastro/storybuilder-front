import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import FocusLock from "react-focus-lock";
import { Backdrop } from "../Backdrop";
import { IconButton } from "../IconButton";
import { FaTimes } from "react-icons/fa";

const variants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const StyledModal = styled(motion.div).attrs({
  variants,
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  transition: { duration: 0.05 },
})`
  position: relative;
  width: ${({ theme }) => theme.spaces[96]};
  background: ${({ theme }) => theme.main.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadows.lg};
  z-index: 1400;
`;

const ModalCloseButton = styled(IconButton)`
  position: absolute;
  top: ${({ theme }) => theme.spaces[1]};
  right: ${({ theme }) => theme.spaces[1]};
`;

const modalRoot = document.getElementById("modal-root");

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const el = useMemo(() => document.createElement("div"), []);
  const mouseDownTarget = useRef<EventTarget | null>(null);

  useEffect(() => {
    modalRoot?.appendChild(el);

    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el]);

  const onMouseDown = useCallback(
    (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      mouseDownTarget.current = event.target;
    },
    []
  );

  return createPortal(
    <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => {}}>
      {isOpen && (
        <Backdrop
          onClick={(e) => {
            if (mouseDownTarget.current === e.target) {
              onClose();
            }
          }}
          onMouseDown={onMouseDown}
        >
          <FocusLock>
            <StyledModal
              onClick={(e) => e.stopPropagation()}
              onMouseDown={onMouseDown}
            >
              <>
                {children}
                <ModalCloseButton
                  icon={<FaTimes />}
                  ariaLabel="Close button"
                  onClick={onClose}
                />
              </>
            </StyledModal>
          </FocusLock>
        </Backdrop>
      )}
    </AnimatePresence>,
    el
  );
};
