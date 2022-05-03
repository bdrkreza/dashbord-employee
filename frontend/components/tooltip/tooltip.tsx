import { ReactNode } from "react";

interface IProps {
  open: boolean;
  message: string;
  children: ReactNode;
}

export const Tooltip = ({ open, message, children }: IProps) => {
  return (
    <div className="relative flex flex-col items-center group ">
      {children}
      <div
        className={`${
          open ? "hidden" : "group-hover:flex"
        } absolute left-16  flex-col items-center hidden mb-6`}
      >
        <span className="relative z-10 p-2 text-xl leading-none text-white whitespace-no-wrap bg-gray-900 shadow-lg rounded-md">
          {message}
          <div className="absolute w-3 h-3  ml-7 -mt-4 -left-8 rotate-45 bg-gray-900"></div>
        </span>
      </div>
    </div>
  );
};
