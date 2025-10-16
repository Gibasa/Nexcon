import styled from "styled-components";

const clients = [
  "/images/clients/Logo.png",
  "/images/clients/Logo-1.png",
  "/images/clients/Logo-2.png",
  "/images/clients/Logo-3.png",
  "/images/clients/Logo-4.png",
  "/images/clients/Logo-5.png",
  "/images/clients/Logo-6.png",
];

const ClientsStyled = styled.section`
  padding: 2rem clamp(16px, 8vw, 144px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ClientsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  h2 {
    font-size: ${({ theme }) => theme.typography.headline2.fontSize};
    color: ${({ theme }) => theme.colors.neutral.D_Grey};

  }
  p {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: ${({ theme }) => theme.colors.neutral.Grey};
  }
`;

const ClientsLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  margin-top: 4rem;
`;
const ClentsLogo = styled.img`
  width: 50px;
`;

export default function Clients() {
  return (
    <ClientsStyled>
      <ClientsText>
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
      </ClientsText>
      <ClientsLogos>
        {clients.map((logo, index) => (
          <ClentsLogo key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </ClientsLogos>
    </ClientsStyled>
  );
}
