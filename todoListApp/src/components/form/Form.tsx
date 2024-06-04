import { useState,FormEvent } from "react";
import { useContextData } from "../../contextApi/contextData/createContext";
const Form = () => {
  let [item, setItems] = useState("");
  let {addTodo,items}  = useContextData();
  console.log(items);
  const addData = (e:FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(item);
    setItems("");
  };
  return (
      <div className=" flex justify-center items-center mt-10">
        <form onSubmit={addData}>
          <input
            type="text"
            placeholder="enter new task..."
            autoComplete="off"
            value={item}
            onChange={(e) => setItems(e.target.value)}
            className="h-[35px] w-[90vw] md:w-[400px] border border-[#adaaaa] outline-none pl-2"
          />
          <button className="h-[35px] w-[100px] bg-[teal] text-white border border-[teal] ml-1">
            Add Items
          </button>
        </form>
      </div>

  );
};

export default Form;
