import styled from "styled-components";
import Button from "../UI/Button";

const HeroStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral.Silver};
  padding: 1.8rem clamp(16px, 8vw, 144px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 350px;
    height: auto;
  }
`;
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  h1 {
    font-size: ${({ theme }) => theme.typography.headline1.fontSize};
    color: ${({ theme }) => theme.colors.neutral.D_Grey};

  }
  h1:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.primary.primary};
  }
  p {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    color: ${({ theme }) => theme.colors.neutral.Grey};
  }
`;

export default function Hero() {
  return (
    <HeroStyled>
      <HeroContent>
        <h1>Lessons and insights</h1>
        <h1>from 8 years</h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button variant="primary" size="small">
          Register
        </Button>
      </HeroContent>
      <img src="/images/IllustrationHero.png" alt="Illustration Hero Image" />
    </HeroStyled>
  );
}
