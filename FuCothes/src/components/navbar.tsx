import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "@/components/dropdown";
import Searchinput from "./searchinput";
import { CiLocationOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { MdDoubleArrow } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


const acc = [
  {
    name: "Sayan Das",
    avatar: "/images/capy.jpg"
  }
]

const navelem = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Women",
    subitems: [
      {
        title: "Top Wear",
        href: "/",
        description: "A Collection of beautiful tops for your wardrobe to sleek your look",
      },
      {
        title: "Bottom Wear",
        href: "/",
        description: "A Collection of beautiful Pants for your wardrobe to sleek your look",
      },
      {
        title: "Accessories/Jewelry",
        href: "/",
        description: "A Collection of beautiful Jewelry for your wardrobe to sleek your look",
      },
      {
        title: "Shoes",
        href: "/",
        description: "A Collection of beautiful Shoes for your wardrobe to sleek your look",
      },
    ]
  },
  {
    title: "Men",
    subitems: [
      {
        title: "Shirts",
        href: "/",
        description: "A Collection of beautiful shirts for your wardrobe to sleek your look",
      },
      {
        title: "Pants",
        href: "/",
        description: "A Collection of beautiful Pants for your wardrobe to sleek your look",
      },
      {
        title: "Accessories/Jewelry",
        href: "/",
        description: "A Collection of beautiful Jewelry for your wardrobe to sleek your look",
      },
      {
        title: "Shoes",
        href: "/",
        description: "A Collection of beautiful Shoes for your wardrobe to sleek your look",
      },
    ]

  },

]

const Navbar = () => {
  return (
    <div className="w-full bg-black px-6 py-4 block sm:flex justify-between font-rorobot_con tracking-widest items-center text-white font-extralight space-y-4">
      <div className="flex items-center justify-between gap-6 w-full">

        {/* Logo */}
        <a href="/" className="hover:rotate-180 duration-500 ">
          <Image src={"/images/ECELogo.png"} alt="logo" width={35} height={35}></Image>
        </a>

        {/* Drop down nagigation menu */}
        <div className="hidden sm:block">

          <NavigationMenuDemo />
        </div>

        <div className="flex items-center gap-4 ">
          <div className="sm:flex items-center hidden ">
            {/* Search input */}
            <input placeholder="Enter items name" type="text" className="text-sm py-1 placeholder:text-xs placeholder:text-slate-500 placeholder:tracking-wider placeholder:font-normal rounded-l-full outline-none px-4 bg-slate-900" />
            <button className="bg-slate-900 rounded-r-full px-2 py-[0.38rem]">
              <CiSearch />
            </button>
          </div>

          
          <div className=" justify-center flex items-center">
            <h1 className="text-[3vw] md:text-[1.8vw] lg:text-[0.8vw] flex gap-1 items-center text-white font-extralight rounded-full px-1 py-[0.18rem] lg:px-4 lg:py-1 bg-slate-800"><CiLocationOn />India</h1>
            <div className="border-t-[3px] border-slate-800 w-[1vw]"></div>
            {
              acc.map((item) => {
                return (
                  <a href="/profile" className="w-full">

                    <Image src={item.avatar} alt="image" width={40} height={40} className="rounded-full border-[2px] border-popover"></Image>
                  </a>
                )
              })
            }
          </div>
          {/* cart */}
          <a href="/cart" className="p-[0.18rem] lg:p-[0.3rem] bg-slate-800 rounded-full border-popover border-[1px]"><CiShoppingCart size={25} /></a>
        </div>
      </div>

      <div className="sm:hidden flex justify-center">

          <NavigationMenuDemo />
      </div>

      <div className=" sm:hidden  flex">
        <input placeholder="Enter items name" type="text" className=" w-full text-sm py-1 placeholder:text-xs placeholder:text-slate-500 placeholder:tracking-wider placeholder:font-normal rounded-l-full outline-none px-4 bg-slate-900" />
        <button className="bg-slate-900 rounded-r-full px-2 py-[0.38rem]">
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
