import styled from "styled-components";
import Button from "../UI/Button";

const Nav = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem clamp(16px, 8vw, 144px);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem 5%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 28px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: 500;
    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;

    a {
      font-size: 0.9rem;
    }
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo>
        <img src="/images/Logo.svg" alt="Nexcent Logo" />
      </Logo>

      <NavLinks>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#community">Community</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <Button variant="primary" size="small">
          Register Now{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      </NavLinks>
    </Nav>
  );
}
