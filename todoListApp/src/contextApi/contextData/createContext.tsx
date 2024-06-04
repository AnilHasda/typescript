import {createContext,useContext} from "react";
export interface Todo{
id:number;
dataItem:string;
}
type contextFormat={
    addTodo:(item:string)=>void;
    removeTodo:(id:number)=>void;
    updateTodo:(id:number,item:string)=>void;
    items:Todo[]
};
let CreateContext=createContext<contextFormat>()
const useContextData=()=>{
    let contextData=useContext(CreateContext);
    return contextData;
}
export {useContextData};
export default CreateContext;