import IListType from "../../interfaces/lists/IListType";

class GroceryConstants {
  static LIST_NAME = "grocery";
  static LISTS_TYPES: IListType[] = [
    {
      type: "dairy",
      displayName: "Dairy",
    },
    {
      type: "fruits",
      displayName: "Fruits",
    },
    {
      type: "vegetables",
      displayName: "Vegetables",
    },
    {
      type: "frozen",
      displayName: "Frozen Foods",
    },
    {
      type: "meat",
      displayName: "Meat",
    },
    {
      type: "cond",
      displayName: "Condiments & Spices",
    },
    {
      type: "beverages",
      displayName: "Beverages",
    },
    {
      type: "bakery",
      displayName: "Bread & Bakery",
    },
    {
      type: "deli",
      displayName: "Deli",
    },
    {
      type: "other",
      displayName: "Other items",
    },
    {
      type: "done",
      displayName: "Done",
    },
  ];
  static ADD_ITEM_TEXT = "Add New Product";
}

export default GroceryConstants;
