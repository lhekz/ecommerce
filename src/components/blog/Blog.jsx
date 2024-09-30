
import React, { useState } from 'react';
import { Image, Video, Transformation } from 'cloudinary-react';
import logotwo from '../../assets/logotwo.svg'
import arrow from '../../assets/arrow.svg'
import admin from '../../assets/admin.svg'
import calender from '../../assets/calender.svg'
import wood from '../../assets/wood.svg'
import searchicon from '../../assets/searchicon.svg'


import scandinavian from '../../assets/scandinavian.png'




import { Link } from 'react-router-dom'
import MeubelLogos from '../../assets/MeubelLogos.svg'
import cart from '../../assets/cart.svg'
import love from '../../assets/love.svg'
import profileimg from '../../assets/profileimg.svg'
import search from '../../assets/search.svg'

const blog = () => {


    const [searchResults, setSearchResults] = useState([]);

    const searchFunction = () => {
        const searchQuery = document.getElementById('searchInput').value.toLowerCase();
        const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Strawberry"];
        const filteredItems = items.filter(item => item.toLowerCase().includes(searchQuery));
        setSearchResults(filteredItems);
    };
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
};

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
  };



  return (

    
    <div className='relative w-[94vw] mx-0 mb-10 font-poppines'>
  <nav>
<ol className=' flex  space-x-80 text-center items-center text-lg pb-4 pt-4 pr-32  border border-white bg-white' >
  
  <li className='flex absolute font-monterat font-bold text-3xl'>
    <img src={MeubelLogos} alt="MeubelLogos" />
    <h2 className='pl-4'>Furniro</h2>
  </li>

  <li className='flex gap-3'>

  <Link className='' to="/home">Home</Link>
    {/* <h3>About</h3>
    <h3>Contact</h3> */}
    <Link className='' to="/shop">Shop</Link>
    <Link className='' to="/contact">Contact</Link>
    <Link className='' to="/blog">Blog</Link>

  </li>
  <li className='flex gap-9'>
    <img src={profileimg} alt="" />
    <img src={search} alt="" />
    <img src={love} alt="" />
    <img src={cart} alt="" />

  </li>
</ol></nav>
    <Image
      cloudName="dzyvwxh7n" 
      publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1727578723/Rectangle_1_wogcyd.png" // Use the publicId 
      className="w-full h-auto object-cover mb-32 "
    >
      <Transformation crop="scale" />
    </Image>
  
   
    <div className='absolute inset-0 flex flex-col items-center font-poppines top-28 text-black'>
     
      <img src={logotwo} alt="icon" className='w-10 h-10 mb-2' />
      
    
      <h3 className='text-5xl font-medium mb-4'>Blog</h3>
  
     
      <div className='flex space-x-2 text-base items-center font-light'>
        <h5>Home</h5>
        <img src={arrow} alt="icon" className='w-2 h-2 mx-2' />
        <h5>Blog</h5>
      </div>
    </div>


<div className='flex gap-10 text-left'>


<div className='w-[60%]'>
<Image
      cloudName="dzyvwxh7n" 
      publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1727623856/Rectangle_68_orokgv.png" 
      className=" mb-5"
    >
      <Transformation crop="scale" />
    </Image>

<div className='flex mb-4 text-base text-lightGrey'>
  <img className='w-[18px] h-[18px] ' src={admin}  alt="" />
  <h3 className='mr-3'>Admin</h3>
  <img src={calender} alt="" />
  <h3 className='mr-3'>14 Oct 2022</h3>
  <img  src={wood} alt="" />
  <h3 className='mr-3'>Wood</h3>
</div>
<h3 className='text-2xl font-medium mb-2'>Going all-in with millennial design</h3>
<h4 className='text-xs text-lightGrey text-justify mb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h4>
<h5 className='mb-4'>Read more</h5>

<Image
      cloudName="dzyvwxh7n" 
      publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1727623856/Rectangle_68_1_ycv5hy.png" // Use the 
      className="mb-5"
    >
      <Transformation crop="scale" />
    </Image>
<div className='flex mb-4 text-base text-lightGrey'>
  <img src={admin} alt="" />
  <h3 className='mr-3'>Admin</h3>
  <img src={calender} alt="" />
  <h3 className='mr-3'>Handmade</h3>
  <img src={wood} alt="" />
  <h3 className='mr-3'>wood</h3>
</div>
<h3 className='text-2xl font-medium mb-2'>Exploring new ways of decorating</h3>
  <h4 className='text-xs text-lightGrey text-justify mb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h4>
<h5 className='mb-5'>Read more</h5>


<Image
      cloudName="dzyvwxh7n" 
      publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1727623856/Rectangle_68_2_wajmzy.png" 
      className="pb-3"
    >
      <Transformation crop="scale" />
    </Image>
<div className='flex mb-4 text-base text-lightGrey'>
  <img src={admin} alt="" />
  <h3 className='mr-3'>Admin</h3>
  <img src={calender} alt="" />
  <h3 className='mr-3'>14 Oct 2022</h3>
  <img src={wood} alt="" />
  <h3 className='mr-3'>wood</h3>
</div>
<h3 className='text-2xl font-medium mb-2'>Handmade pieces that took time to make</h3>
  <h4 className='text-xs text-lightGrey text-justify mb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h4>
<h5 className='mb-5'>Read more</h5>

</div>








<div className='w-[30%]'>
   
<div className='text-left font-poppines text-xs'>
          <input img={searchicon} id="searchInput" placeholder=""/>
            <button onClick={searchFunction}>Search</button>
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    
            <div className='font-poppines text-sm text-lightGrey  space-y-3'>
                    <h4 className='text-lg text-black font-semibold mb-3'>Categories</h4>
                    <h4>Design</h4>
                    <h4>Crafts</h4>
                    <h4>Handmade</h4>
                    <h4>Interior</h4>
                    <h4>Wood</h4>
                    <h4></h4></div>

</div>






</div>



  </div>
  )
}

export default blog