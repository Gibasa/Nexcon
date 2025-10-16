import styled from "styled-components";
import Button from "../UI/Button";

const CTAStyled = styled.section`
  padding: 1.8rem clamp(16px, 8vw, 144px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  img{
    width: 25vw;
  }
`;
const CTAText = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-start;    
gap: 1.5rem;
h2 {
    font-size: ${({ theme }) => theme.typography.headline2.fontSize};
    color: ${({ theme }) => theme.colors.neutral.D_Grey};

  }
  p {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: ${({ theme }) => theme.colors.neutral.Grey};
    font-weight: ${({ theme }) => theme.typography.body2.fontWeight};
  }
`;

export default function CTA({ title, description, image, imageDescript }) {
  return (
    <CTAStyled>
      <img src={image} alt={imageDescript} />
      <CTAText>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button variant="primary" size="small">
          Learn More
        </Button>
      </CTAText>
    </CTAStyled>
  );
}
