import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeProvider";
import { useToggle } from "../../hooks/useToggle";
import { authService } from "../../services/";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { AuthFormType, AuthForm } from "../AuthForm";

const NavbarContentOuter = styled.header`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 3;
  background: ${({ theme }) => theme.main.background};
  border-bottom: 1px solid ${({ theme }) => theme.main.borderColor};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  height: 4rem;
`;

const NavbarHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const NavbarNav = styled.div`
  *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useTheme();
  const [isSignModalOpen, toggleSignModal] = useToggle();
  const [selectedSignForm, setSelectedSignForm] = useState<AuthFormType>();

  const { user } = useAuth();

  function handleToggleSignModal(signForm: AuthFormType) {
    toggleSignModal();
    setSelectedSignForm(signForm);
  }

  return (
    <NavbarContentOuter>
      <NavbarContent>
        <NavbarHeading>storybuilder</NavbarHeading>
        <NavbarNav>
          <Button colorScheme="primary" onClick={toggleColorMode}>
            {colorMode}
          </Button>
          {user ? (
            <Button variant="outline" onClick={authService.signOut}>
              Sign out
            </Button>
          ) : (
            <>
              <Button
                colorScheme="primary"
                variant="ghost"
                onClick={() => handleToggleSignModal("signIn")}
              >
                Sign in
              </Button>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleToggleSignModal("signUp")}
              >
                Sign up
              </Button>
            </>
          )}
        </NavbarNav>
      </NavbarContent>
      <Modal isOpen={isSignModalOpen} onClose={toggleSignModal}>
        <AuthForm onSubmit={toggleSignModal} defaultForm={selectedSignForm} />
      </Modal>
    </NavbarContentOuter>
  );
};
