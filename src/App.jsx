import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
import Modal from "./components/ui/Modal";
import Sidebar from "./components/Sidebar";
import CartDisplay from "./components/cart/CartDisplay";
import ImageSlider from "./components/ImageSlider";

import { useState, useEffect } from "react";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const [cartVisible, setCartVisible] = useState(false);

  const [sliderVisible, setSliderVisible] = useState(false);

  const [cartInfo, setCartInfo] = useState({
    numberOfItems: 0,
    price: 125,
  });

  const showSidebar = () => {
    setModalVisible(true);
    setHamburgerOpen(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setHamburgerOpen(false);
    setSliderVisible(false);
  };

  const toggleCart = () => {
    setCartVisible((prevCart) => {
      setCartVisible(!prevCart);
    });
  };

  const updateCart = (count) => {
    setCartInfo((prevCartInfo) => {
      return {
        ...prevCartInfo,
        numberOfItems: prevCartInfo.numberOfItems + count,
      };
    });
  };

  const clearCart = () => {
    setCartInfo((prevCartInfo) => {
      return {
        ...prevCartInfo,
        numberOfItems: 0,
      };
    });
  };

  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const showModalSlider = () => {
    if (windowSize >= 1024) {
      setModalVisible(true);
      setSliderVisible(true);
    }
  };

  return (
    <main id="app" className="max-w-[1024px] flex flex-col">
      {modalVisible && hamburgerOpen && (
        <Modal
          closeModal={closeModal}
          content={<Sidebar closeSidebar={closeModal} />}
        />
      )}
      {modalVisible && sliderVisible && (
        <Modal
          closeModal={closeModal}
          content={<ImageSlider closeSlider={closeModal} showButtons={true} />}
        />
      )}
      <Header
        showSidebar={showSidebar}
        toggleCart={toggleCart}
        itemsInCart={cartInfo.numberOfItems}
      />

      <div className="relative lg:flex gap-8 lg:grow lg:mt-24">
        <Gallery showModalSlider={showModalSlider} />
        {cartVisible && (
          <CartDisplay cartInfo={cartInfo} clearCart={clearCart} />
        )}
        <Main updateCart={updateCart} />
      </div>
    </main>
  );
}

export default App;
