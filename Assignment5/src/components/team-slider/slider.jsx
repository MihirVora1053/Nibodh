import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let teamMembers = [
  {
    src: "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Kurt&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Squint&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Pale",
  },
  {
    src: "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Sunglasses&hatColor=Blue01&facialHairType=BeardMajestic&facialHairColor=Blonde&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=UpDown&mouthType=Serious&skinColor=Light",
  },
  {
    src: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=BlazerSweater&eyeType=Dizzy&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Light",
  },
  {
    src: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=Hoodie&clotheColor=PastelGreen&eyeType=Default&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Pale",
  },
  {
    src: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Sunglasses&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=Black&clotheType=ShirtScoopNeck&clotheColor=Red&eyeType=Happy&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Brown",
  },
  {
    src: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Prescription02&hairColor=Blue&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=PastelGreen&eyeType=Default&eyebrowType=UpDownNatural&mouthType=Default&skinColor=DarkBrown",
  },
];
export default function slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="container justify-content-center customSlider">
      <h2 className="text-center display-5 text-uppercase">
        Our Volunteer Says
      </h2>
      <div className="line4 my-4">
        <span></span>
      </div>
      <div className="row">
        <div className="col-12 volun">
            <div className="quotes d-flex align-items-center justify-content-center">
            <i class="fas fa-quote-right"></i>
            </div>
        
          Your text goes here. This is just placeholder content.Your text goes
          here. This is just placeholder content.Your text goes here. This is
          just placeholder content.Your text goes here. This is just placeholder
          content.Your text goes here. This is just placeholder content.Your
          text goes here. This is just placeholder content.Your text goes here.
          This is just placeholder content.Your text goes here. This is just
          placeholder content.Your text goes here. This is just placeholder
          content.
        </div>
      </div>
      
      <div className="row justify-content-center py-2 my-3 mx-5 px-3">
        <Slider {...settings}>
          {teamMembers.map((data) => {
            return (
              <div className="d-flex">
                <img
                  style={{ margin: "0 auto" }}
                  className="avatars"
                  src={data.src}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
