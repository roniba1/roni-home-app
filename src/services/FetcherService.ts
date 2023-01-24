import IItems from "../interfaces/items/IItems";
import ISingleItem from "../interfaces/items/ISingleItem";
import axios from "axios";
import { DB_BASE_URL } from "../constants/AppConstants";

/**
 * This is a static service class for Lists pages that communicates with the DB
 */
class FetcherService {
  /**
   * This static function is responsible for fetching the wanted list from DB
   *
   * @param {string} listName - The list name to fetch from DB
   * @returns {Promise<IItems>} - The Promise with the data from DB
   */
  static fetchData = async (listName: string) => {
    const response = await axios.get<IItems>(`${DB_BASE_URL}${listName}`);
    return response.data;
  };

  /**
   * This static function responsible for adding new item to listName list on DB
   * And returns the new object from DB
   *
   * @param {string} listName - The DB list to add the item to
   * @param {content: string, type: string} item - The new item data
   * @returns {Promise<ISingleItem>} - The Promise with the new object from DB
   */
  static addItem = async (
    listName: string,
    item: { content: string; type: string }
  ) => {
    const response = await axios.post<ISingleItem>(
      `${DB_BASE_URL}${listName}`,
      item
    );
    return response.data;
  };

  /**
   * This static function is responsible for deleting from the list "listName" the item with the received id
   *
   * @param {string} listName - The DB list to delete from
   * @param {string} id - The id of the relevant item
   * @returns {Promise<void>}
   */
  static deleteItem = async (listName: string, id: number) => {
    await axios.delete<ISingleItem>(`${DB_BASE_URL}${listName}/${id}`);
  };

  /**
   * This static function is responsible for edit the item with the received id from the list "listName"
   * And change its data to be the received item data
   *
   * @param {string} listName - The DB list to edit
   * @param {number} id - The id of the relevant item
   * @param {ISingleItem} item - The new data for item
   * @returns {Promise<ISingleItem>} - The new data object from DB
   */
  static editItem = async (listName: string, id: number, item: ISingleItem) => {
    const response = await axios.put<ISingleItem>(
      `${DB_BASE_URL}${listName}/${id}`,
      {
        ...item,
      }
    );
    return response.data;
  };
}

export default FetcherService;
