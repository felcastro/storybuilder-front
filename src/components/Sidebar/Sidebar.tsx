import { useLocation, Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

const SidebarContent = styled.nav`
  position: sticky;
  top: 4rem;
  width: 14rem;
  height: calc(100vh - 4rem);
  overflow-y: auto;
  border-right: 1px solid ${({ theme }) => theme.main.borderColor};

  div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.main.borderColor};
  }
`;

const SidebarGroup = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const SidebarGroupTitle = styled.span`
  display: flex;
  padding-inline: 1rem;
  font-weight: bold;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`;

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled.li`
  display: flex;
  align-items: center;
`;

interface SidebarItemLinkProps extends LinkProps {
  $isSelected?: boolean;
}

const SidebarItemLink = styled(Link)<SidebarItemLinkProps>`
  width: 100%;
  padding-inline: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  ${({ $isSelected, theme }) =>
    $isSelected &&
    `
    background: ${
      theme.colorMode === "dark"
        ? theme.colors.gray[800]
        : theme.colors.gray[50]
    };
    font-weight: bold;
  `}

  &:hover {
    background: ${({ theme }) =>
      theme.colorMode === "dark"
        ? theme.colors.gray[800]
        : theme.colors.gray[50]};
  }
`;

const groups = [
  {
    id: 1,
    links: [
      {
        id: 1,
        label: "Home",
        href: "/",
      },
      {
        id: 2,
        label: "Explore",
        href: "/explore",
      },
      {
        id: 3,
        label: "Creators",
        href: "/creators",
      },
    ],
  },
  {
    id: 2,
    links: [
      {
        id: 1,
        label: "Your Creations",
        href: "/test",
      },
      {
        id: 2,
        label: "Favorites",
        href: "/favorites",
      },
    ],
  },
  {
    id: 3,
    label: "Account",
    links: [
      {
        id: 1,
        label: "Settings",
        href: "/settings",
      },
      {
        id: 2,
        label: "Help",
        href: "/help",
      },
    ],
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <SidebarContent>
      {location.pathname}
      {groups?.map((g) => (
        <SidebarGroup key={g.id}>
          {g.label && (
            <SidebarGroupTitle>{g.label.toUpperCase()}</SidebarGroupTitle>
          )}
          <SidebarList>
            {g.links?.map((l) => (
              <SidebarItem key={l.id}>
                <SidebarItemLink
                  to={{ pathname: l.href }}
                  $isSelected={location.pathname === l.href}
                >
                  {l.label}
                </SidebarItemLink>
              </SidebarItem>
            ))}
          </SidebarList>
        </SidebarGroup>
      ))}
    </SidebarContent>
  );
}
