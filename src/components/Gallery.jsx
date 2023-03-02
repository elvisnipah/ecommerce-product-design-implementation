import React from "react";

import ImageSlider from "./ImageSlider";

function Gallery(props) {
  return (
    <section className="lg:w-full">
      <div className="w-full max-w-[400px] h-[320px] my-0 mx-auto lg:h-[400px]">
        <ImageSlider showModalSlider={props.showModalSlider} />
      </div>
    </section>
  );
}

export default Gallery;
