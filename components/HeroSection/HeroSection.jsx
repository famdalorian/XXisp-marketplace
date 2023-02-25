import { Button } from "../componentindex";
import images from "../../img";
import Style from "./HeroSection.module.css";
import Image from "next/image"
const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>
            Explore, acquire, and trade NFTs on XXisp 
          </h1>
          <p>
            Discover top-quality NFTs across all domains and market them for
            sale.-  XXisp provides
            unparalleled opportunities for buying and selling these unique
            digital assets.
          </p>
          <Button btnName="start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
