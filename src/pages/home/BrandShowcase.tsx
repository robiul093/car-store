
import styled, { keyframes } from "styled-components";

// Brand logo imports (replace with your actual logo files)
import BMWLogo from "../../assets/react.svg";
import MercedesLogo from "../../assets/react.svg";
import AudiLogo from "../../assets/react.svg";
import TeslaLogo from "../../assets/react.svg";
import ToyotaLogo from "../../assets/react.svg";
import FordLogo from "../../assets/react.svg";
import PorscheLogo from "../../assets/react.svg";
import HondaLogo from "../../assets/react.svg";

const brands = [
  { id: 1, name: "BMW", logo: BMWLogo },
  { id: 2, name: "Mercedes", logo: MercedesLogo },
  { id: 3, name: "Audi", logo: AudiLogo },
  { id: 4, name: "Tesla", logo: TeslaLogo },
  { id: 5, name: "Toyota", logo: ToyotaLogo },
  { id: 6, name: "Ford", logo: FordLogo },
  { id: 7, name: "Porsche", logo: PorscheLogo },
  { id: 8, name: "Honda", logo: HondaLogo },
];

// Double the array for seamless looping
const doubledBrands = [...brands, ...brands];

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// const BrandShowcaseContainer = styled.section`
//   padding: 4rem 0;
//   background: linear-gradient(180deg, #f8f8f8 0%, #ffffff 100%);
//   overflow: hidden;
//   position: relative;

//   &::before,
//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     width: 100px;
//     z-index: 2;
//     pointer-events: none;
//   }

//   &::before {
//     left: 0;
//     background: linear-gradient(
//       90deg,
//       rgba(255, 255, 255, 1) 0%,
//       rgba(255, 255, 255, 0) 100%
//     );
//   }

//   &::after {
//     right: 0;
//     background: linear-gradient(
//       90deg,
//       rgba(255, 255, 255, 0) 0%,
//       rgba(255, 255, 255, 1) 100%
//     );
//   }
// `;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ffffff;
  font-weight: 600;
`;

const Marquee = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 40s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }
`;

const BrandItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  padding: 0 2rem;
  transition: all 0.3s ease;

  img {
    height: 40px;
    width: auto;
    object-fit: contain;
    filter: grayscale(100%) opacity(70%);
    transition: all 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%) opacity(100%);
    transform: scale(1.1);
  }
`;

const BrandShowcase = () => {
  return (
    // <BrandShowcaseContainer>
      <div className="container mx-auto px-4 py-14">
      <SectionTitle>Trusted by Top Brands</SectionTitle>
      <div style={{ overflow: "hidden" }}>
        <Marquee>
          {doubledBrands.map((brand) => (
            <BrandItem key={`${brand.id}-${Math.random()}`}>
              <img
                src={brand.logo}
                alt={brand.name}
                title={brand.name}
                loading="lazy"
              />
            </BrandItem>
          ))}
        </Marquee>
      </div>
      </div>
    //</BrandShowcaseContainer>
  );
};

export default BrandShowcase;
