import Image from "next/image";
import React from "react";
import { interview } from "../../pages/api/upcomingInterview";

type Props = {
  id: number;
  name: string;
  department: string;
  time: string;
  color: string;
  image: string;
};

export default function UpcomingInterviews() {
  return (
    <div className="bg-white rounded-lg border mt-5">
      <h1 className="text-xl font-bold ml-3">Upcoming Interviews</h1>
      {interview.map(({ id, image, department, name, time }: Props) => (
        <div
          key={id}
          className="flex justify-between rounded-lg border-b mt-3 px-5 py-3"
        >
          <div className="flex space-x-5">
            <div className="bg-gray-50 rounded-full border border-gray-200 p-1 w-100 h-100">
              <Image src={image} alt="image" height={50} width={50} />
            </div>
            <div className="text-sm">
              <h1>{name}</h1>
              <h2>{department}</h2>
            </div>
          </div>
          <h1 className="text-sm">{time}</h1>
        </div>
      ))}
    </div>
  );
}
