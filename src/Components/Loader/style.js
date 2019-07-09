import Styled, { keyframes } from 'styled-components';

const materialPacman = keyframes`
  50% {
		stroke-dasharray: 255px, 10px;
		stroke-dashoffset: 0;
	}

	100% {
		stroke-dashoffset: -265px;
	}
`;

const rotateAnimation = keyframes`
  to {
    transform: rotateZ(360deg);
  }
`;

const OutsideCircle = Styled.circle`
  fill: transparent;
  stroke: #2980b9;
  `;

const LoaderCircle = Styled(OutsideCircle)`
  transform-origin: 45px 45px;
  stroke-dasharray: 10px, 255px;
  stroke-width: 4px;
  stroke: #2980b9;
  animation: ${materialPacman} 2.5s ease forwards infinite, ${rotateAnimation} 2.5s linear forwards infinite;
`;

export default LoaderCircle;
