import React, { useEffect, useState } from "react";
import { HolidaysTable, HolidaysTopBar } from "../../components";
import { IHoliday } from "../../Types";
import { holiday_api } from "../api/holiday";

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
