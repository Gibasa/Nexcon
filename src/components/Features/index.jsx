import styled from "styled-components";

const features = [
  {
    title: "Membership Organizations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    image: "/images/features/Icon.png",
  },
  {
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    image: "/images/features/Icon-1.png",
  },
  {
    title: "Clubs & Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    image: "/images/features/Icon-2.png",
  },
];

const FeaturesStyled = styled.section`
  padding: 1.8rem clamp(16px, 8vw, 144px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FeaturesText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  h2 {
    font-size: ${({ theme }) => theme.typography.headline2.fontSize};
    color: ${({ theme }) => theme.colors.neutral.D_Grey};

    text-align: center;
  }
  p {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: ${({ theme }) => theme.colors.neutral.Grey};
  }
`;
const FeaturesCards = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
  margin-top: 4rem;
`;
const FeaturesCard = styled.div`
  width: 20vw;
  height: 20vw;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.md};
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  img {
    width: 4vw;
  }
  h3 {
    font-size: ${({ theme }) => theme.typography.headline3.fontSize};
    color: ${({ theme }) => theme.colors.neutral.D_Grey};
  }
  p {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: ${({ theme }) => theme.colors.neutral.Grey};
  }
`;

export default function Features() {
  return (
    <FeaturesStyled>
      <FeaturesText>
        <h2>
          Manage your entire community
          <br /> in a single system
        </h2>
        <p>Who is Nextcent suitable for?</p>
      </FeaturesText>
      <FeaturesCards>
        {features.map((feature, index) => (
          <FeaturesCard key={index}>
            <img src={feature.image} alt={`Image ${index + 1}`} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </FeaturesCard>
        ))}
      </FeaturesCards>
    </FeaturesStyled>
  );
}
