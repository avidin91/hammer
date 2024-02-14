import axios from "axios";
import {mapUserData} from "./mapper";

export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return mapUserData(response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
};