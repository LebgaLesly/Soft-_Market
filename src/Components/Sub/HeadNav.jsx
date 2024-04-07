//import dependencies
import { NavLink } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";




const HeadNav = () => {
  return (
    <>
      <header className="flex justify-between bg-black  p-2">
        <div className="flex  ml-12 xl:ml-32 2xl:ml-96 text-sm gap-x-4  text-white">
          <div>
            <label className="text-gray-400">Language:</label>
            <select className="bg-black outline-none cursor-pointer">
              <option value="">ENG</option>
              <option value="">FRE</option>
            </select>
          </div>
          <div>
            <label className="text-gray-400">Currency:</label>
            <select className="bg-black outline-none cursor-pointer">
              <option value="">FCFA</option>
              <option value="">USD</option>
            </select>
          </div>
        </div>

        <nav className="flex gap-x-2 xl:mr-32 mr-12 2xl:mr-96 md:ml-36 text-sm text-white ">
          <NavLink className="hover:text-red-500">My Account</NavLink>
          <p className="text-gray-400">|</p>
          <NavLink className="hover:text-red-500">My Wishlist</NavLink>
          <p className="text-gray-400">|</p>
          <NavLink className="hover:text-red-500">Checkout</NavLink>
          <p className="text-gray-400">|</p>
          <NavLink className="hover:text-red-500">Login</NavLink>
        </nav>
      </header>

      <section className="flex mt-9 justify-evenly">
        <section className='flex'>
          <input
            type="text"
            placeholder="Type and Search"
            className=" px-10 py-1.5  focus:shadow-outline bg-gray-50 border italic "
          />
          <CiSearch className='mt-3 relative right-7 cursor-pointer'/>
        </section>

        <section className='flex gap-2 text-4xl font-custom'>
          <h1>Soft</h1>
          <h1 className='text-red-500'>Market</h1>
        </section>

        <section>
          <div className='text-4xl'>
            <FaOpencart />
          </div>
        </section>
      </section>
    </>
  );
};

export default HeadNav;
