import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" adress="/" Icon={AiFillHome} />
        <MenuItem title="about" adress="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <h2 className="text-2xl">
          <span className="font-bold bg-amber-400 py-1 px-2 rounded-lg mr-2">IMDB</span>
          <span className="text-1 hidden sm:inline">clone</span>
        </h2>
      </div>
    </div>
  );
}
