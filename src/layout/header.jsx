import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiEllipsisVertical } from "react-icons/hi2";
import {HiMiniBars3BottomLeft} from "react-icons/hi2";
import { useGifstate } from '../context/context';
import { data } from 'autoprefixer';
import GifSearch from '../components/GifSearchFilter';

function Header() {
  const [categories, setCategories] = useState([]);
  const [showCatogories, setShowCategories] = useState(false);
  const { gf, searchTerm, setSearchTerm, Favourate } = useGifstate();

  const fetchGifcatagories = async () => {
    const { data } = await gf.categories();
    setCategories(data);
  }

  React.useEffect(() => {
    fetchGifcatagories();
  }, []);
  return (
    <>
      <nav>
        <div className="relative flex gap-4 justify-between items-center mb:2">
          <Link to="/" className="flex gap-2">
            <img
              src="/logo.svg"
              className="w-10"
              alt="not render giffy-gif logo"
            />
            <h1 className="text-3xl gradient   font-thin tracking-tight cursor-pointer">
              Giggle-Gyff
            </h1>
          </Link>
          <div className="font-bold text-md flex gap-2 items-center">
            {categories.slice(0, 5)?.map((c) => {
              return (
                <Link
                  key={c.name}
                  to={`/search/${c.name_encoded}`}
                  className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
                >
                  {c.name}{" "}
                </Link>
              );
            })}

            <button
              onClick={() => {
                setShowCategories(!showCatogories);
              }}
            >
              <HiEllipsisVertical
                size={35}
                className={`py-0.5 hover:gradient hidden ${
                  showCatogories ? "gradient" : ""
                }
                         
                          border-b-2
                          lg:block`}
              />
            </button>
            {Favourate.length > 0 && (
              <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
                <Link to="/Favourate">Favourite GIFs</Link>
              </div>
            )}
            <div>
              <button>
                {" "}
                <HiMiniBars3BottomLeft className="text-sky-400 block lg:hidden size-30" />
              </button>
            </div>
            {showCatogories && (
              <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
                <span className="text-3xl font-extrabold"> categories</span>
                <hr className="bg-gray-100 opacity-80 my-5" />
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gridcols-6 gap-8'>
                  {categories?.map((categorie) => {
                    return (<Link className="font-bold"
                      key={categorie.name_encoded}
                      to={`/${categorie.name_encoded}`}
                    >{categorie.name}</Link>)
                  })}
                  
                </div>
              </div>
            )}
          </div>
        </div>
        <GifSearch/>
      </nav>
    </>
  );
}

export default Header