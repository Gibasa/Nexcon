import styled, { css } from "styled-components";


const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;   


  ${({ size, theme }) =>
    size === "small" &&
    css`
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      font-size: ${theme.typography.body3.fontSize};
    `}

  ${({ size, theme }) =>
    size === "large" &&
    css`
      padding: ${theme.spacing.md} ${theme.spacing.lg};
      font-size: ${theme.typography.body1.fontSize};
    `}

  ${({ variant, theme }) =>
    variant === "primary" &&
    css`
      background-color: ${theme.colors.primary.primary};
      color: ${theme.colors.neutral.White};

      &:hover {
        background-color: ${theme.colors.Color_Shade.Shade2};
      }

      &:disabled {
        background-color: ${theme.colors.neutral.L_Grey};
        color: ${theme.colors.neutral.Grey};
        cursor: not-allowed;
      }
    `}

  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      background-color: transparent;
      color: ${theme.colors.primary.primary};
      border: 2px solid ${theme.colors.primary.primary};

      &:hover {
        background-color: ${theme.colors.Color_Tint.Tint5};
      }
    `}
`;

export default function Button({
  children,
  variant = "primary",
  size = "small",
  ...rest
}) {
  return (
    <ButtonStyled variant={variant} size={size} {...rest}>
      {children}
    </ButtonStyled>
  );
}
