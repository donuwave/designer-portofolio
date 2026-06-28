import Link from 'next/link';
import styled from 'styled-components';

export const SContainer = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 100px;
  padding: 100px 0;
  perspective: 1400px;
`;

interface SItemProps {
  $rotateY: number;
}

export const SItem = styled(Link)<SItemProps>`
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 250px;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  display: block;
  box-shadow:
    0 16px 30px rgba(0, 0, 0, 0.24),
    0 4px 10px rgba(0, 0, 0, 0.14);
  background: #111;
  color: #ffffff;
  text-decoration: none;
  transform-style: preserve-3d;
  transform-origin: center center;
  transform: rotateY(${({ $rotateY }) => $rotateY}deg);

  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: rotateY(${({ $rotateY }) => $rotateY * 0.55}deg) translateY(-8px) scale(1.03);
    box-shadow:
      0 22px 40px rgba(0, 0, 0, 0.28),
      0 8px 16px rgba(0, 0, 0, 0.16);
    z-index: 10;
  }

  &::after {
    content: '';
    position: absolute;
    inset: auto 0 0;
    height: 48%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.78) 100%);
    pointer-events: none;
  }

  & span {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 16px;
    z-index: 1;
    font-size: 20px;
    line-height: 1;
    font-weight: 700;
  }
`;

export const SImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  backface-visibility: hidden;
`;
