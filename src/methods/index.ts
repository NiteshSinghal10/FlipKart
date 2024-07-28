import { users } from "../services";
export const getUniqueElements = (array: string[]) => {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
}
