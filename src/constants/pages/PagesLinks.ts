import IPageLink from "../../interfaces/pages/IPageLink";

export const PATHS = {
  HOME: "/",
  TODO: "/todoList",
  GROCERY: "/groceryList",
  CALENDAR: "/calendar",
  FORECAST: "/forecast",
};

/**
 * This Data structure holds the App pages data
 */
const PAGES_LINKS: IPageLink[] = [
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
    description: "The to-do list page is designed to help you keep track of your tasks with ease. You can create two sublists- the to-do and done tasks, so you can easily see what needs to be done and what has been completed. The interface is user-friendly, so you can add new tasks, delete them and mark them as done with just a tap. With the ability to see all of your tasks in one place, you'll never miss a deadline again."
  },
  {
    label: "Grocery List",
    path: PATHS.GROCERY,
    icon: "ShoppingCartOutlined",
    description:
      "The grocery list page is the perfect solution for keeping track of your shopping needs. Our app allows you to create sub-lists by category, so you can organize your items by aisle or type. You can add items to your lists with just a tap, and remove or mark items as done with ease.",
  },
  {
    label: "Calendar",
    path: PATHS.CALENDAR,
    icon: "CalendarOutlined",
    description: "The calendar page is the perfect way to stay on top of your upcoming events. With a clear and simple layout, you can easily view all of your events for the current month, as well as switch to different months or years with just a tap. With the ability to view your schedule at a glance, you'll always know what's coming up.",
  },
  {
    label: "Forecast",
    path: PATHS.FORECAST,
    icon: "CloudOutlined",
    description: "The forecast page is the perfect way to stay informed about the weather in the places you care about. You can see the current weather in your home, work, and other important locations. You can also select different locations to view their forecast. The weather is updated in real-time and provides you with accurate information about temperature, humidity, wind, and precipitation. With this information, you can plan your day and stay informed about the weather conditions.",
  },
];

export const ARRANGED_PAGES = [PAGES_LINKS[2], PAGES_LINKS[3], PAGES_LINKS[4], PAGES_LINKS[1]];

export default PAGES_LINKS;
