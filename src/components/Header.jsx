import menu from "../assets/icon-menu.svg";
import avatar from "../assets/image-avatar.png";
import logo from "../assets/logo.svg";
import CartIcon from "../assets/CartIcon";

function Header(props) {
  return (
    <header className="flex justify-between p-5 lg:pb-0 border-b-2">
      <section className="flex gap-4 lg:gap-12">
        <button className="h-5 lg:hidden" onClick={props.showSidebar}>
          <img src={menu} alt="" />
        </button>
        <img src={logo} alt="" className="h-5" />
        <div className="hidden lg:flex gap-6 text-gray-500">
          <a
            href="#"
            className="hover:border-b-orange-500 border-b-[rgba(0,0,0,0)] border-b-[4px] pb-5 hover:text-black"
          >
            Collections
          </a>
          <a
            href="#"
            className="hover:border-b-orange-500 border-b-[rgba(0,0,0,0)] border-b-[4px] pb-5 hover:text-black"
          >
            Men
          </a>
          <a
            href="#"
            className="hover:border-b-orange-500 border-b-[rgba(0,0,0,0)] border-b-[4px] pb-5 hover:text-black"
          >
            Women
          </a>
          <a
            href="#"
            className="hover:hover:border-b-orange-500 border-b-[rgba(0,0,0,0)] border-b-[4px] pb-5 hover:text-black"
          >
            About
          </a>
          <a
            href="#"
            className="hover:border-b-orange-500 border-b-[rgba(0,0,0,0)] border-b-[4px] pb-5 hover:text-black"
          >
            Contact
          </a>
        </div>
      </section>
      <section className="flex gap-4 items-center lg:pb-5">
        <button
          onClick={props.toggleCart}
          className="relative text-gray-500 hover:text-black"
        >
          <CartIcon color="currentColor" />
          {props.itemsInCart > 0 && (
            <p className="absolute top-[-40%] left-[40%] bg-orange-500 rounded-2xl px-2 text-xs text-white font-bold">
              {props.itemsInCart}
            </p>
          )}
        </button>
        <div className="border-2 rounded-full border-[rgba(0,0,0,0)] hover:border-orange-500 cursor-pointer">
          <img src={avatar} alt="" className="h-5 lg:h-8" />
        </div>
      </section>
    </header>
  );
}

export default Header;
