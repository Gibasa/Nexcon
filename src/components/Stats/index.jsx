import styled from "styled-components";

const stats = [
  {
    number: "2,245,341",
    description: "Members",
    image: "/images/stats/Icon.svg",
  },
  {
    number: "46,328",
    description: "Clubs",
    image: "/images/stats/Icon-1.svg",
  },
  {
    number: "828,867",
    description: "Event Bookings",
    image: "/images/stats/Icon-2.svg",
  },
  {
    number: "1,926,436",
    description: "Payments",
    image: "/images/stats/Icon-3.svg",
  },
];

const StatsStyled = styled.section`
  padding: 1.8rem clamp(16px, 8vw, 144px);
  background-color: ${({ theme }) => theme.colors.neutral.Silver};
  display: flex;
  align-items: center;
  justify-content:space-between;
`;
const StatsText = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.typography.headline2.fontSize};
    color: ${({ theme }) => theme.colors.neutral.D_Grey};
  }
  h2:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.primary.primary};
  }
  p {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: ${({ theme }) => theme.colors.neutral.Grey};
    font-weight: ${({ theme }) => theme.typography.body2.fontWeight};
  }
`;
const StatsItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`;
const StatsIten = styled.div`
  display: flex;
  width: 50%;
  gap: 2rem;
  padding: 20px 0;
  img{
    width: 3rem;
  }
`;
const StatsItenText = styled.div`
 h3 {
    font-size: ${({ theme }) => theme.typography.headline3.fontSize};
    color: ${({ theme }) => theme.colors.neutral.D_Grey};
  }
  p {
    font-size: ${({ theme }) => theme.typography.body3.fontSize};
    color: ${({ theme }) => theme.colors.neutral.Grey};
    font-weight: ${({ theme }) => theme.typography.body3.fontWeight};
  }
`;

export default function Stats() {
  return (
    <StatsStyled>
      <StatsText>
        <h2>Helping a local</h2>
        <h2>business reinvent itself</h2>
        <p>We reached here with our hard work and dedication</p>
      </StatsText>
      <StatsItens>
        {stats.map((stats, index) => (
          <StatsIten key={index}>
            <img src={stats.image} alt={`Image ${index + 1}`} />
            <StatsItenText>
              <h3>{stats.number}</h3>
              <p>{stats.description}</p>
            </StatsItenText>
          </StatsIten>
        ))}
      </StatsItens>
    </StatsStyled>
  );
}
