import IItems from "../interfaces/items/IItems";
import ISingleItem from "../interfaces/items/ISingleItem";
import axios from "axios";

class FetcherService {
  static fetchData = async (listName: string) => {
    const response = await axios.get<IItems>(
      `http://localhost:3001/${listName}`
    );
    return response.data;
  };

  static addItem = async (listName: string, item: object) => {
    const response = await axios.post<ISingleItem>(
      `http://localhost:3001/${listName}`,
      item
    );
    return response.data;
  };

  static deleteItem = async (listName: string, id: number) => {
    await axios.delete<ISingleItem>(`http://localhost:3001/${listName}/${id}`);
  };

  static editItem = async (listName: string, id: number, item: ISingleItem) => {
    console.log(listName, id, item);
    const response = await axios.put<ISingleItem>(
      `http://localhost:3001/${listName}/${id}`,
      {
        ...item,
      }
    );
    return response.data;
  };
}

export default FetcherService;
