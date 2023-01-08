import React, {useEffect, useState} from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { Badge, Calendar } from 'antd'
import FetcherService from "../services/FetcherService";
import axios from "axios";
dayjs.locale('zh-cn');

interface eventData {
    type: "warning" | "success" | "error" | "processing" | "default" | undefined;
    content: string;
}

type MonthEvents = eventData[];

const CalendarPage: React.FC = () => {
    const [calendarData, setCalendarData] = useState<MonthEvents[] | null>(null);

    const fetchData = async () => {
        const response = await axios.get<MonthEvents[]>(`http://localhost:3001/calendar`);
        setCalendarData(response.data);
    }

    // useEffect(() => {
    //     // noinspection JSIgnoredPromiseFromCall
    //     fetchData();
    // }, []);

    const getListData = (value: dayjs.Dayjs) => {
        let listData: eventData[] = [];
        switch (value.date()) {
            case 8:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                ];
                break;
            case 10:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event.',
                    },
                ];
                break;
            case 15:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event',
                    },
                    {
                        type: 'success',
                        content: 'This is very long usual event。。....',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 1.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 2.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 3.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 4.',
                    },
                ];
                break;
            default:
        }
        //return (calendarData && calendarData[value.month()]) || [];
        return listData || [];
    };

    const getMonthData = (value: dayjs.Dayjs) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = (value: dayjs.Dayjs) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value: dayjs.Dayjs) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item: eventData) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
}

export default CalendarPage;