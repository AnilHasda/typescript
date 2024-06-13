import { useContextData } from "../../contextApi/contextData/createContext.tsx";
const Header = () => {
    let data=useContextData();
    console.log(data)
  return (
    <div className="h-[80px] w-full bg-[#2d5e5e] grid place-content-center text-white font-bold text-md">
    Todo list app with Typescript + React
  </div>
  )
}

export default Header;