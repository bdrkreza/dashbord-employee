import React, { useEffect, useState } from "react";
import { HolidaysTable, HolidaysTopBar } from "../../components";
import { holiday_api } from "../api/holiday";

interface IHoliday {
  id: string;
  weakly: string;
  date: string;
  holiday: string;
  color: string;
}

export default function Holidays() {
  const [holiday, setHoliday] = useState<IHoliday[]>([]);

  useEffect(() => {
    setHoliday(holiday_api);
  }, []);

  return (
    <div>
      <HolidaysTopBar />
      <HolidaysTable holiday={holiday} />
    </div>
  );
}
