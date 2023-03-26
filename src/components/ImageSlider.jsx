import React, { useState } from "react";

import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";

import product1Thumbnail from "../assets/image-product-1-thumbnail.jpg";
import product2Thumbnail from "../assets/image-product-2-thumbnail.jpg";
import product3Thumbnail from "../assets/image-product-3-thumbnail.jpg";
import product4Thumbnail from "../assets/image-product-4-thumbnail.jpg";

import CloseIcon from "../assets/CloseIcon";
import NextIcon from "../assets/NextIcon";
import PrevIcon from "../assets/PrevIcon";

function ImageSlider(props) {
  const [slides, setSlides] = useState([
    {
      url: product1,
      title: "Image 1",
      thumbnail: product1Thumbnail,
      active: true,
    },
    {
      url: product2,
      title: "Image 2",
      thumbnail: product2Thumbnail,
      active: false,
    },
    {
      url: product3,
      title: "Image 3",
      thumbnail: product3Thumbnail,
      active: false,
    },
    {
      url: product4,
      title: "Image 4",
      thumbnail: product4Thumbnail,
      active: false,
    },
  ]);

  const thumbnails = slides.map((slide, index) => {
    return (
      <button
        key={slide.title}
        className={`rounded-md w-[72px] cursor-pointer border-orange-500 bg-white ${
          slide.active ? "border-2" : ""
        }`}
      >
        <img
          src={slide.thumbnail}
          className={`hover:opacity-30 rounded-md ${
            slide.active ? "opacity-30" : ""
          }`}
          alt=""
          onClick={() => setImage(index)}
        />
      </button>
    );
  });

  const setImage = (imageIndex) => {
    setSlides(
      slides.map((slide, index) => {
        if (index == imageIndex) {
          return {
            ...slide,
            active: true,
          };
        } else {
          return {
            ...slide,
            active: false,
          };
        }
      })
    );

    setCurrentIndex(imageIndex);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setImage(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setImage(newIndex);
  };

  return (
    <section className="h-full lg:min-h-[500px] lg:max-h-[600px] relative lg:static flex flex-col items-center">
      <button
        className={`absolute top-[-5%] right-[0%] text-white hover:text-orange-500 p-1 ${
          props.showButtons ? "flex" : "hidden"
        }`}
        onClick={props.closeSlider}
      >
        <CloseIcon color="currentColor" />
      </button>
      <button
        className={`bg-white rounded-full h-8 w-8 absolute  flex justify-center items-center hover:text-orange-500 ${
          props.showButtons
            ? "top-[40%] left-[-3%]"
            : "lg:hidden top-[45%] left-[5%]"
        }`}
        onClick={goToPrevious}
      >
        <PrevIcon color="currentColor" />
      </button>
      <section
        style={slideStyles}
        className="lg:rounded-2xl lg:max-h-[500px] lg:min-h-[400px] lg:cursor-pointer"
        onClick={props.showModalSlider}
      ></section>
      <button
        className={`bg-white rounded-full h-8 w-8 absolute  flex justify-center items-center hover:text-orange-500 ${
          props.showButtons
            ? "top-[40%] right-[-3%]"
            : "lg:hidden top-[45%] right-[5%]"
        }`}
        onClick={goToNext}
      >
        <NextIcon color="currentColor" />
      </button>
      <section className="lg:flex justify-between w-full max-w-[400px] py-5 hidden">
        {thumbnails}
      </section>
    </section>
  );
}

export default ImageSlider;
