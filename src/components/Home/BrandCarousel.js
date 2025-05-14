import { ImgComponent } from "../ImgComponent";
import brands from "../../data/brand";
import '../../css/brandCarousel.css'
import Slider from "react-slick";
//קרוסלת מותגים שימוש בslider
export const BrandCarousel = () => {
    const brandsImg = brands;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };
    

    return(
        <>
        <h3 className="brand-title">המותגים שלנו</h3>
        <hr></hr>
        <Slider {...settings} className="custom-slider-brand">
        {brandsImg.map((b) => (
            <ImgComponent path={b.image} className="slider-item-wrapper-brand"/>
        ))}
      </Slider>
        </>
    );
};