import styled from "styled-components";
import { useTheme } from "../../contexts/ThemeProvider";
import { Button } from "../Button";
import { Link } from "../Link";

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

  return (
    <NavbarContentOuter>
      <NavbarContent>
        <NavbarHeading>storybuilder</NavbarHeading>
        <NavbarNav>
          <Button colorScheme="primary" onClick={toggleColorMode}>
            {colorMode}
          </Button>
          <Link to="/signin" colorScheme="primary" variant="ghost">
            Sign in
          </Link>
          <Link to="/signup" colorScheme="primary" variant="outline">
            Sign up
          </Link>
        </NavbarNav>
      </NavbarContent>
    </NavbarContentOuter>
  );
};
