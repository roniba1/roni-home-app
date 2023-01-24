import IMonthEvents from "./IMonthEvents";

/**
 * This interface represents Calendar events data for one month.
 * id : The month on the year
 * content : An Array with all month events
 */
interface IMonthData {
  id: number;
  content: IMonthEvents;
}

export default IMonthData;
