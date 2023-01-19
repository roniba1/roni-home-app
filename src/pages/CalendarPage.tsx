import React, { useEffect, useState } from "react";
import IEventData from "../interfaces/calendar/IEventData";
import IMonthEvents from "../interfaces/calendar/IMonthEvents";
import IMonthData from "../interfaces/calendar/IMonthData";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { Calendar } from "antd";
import axios from "axios";
dayjs.locale("zh-cn");

const CalendarPage: React.FC = () => {
  const [calendarData, setCalendarData] = useState<IMonthEvents | null>(null);
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());

  const fetchData = async (currentMonth: number) => {
    const response = await axios.get<IMonthData>(
      `http://localhost:3001/calendar/${currentMonth}`
    );
    setCalendarData(response.data.content);
  };

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    fetchData(currentMonth);
  }, [currentMonth]);

  const onDateChange = (date: dayjs.Dayjs) => {
    setCurrentMonth(date.month());
  };

  const getListData = (value: dayjs.Dayjs) => {
    let listData: IEventData[] = [];
    if (value.month() !== currentMonth) {
      return listData;
    }
    let event = calendarData?.find((item) => {
      return item.id === value.date();
    });
    if (event) {
      listData.push(event);
    }
    return listData;
  };

  const dateCellRender = (value: dayjs.Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item: IEventData) => (
          <li key={item.content}>{item.content}</li>
        ))}
      </ul>
    );
  };
  return <Calendar dateCellRender={dateCellRender} onChange={onDateChange} />;
};

export default CalendarPage;
