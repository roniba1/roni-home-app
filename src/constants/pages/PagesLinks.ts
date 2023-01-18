import IPageLink from "../../interfaces/pages/IPageLink";

const PagesLinks: IPageLink[] = [
    {
        label:'Home',
        path: '/',
        icon: 'HomeOutlined'
    },
    {
        label:'To Do List',
        path: '/todoList',
        icon: 'BarsOutlined'
    },
    {
        label:'Grocery List',
        path: '/groceryList',
        icon: 'ShoppingCartOutlined'
    },
    {
        label:'Calendar',
        path: '/calendar',
        icon: 'CalendarOutlined'
    },
    {
        label:'Forecast',
        path: '/forecast',
        icon: 'CloudOutlined'
    }
];

export default PagesLinks;


