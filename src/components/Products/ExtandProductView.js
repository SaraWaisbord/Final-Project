import { useState } from "react";
import { ImgComponent } from "../ImgComponent";
import "../../css/extandProductView.css";

const ExtandProductView = ({ imagArry }) => {
  const [mainImg, setMainImg] = useState(imagArry[0]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handleThumbClick = (img, index) => {
    setMainImg(img);

    // אם לחצו על תמונה שמחוץ לתחום התצוגה - נזיז את התחום
    if (index < startIndex || index >= startIndex + visibleCount) {
      let newStart = index - visibleCount + 1;
      if (newStart < 0) newStart = 0;
      if (newStart > imagArry.length - visibleCount) {
        newStart = imagArry.length - visibleCount;
      }
      setStartIndex(newStart);
    }
  };

  const visibleImages = imagArry.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="extended-product-view">
      <div className="main-image">
        <ImgComponent path={mainImg} />
      </div>
      <div className="thumbnails">
        {visibleImages.map((img, i) => {
          const realIndex = startIndex + i;
          return (
            <img
              key={realIndex}
              src={img}
              alt={`img-${realIndex}`}
              className={`thumbnail ${mainImg === img ? "active" : ""}`}
              onClick={() => handleThumbClick(img, realIndex)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExtandProductView;
