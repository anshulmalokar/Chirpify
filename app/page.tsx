import React from "react";
import { SlSocialTwitter } from "react-icons/sl";
import { CiHome } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import FeedCard from "@/Components/FeedCard";

interface TwitterSideBarButton {
  title: String;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <CiHome />,
  },
  {
    title: "Explore",
    icon: <IoMdSearch />,
  },
  {
    title: "Notifications",
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <CiMail />,
  },
  {
    title: "Bookmark",
    icon: <CiBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <MdAttachMoney />,
  },
  {
    title: "Profile",
    icon: <CiUser />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="flex flex-col col-span-3 border-r-slate-500 flex justify-start pt-1 ml-7">
          <div className="hover:bg-gray-200 rounded-3xl p-2 h-fit w-fit cursor-pointer text-4xl transition-all shadow-sm">
            <SlSocialTwitter />
          </div>
          <div>
            <ul>
              {sideBarMenuItems.map((item, idx) => {
                return (
                  <>
                    <li
                      key={item.title + ""}
                      className="pr-6 items-center rounded-full w-fit flex gap-3 text-2xl py-4 hover:bg-gray-200"
                    >
                      {item.icon} <span className="text-2xl">{item.title}</span>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <button className="mr-10 bg-blue-500 py-3 rounded-full mt-2 hover:bg-blue-700 text-xl text-white">
            Tweet
          </button>
        </div>
        <div    
          className="col-span-6 border-r-[1px] border-l-[1px] border-gray-300 h-screen overflow-scroll no-scrollbar"
        >
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </>
  );
}
