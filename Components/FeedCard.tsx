import React from "react";
import Image from "next/image";
import { TiMessage } from "react-icons/ti";
import { LiaRetweetSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { LuUpload } from "react-icons/lu";

type Props = {};

export default function FeedCard({}: Props) {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-200 p-4 hover:bg-slate-200 transition-all cursor-pointer">
      <div className="grid grid-cols-12 py-2">
        <div className="col-span-1">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/78919378?v=4"
            alt="image-user"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11 pl-2">
          <h5>Anshul Malokar</h5>
          <p>
            Fanbase (in India, Pakistan, Bangladesh) are destroying Gentleman's
            Game 🤐 Now, in T20 World Cup 2024, Umpires will be dragged on
            Social Media, some will favour us and many with abuse us😶
          </p>
          <div className="flex pr-10 justify-between mt-5 text-xl items-center w-[90%]">
            <div>
              <TiMessage />
            </div>
            <div>
              <LiaRetweetSolid />
            </div>
            <div>
              <CiHeart />
            </div>
            <div>
              <LuUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
