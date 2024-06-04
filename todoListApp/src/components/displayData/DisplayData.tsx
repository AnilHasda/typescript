import { useContextData } from "../../contextApi/contextData/createContext";
import { Todo } from "../../contextApi/contextData/createContext";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
const DisplayData = () => {
  let { items } = useContextData();
  return (
    <div>
      <table className="h-auto w-full md:w-[40%] m-auto border text-center mt-10">
        <thead>
          <tr className="h-10">
            <th>s.n</th>
            <th>item</th>
            <th colSpan={2}>actions</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((ele:Todo,index:number) =>{
            return <tr key={ele.id} className="h-10">
                <td>{index+1}</td>
                <td>{ele.dataItem}</td>
                <td className="flex justify-center items-center pt-2 gap-10"><FaRegTrashCan size={20}/><FaRegEdit size={20}/></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
