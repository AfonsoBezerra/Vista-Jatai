import Image from 'next/image';
import { HeroStyle } from './style';

const Hero = () => {
  return (
    <HeroStyle>
      <Image
        alt=""
        className="hero"
        src="/img/hero-banner.jpg"
        width={1920}
        height={730}
      />
      <Image
        alt=""
        className="hero-mobile"
        src="/img/hero-banner-mobile.jpg"
        width={1920}
        height={730}
      />
    </HeroStyle>
  );
};

export default Hero;
