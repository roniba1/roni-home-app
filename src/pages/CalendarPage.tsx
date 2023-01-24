import React, { useEffect, useState } from "react";
import IEventData from "../interfaces/calendar/IEventData";
import IMonthEvents from "../interfaces/calendar/IMonthEvents";
import IMonthData from "../interfaces/calendar/IMonthData";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { Calendar } from "antd";
import axios from "axios";

dayjs.locale("zh-cn");

/**
 * This component display the calendar page using Antd Calendar component
 */
const CalendarPage: React.FC = () => {
  // calendarData holds all the events data from db
  const [calendarData, setCalendarData] = useState<IMonthEvents | null>(null);

  // currentMonth holds the current month displayed on screen.
  // Can be changed by user interaction
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());

  /**
   * This function receive the currentMonth and fetch the relevant events data from db.
   * After fetching the data - set calendarData piece of state to it.
   *
   * @param {number} currentMonth - The current month displayed on screen
   */
  const fetchData = async (currentMonth: number) => {
    const response = await axios.get<IMonthData>(
      `http://localhost:3001/calendar/${currentMonth}`
    );

    setCalendarData(response.data.content);
  };

  // Call fetchData on first render and each time the currentMonth has changed
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    fetchData(currentMonth);
  }, [currentMonth]);

  /**
   * This function is the onChange handler for user interaction with the Calendar.
   * Responsible for setting currentMonth piece of state with new month.
   *
   * @param {dayjs.Dayjs} date - Current date displayed on screen
   */
  const onDateChange = (date: dayjs.Dayjs) => {
    setCurrentMonth(date.month());
  };

  /**
   * This function receive a date and returns an Array of eventData for the relevat date
   *
   * @param {dayjs.Dayjs} relevantDate - The wanted date
   * @returns {IEventData[]} - Events occurring on relevantDate
   */
  const getListData = (relevantDate: dayjs.Dayjs) => {
    let listData: IEventData[] = [];

    // Make sure the presented month
    if (relevantDate.month() !== currentMonth) {
      return listData;
    }

    // Find the relevantDate data
    let event = calendarData?.find((item) => {
      return item.id === relevantDate.date();
    });

    // Add event to Array
    if (event) {
      listData.push(event);
    }

    return listData;
  };

  /**
   * This function is the dateCellRender callback for Antd Calendar component.
   * It receives value, the date of the current cell to be rendered,
   * And returns a JSX.Element that is the list of content.
   *
   * @param {dayjs.Dayjs} value - Current rendered cell date
   * @returns {JSX.Element} - List of events for rendered cell
   */
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
