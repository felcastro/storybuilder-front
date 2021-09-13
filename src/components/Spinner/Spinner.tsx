import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { ColorScheme } from "../../theme/styled";

interface StyledSpinnerProps {
  colorScheme: ColorScheme;
  useFontColor: boolean;
}

const StyledSpinner = styled.svg<StyledSpinnerProps>`
  animation: rotate 1s linear infinite;
  width: ${({ theme }) => theme.fontSizes.md};
  height: ${({ theme }) => theme.fontSizes.md};

  & .path {
    stroke: ${({ colorScheme, useFontColor, theme }) =>
      useFontColor
        ? theme.main.background
        : theme.mode(
            theme.colors[colorScheme][600],
            theme.colors[colorScheme][300]
          )};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export interface SpinnerProps extends ComponentPropsWithoutRef<"svg"> {
  colorScheme?: ColorScheme;
  useFontColor?: boolean;
}

export const Spinner = ({
  colorScheme = "gray",
  useFontColor = false,
  ...props
}: SpinnerProps) => (
  <StyledSpinner
    colorScheme={colorScheme}
    useFontColor={useFontColor}
    viewBox="0 0 50 50"
    {...props}
  >
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="5"
    />
  </StyledSpinner>
);
