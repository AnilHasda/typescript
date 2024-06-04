import { ReactNode, useState } from "react";
import CreateContext from "../contextData/createContext.tsx";
import { Todo } from "../contextData/createContext.tsx";
type childrenFormat = {
  children: ReactNode;
};
const Provider = ({ children }: childrenFormat) => {
    let localData:string | null=localStorage.getItem("todoItems");
    let allLocalData:Todo[]= localData && JSON.parse(localData);
    let [items,setItems]=useState<Todo[]>(allLocalData?.length>0?allLocalData : []);
  const addTodo = (item: string) => {
    let data: { id: number; dataItem: string } = {
      id: Date.now(),
      dataItem: item,
    };
    setItems(prev=>{
        let datas=[...prev,data];
        localStorage.setItem("todoItems",JSON.stringify(datas));
        return datas;
    });

  };
  const removeTodo = (id: number) => {};
  const updateTodo = (id: number, item: string) => {};
  return (
    <CreateContext.Provider value={{ addTodo, removeTodo, updateTodo,items }}>
      {children}
    </CreateContext.Provider>
  );
};

export default Provider;
