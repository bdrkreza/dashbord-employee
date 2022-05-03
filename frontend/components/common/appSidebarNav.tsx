import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Tooltip } from "../tooltip/tooltip";
interface IProps {
  items: any;
  open: boolean;
  index: number;
}

export default function AppSidebarNav({ items, open, index }: IProps) {
  const router = useRouter();
  const { link, title, icon: Icon } = items;
  const isActive = router.asPath === items.link;
  return (
    <React.Fragment>
      <Link key={index} href={link} passHref>
        <li
          className={` ${
            isActive
              ? "text-black font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
              : "text-gray-300 font-serif  hover:bg-gray-600 hover:text-gray-200 hover:underline-offset-2"
          } flex items-center mt-5  space-x-4  rounded-md p-2 cursor-pointer
              ${index === 0 && "bg-light-white"}
           
              `}
        >
          <Tooltip message={title} open={open}>
            <Icon className="h-6 w-6" />
          </Tooltip>
          <span className={`${!open && "hidden"} origin-left duration-200 `}>
            {title}
          </span>
        </li>
      </Link>
    </React.Fragment>
  );
}
