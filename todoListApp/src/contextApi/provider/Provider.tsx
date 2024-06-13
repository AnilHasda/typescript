import { ReactNode, useState } from "react";
import CreateContext from "../contextData/createContext.tsx";
import { Todo } from "../contextData/createContext.tsx";
type childrenFormat = {
  children: ReactNode;
};
const Provider = ({ children }: childrenFormat) => {
  let localData: string | null = localStorage.getItem("todoItems");
  let allLocalData: Todo[] = localData && JSON.parse(localData);
  let [items, setItems] = useState<Todo[]>(
    allLocalData?.length > 0 ? allLocalData : []
  );
  const getItems = ():void => {
    let response: string | null = localStorage.getItem("todoItems");
    let finalData: Todo[] = [];
    if (response) {
      finalData = JSON.parse(response);
      setItems(finalData);
    }
  };
  const addTodo = (item: string): void => {
    let data: { id: number; dataItem: string; edit: boolean } = {
      id: Date.now(),
      dataItem: item,
      edit: false,
    };
    setItems((prev) => {
      let datas = [...prev, data];
      localStorage.setItem("todoItems", JSON.stringify(datas));
      return datas;
    });
    getItems();
  };
  const removeTodo = (id: number): void => {
    let filterData: Todo[] = items.filter((ele) => ele.id !== id);
    localStorage.setItem("todoItems", JSON.stringify(filterData));
    getItems();
  };
  const updateTodo = (id: number, item: string): void => {};
  return (
    <CreateContext.Provider
      value={{ getItems, addTodo, removeTodo, updateTodo, items, setItems }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default Provider;
