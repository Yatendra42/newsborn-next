import React from 'react';
import Link from 'next/link';
import SearchBar from '@/components/searchBar';
import HomeIcon from '@/assets/icons/home';
import VideoIcon from '@/assets/icons/video';
import MagazineIcon from '@/assets/icons/magzines';
import { Logo } from '@/assets';


const Header: React.FC = () => {
  return (
    <header>
        <div className="container">
          
          <Link href="/" className="logo">
            <img src={Logo.src} alt="New Born News" />
          </Link>

          <nav className="navbar">
            <ul>
              <li>
                <Link href="/"> <HomeIcon /> Home </Link>               
              </li>
              <li>
                <Link href="/video"> <VideoIcon /> Video</Link>
              </li>
              <li>
                <Link href="/magazine"><MagazineIcon/> Magazine</Link>
              </li>
           
            </ul>
          </nav>

          <SearchBar />

 


        </div>
      </header>
  );
};

export default Header;