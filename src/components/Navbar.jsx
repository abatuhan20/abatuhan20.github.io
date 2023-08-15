import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
// Kullanacağım useEffect, useState ve 
// diğer yapıları import ediyorum.

const Navbar = () => {
  //Active ile setActive burada tanımlamıştım.
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  // defaultken false
  return (
    <nav className={`
      ${styles.paddingX}
      w-full flex items-center py-5 fixed top-0 z-20
      bg-primary`}> 
      {/* Burada style ekledim `` işareti kullandım $ ile styles dosyasından paddingX i getirdim */}
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          // Linke bastığımda beni '/' kısmına yönlendirecek.
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            //SetActive web sayfası içerisinde nerede olduğumu trackleyecek
            window.scrollTo(0,0);
            //Sayfanın tepesine scrollayacak
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Arda Batuhan AYDIN &nbsp;
            <span className='sm:block hidden'>
            |&nbsp; Web Developer
            </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            // her individual linki almak için
            // fonksiyonu tanımlarken ((Link)) => () şeklinde yapıcaz curly verince çalışmıyor.
            <li key= {Link.id} className= {`${
              active === Link.title
              ? "text-white"
              : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
              // İçinde olduğum sayfanın ismini beyaz yapıyor.
              // Olmayanları ise gri bırakıyor.
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}

        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu}
            // Assets klasörü içerisinde importladım tepede
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            // Menü butonuyla kapama butonunun resmini değiştiriyor. Default
            // False olduğundan ilk menu img gözüküyor.
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            {/* Toggle açık ise menüyü gösteriyor yani Flex değilse gizliyor hidden.*/}
            
                  <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((Link) => (
                  // her individual linki almak için
                  // fonksiyonu tanımlarken ((Link)) => () şeklinde yapıcaz curly verince çalışmıyor.
                  <li key= {Link.id} className= {`${
                    active === Link.title
                    ? "text-white"
                    : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(Link.title);
                    }}
                    // Mobil halinde menüden bir şeye tıkladığımda menüyü kapatıyor.
                  >
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                ))}

              </ul>

           </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar