import MaxWidthWrapper from "./MaxWidthWrapper";
import Logo from "../assets/kifato-logo.webp";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="md:block hidden py-10 bg-gray-100 mt-[5rem]">
      <MaxWidthWrapper className="flex justify-between items-center">
      <NavLink to={'/'}>
      <img src={Logo} alt="kifato logo" className="w-48" />
      </NavLink>
        <div className="flex border-[1px] border-black rounded-md p-2 items-center gap-2 bg-white">
          <Search size={"18"} />
          <input type="text" placeholder="mahsulot bo'yicha qidirish" className=" focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 text-sm w-28 lg:w-48" />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
