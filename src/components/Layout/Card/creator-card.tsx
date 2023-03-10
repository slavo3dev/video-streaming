import Link from "next/link";
import Image from "next/image";
import type { creatorCardProps } from "lib/types";
import { FC } from "react";

export const CreatorCard: FC<creatorCardProps> = ({name, photo, link})=>{

return(
    <>
            <Link href={link} className="flex items-center px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">
                <div className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-400">
                  <Image width={"400"} height={"200"} className="mr-2 r" src={photo} alt="Jese image" />
                  <div className="absolute bottom-1 opacity-75 bg-black w-full text-white font-semibold md:text-xl lg:text-3xl ">
                    <span className=" bottom-4 md:ml-4 ">{name}</span>
                  </div>
                </div>
              </Link>
          </>
)

};