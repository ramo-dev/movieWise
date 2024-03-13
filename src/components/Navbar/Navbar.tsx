import { NavItems } from "./NavbarData";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="bg-black shadow w-100 px-8 md:px-auto flex align-middle py-2 fixed w-full">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="text-cyan-600 md:order-1 text-2xl font-bold lg:pe-5 ">
            <Link to="/">
              <h1>MovieWise</h1>
            </Link>
          </div>
          <div className="text-cyan-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              {NavItems.map((item) => (
                <Link to={item.path}>
                  <li className={item.className} key={item.id}>
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="order-2 md:order-3 flex gap-2 ">
            <Link to="login">
              <button className="px-4 py-2 bg-cyan-700 hover:bg-cyan-800 text-gray-50 rounded-xl flex items-center gap-2">
                <span>Login</span>
              </button>
            </Link>
            <Link to="register">
              <button className="px-4 py-2 bg-cyan-700 hover:bg-cyan-800 text-gray-50 rounded-xl flex items-center gap-2">
                <span>Register</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    );
}
 
export default Navbar



// md:px-4 md:py-2 hover:text-indigo-400