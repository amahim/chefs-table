import './Header.css'
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <div>
            {/* navbar */}
            <nav className="md:w-4/5 mx-auto py-5">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Recipies</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                        </div>
                        <h3 className="text-2xl font-bold text-[#0BE58A]">Chefs Table</h3>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Recipies</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 h-10 md:w-auto" />
                    <FaRegUserCircle className="text-4xl bg-[#0BE58A] p-1 rounded-full" />
                    </div>
                </div>
            </nav>
            {/* banner */}
            <div className="w-4/5 mx-auto banner md:py-24 py-6">
                <div className='flex flex-col text-center gap-2 md:gap-4 w-4/5 mx-auto'>
                    <h3 className='md:text-3xl text-l text-white font-bold' >Discover an exceptional cooking <br /> class tailored for you!</h3>
                    <p className='text-gray-300 text-[10px] md:text-base'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                </div>
                <div className='text center flex md:gap-4 gap-2 justify-center mt-4 md:mt-8'>
                    <button className=' p-1 md:p-4 border-2 border-[#0BE58A] rounded-full font-medium bg-[#0BE58A] text-white'>Explore Now</button>
                    <button className='p-1  rounded-full border-2 md:p-4 font-medium border-white text-white'>Our Feedback</button>
                </div>
            </div>
            {/* our recipies */}
            <div className='w-3/5 mx-auto space-y-4 text-center py-10'>
                <h3 className='font-bold text-xl md:text-2xl'>Our Recipes</h3>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
            </div>
        </div>
    );
};

export default Header;