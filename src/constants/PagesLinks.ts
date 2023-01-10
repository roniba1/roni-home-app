export interface PageLink {
    label: string,
    path: string
}

export const PagesLinks: PageLink[] = [
    {
        label:'Home',
        path: '/'
    },
    {
        label:'To Do List',
        path: '/todoList'
    },
    {
        label:'Grocery List',
        path: '/groceryList'
    },
    {
        label:'Calendar',
        path: '/calendar'
    },
    {
        label:'Forecast',
        path: '/forecast'
    }
];


