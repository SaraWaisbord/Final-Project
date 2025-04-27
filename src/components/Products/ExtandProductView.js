import { useState } from "react";
import { ImgComponent } from "../ImgComponent";
import "../../css/extandProductView.css"

export const ExtandProductView = ( {imagArry} ) => {
  const [mainImg, setMainImg] = useState(imagArry[0]);

  return (
    <div className="extended-product-view">
      <div className="main-image">
        <ImgComponent path={mainImg} />  
      </div>
      <div className="thumbnails">
        {imagArry.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`img-${i}`}
            className={`thumbnail ${mainImg === img ? "active" : ""}`}
            onMouseEnter={() => setMainImg(img)}//עדיף לחיצה או מגע? מה אומרת רחלי?
          />
        ))}
      </div>
    </div>
  );
};
