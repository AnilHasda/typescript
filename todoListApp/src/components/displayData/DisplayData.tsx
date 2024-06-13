import { useContextData } from "../../contextApi/contextData/createContext";
import { Todo } from "../../contextApi/contextData/createContext";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { FormEvent } from "react";
const DisplayData = () => {
  // this state stores the  edit status of the checkbox
  let [edit, setEdit] = useState<{ [key: string]: boolean }>({});

  // object for storing each text box value
  let [updateText, setUpdateText] = useState<{ [key: string]: string }>({});

  let { getItems, removeTodo, items, setItems } = useContextData();

  // Object to store refs for each input text element
  const inputRefs: { [key: string]: React.RefObject<HTMLInputElement> } = {};


  // function that checks edit flag for outline/edit button enable/disable
  function updateEditStatus(id: number): void {
    inputRefs[id].current?.focus();
    let finalData: Todo[] = items.map((ele: Todo) =>
      ele.id === id ? { ...ele, edit: !ele.edit } : ele
    );
    setItems(finalData);
  }
  const updateData = (e: FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const value = formData.get("dataItem") as string;
    // alert(inputRefs[id].current?.value);
    let updatedData = items.map((ele: Todo) => {
      if (ele.id === id) {
        return { ...ele, dataItem: value };
      }
      return ele;
    });
    console.log({updatedData})
    localStorage.setItem("todoItems",JSON.stringify(updatedData));
  };

  // function for checkbox to make line through
  const toggleCheckbox = (key: string) => {
    console.log({ key });
    setEdit((prev) => ({ ...prev, [key]: !prev[key] || false }));
    console.log({ key: edit[key] });
  };

  return (
    <div>
      {items.map((ele: Todo) => {
      inputRefs[ele.id] = useRef<HTMLInputElement>(null);
        return (
          <div
            key={ele.id}
            className="h-10 w-[500px] bg-[#2d5e5e] flex justify-between px-5 rounded-sm m-auto mb-5 text-[#d6cece]"
          >
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                name="checkbox"
                className="bg-[#2d5e5e]"
                onClick={() => {
                  toggleCheckbox("check" + ele.id);
                }}
              />
              <form
                onSubmit={(e) => {
                  updateData(e, ele.id);
                }}
              >
                <input
                  type="text"
                  value={
                    updateText["text" + ele.id] !== undefined
                      ? updateText["text" + ele.id]
                      : ele.dataItem
                  }
                  name="dataItem"
                  className={`bg-[#2d5e5e] ${
                    edit["check" + ele.id] === true ? "line-through" : ""
                  } ${ele.edit === !true ? "outline-none" : ""}`}
                  readOnly={ele.edit === true ? false : true}
                  ref={inputRefs[ele.id]} // Assign ref to input text element
                  onChange={(e) =>
                    setUpdateText((prev) => ({
                      ...prev,
                      ["text" + ele.id]: e.target.value,
                    }))
                  }
                />
              </form>
            </div>
            <div className="flex gap-5 items-center text-[20px]">
              <FaRegEdit
                color={`${edit["check" + ele.id] === true ? "gray" : ""} ${
                  ele.edit === true ? "orange" : ""
                }`}
                onClick={() => {
                  if(edit["check"+ele.id] === false){
                  updateEditStatus(ele.id);
                  }
                }}
              />

              <FaRegTrashCan
                onClick={() => {
                  removeTodo(ele.id);
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayData;
