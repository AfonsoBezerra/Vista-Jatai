import styled from 'styled-components';

export const HeroStyle = styled.div`
  width: 100%;
  height: 85vh;
  background-color: black;

  .hero {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .hero-mobile {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
    object-position: bottom;

    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    height: 95vh;
  }
`;
