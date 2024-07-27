import { users } from "../services";
export const getUniqueElements = (array: string[]) => {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
}

export const authenticate = async (username: string, password: string) => {
  const usersData = await users();

  const user = usersData.filter((user) => user.username === username && user.password === password);

  if(user) {
    return true;
  }

  return false;
}