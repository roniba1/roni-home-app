import IPageLink from "../../interfaces/pages/IPageLink";

/**
 * This Data structure holds the App pages data
 */
const PagesLinks: IPageLink[] = [
  {
    label: "Home",
    path: "/",
    icon: "HomeOutlined",
    description: "Home",
  },
  {
    label: "To Do List",
    path: "/todoList",
    icon: "BarsOutlined",
    description: "Our To Do List",
  },
  {
    label: "Grocery List",
    path: "/groceryList",
    icon: "ShoppingCartOutlined",
    description: "Our Grocery List",
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: "CalendarOutlined",
    description: "Calendar with important events",
  },
  {
    label: "Forecast",
    path: "/forecast",
    icon: "CloudOutlined",
    description: "Forecast at our main daily locations",
  },
];

export default PagesLinks;
