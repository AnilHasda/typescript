import {createContext,useContext,Dispatch} from "react";
export interface Todo{
id:number;
dataItem:string;
edit:boolean;
}
export type contextFormat={
    getItems:()=>void;
    addTodo:(item:string)=>void;
    removeTodo:(id:number)=>void;
    updateTodo:(id:number,item:string)=>void;
    items:Todo[],
    setItems:Dispatch<React.SetStateAction<Todo[]>>
};
let CreateContext=createContext<contextFormat | null>(null);
const useContextData=()=>{
    let contextData=useContext(CreateContext);
    if(contextData !==null){
    return contextData;
    }else{
throw new Error("contextData should not be null");
    }
}
export {useContextData};
export default CreateContext;