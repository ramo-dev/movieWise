import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
           <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-950">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div className="bg-cyan-600 px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button className="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-cyan-600 group active:text-cyan-800 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-cyan-800 group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

<Link to="/"><span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
Go Home
        </span></Link>
      </a>
    </button>
</main>
        
        </>
     );
}
 
export default NotFound;