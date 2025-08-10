import { Link, NavLink } from "react-router"


const Header = () => {
    return (
        <div className="bg-white shadow-red-100 shadow-2xl ">

            <ul className="  outline-hidden flex flex-row h-16  gap-9 text-black p-4 px-9">
                <h1 className="font-extrabold  ml-24 text-black text-3xl italic">STARWARS</h1>
                <li className="ml-24 "><NavLink to="/" className={({ isActive }) => (isActive ? "text-red-400" : "")}>film</NavLink></li>
                <li><NavLink to="/planet" className={({ isActive }) => (isActive ? "text-red-400" : "")}>planets</NavLink></li>
                <li><NavLink to="/people" className={({ isActive }) => (isActive ? "text-red-400" : "")}>people</NavLink></li>
                <li><NavLink to="/species" className={({ isActive }) => (isActive ? "text-red-400" : "")} >species</NavLink></li>
                <li><NavLink to="/vehicle" className={({ isActive }) => (isActive ? "text-red-400" : "")}>vehicle</NavLink></li>
            </ul>
           
        </div>
    )
}

export default Header
