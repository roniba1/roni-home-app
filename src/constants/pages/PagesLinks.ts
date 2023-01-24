import IPageLink from "../../interfaces/pages/IPageLink";

export const PATHS = {
  HOME: "/",
  TODO: "/todoList",
  GROCERY: "/groceryList",
  CALENDAR: "/calendar",
  FORECAST: "/forecast"
};

/**
 * This Data structure holds the App pages data
 */
const PagesLinks: IPageLink[] = [
  {
    label: "Home",
    path: PATHS.HOME,
    icon: "HomeOutlined",
    description: "Home",
  },
  {
    label: "To Do List",
    path: PATHS.TODO,
    icon: "BarsOutlined",
    description: "Our To Do List",
  },
  {
    label: "Grocery List",
    path: PATHS.GROCERY,
    icon: "ShoppingCartOutlined",
    description: "Our Grocery List",
  },
  {
    label: "Calendar",
    path: PATHS.CALENDAR,
    icon: "CalendarOutlined",
    description: "Calendar with important events",
  },
  {
    label: "Forecast",
    path: PATHS.FORECAST,
    icon: "CloudOutlined",
    description: "Forecast at our main daily locations",
  },
];

export default PagesLinks;
