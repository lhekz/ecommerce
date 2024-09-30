import React from 'react'
import { Formik, Form, Field } from 'formik';
import { Image, Video, Transformation } from 'cloudinary-react';
 import * as Yup from 'yup';
 import { useState } from 'react'
 import scandinavian from '../../assets/scandinavian.png'




import { Link } from 'react-router-dom'
import MeubelLogos from '../../assets/MeubelLogos.svg'
import cart from '../../assets/cart.svg'
import love from '../../assets/love.svg'
import profileimg from '../../assets/profileimg.svg'
import search from '../../assets/search.svg'



//  const SignupSchema = Yup.object().shape({
 
//    email: Yup.string().email('Invalid email').required('Required'),
//  });


  

const Home = () => {

  

    let [email, setEmail] =useState("")
  function handleSubmit (e) {
  e.preventDefault()
  let obj = {email}
    let formData =new FormData();
      formData.append("email", email)
  console.log("form submitted",JSON.stringify (formData))

  



  

  
}
  return (
    









    <div className='font-poppines'>
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

    <div className='font-poppines W-[200vw] h-[52vh] mt-48 ml-[50vw] absolute text-left bg-customOrange  '>

    <div className='ml-8 mr-4 mt-4'><h2 className='font-poppines font-normal  mb-4 '>New Arrival</h2>
    <h2 className='font-bold text-6xl  mb-4 text-customLightbrown'>Discover Our <br /> New Collection</h2>
    <h2 className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />elit tellus, luctus nec ullamcorper mattis.
    </h2>
    <h2 className=" bg-customLightbrown justify-center pl-6 pt-3 pb-3 mr-80 mt-4 ">BUY NOW</h2></div> </div>
  

  <img className='  max-w-full     object-contain' src={scandinavian} alt="Mscandinavian" />

  <div className='mb-3 '>

    <h3 className='text-[32px] font-bold text-4xl mt-2'>Browse The Range</h3>
    <h4 className='text-[20px] text-lightGrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
  </div>

  <div className='flex gap-6 pl-52 pt-20 mb-4  h-[70vh] w-[70vw]'><Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726585791/Image-living_room_xhdlet.png">
    <Transformation crop="scale" width="200" angle="10" />
  </Image>
 


  
    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726585791/image_101_fduaof.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>

    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726585791/Mask_Group_hjavnm.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>
  </div>
 <div className='flex ml-[22vw] gap-64 pb-5'> <h3 className=''>Dinning</h3>
  <h3 className=''>Living</h3>
  <h3 className=''>Bedroom</h3></div>
<div>

  <h3 className='text-4xl font-bold mb-5 ml-14 '>Our Products</h3>
</div>
  <div className=' flex gap-9 pb-9'>


    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726672536/image_1_2_gse3cj.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>
    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726672536/image_2_rnblah.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>
    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726672536/image_3_cy3t57.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>
    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726672536/image_4_dngx7j.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>
  </div>

  <div className='flex gap-9 pb-10 '>
    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726674153/Images_cgvfnv.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>
    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726673882/image_6_kalw33.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>
    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726673883/image_7_c2zsah.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>
    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726674158/image_8_z2dyxn.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>

  </div>

  <div className="flex gap-6 pb-10 bg-lighterOrange">
    <div className='text-left ml-9' >
      <h2 className='font-bold text-[40px] w-[422px]'>50+ Beautiful rooms 
        inspiration</h2>
      <h5 className='text-base text-lightGrey w-96 mb-7'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</h5>
      <h3 className='bg-customLightbrown mr-80 p-3'>Explore More</h3>
    </div>
    <div className='flex w-64 h-72 gap-4' >
      <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726674155/Rectangle_24_n7qlxh.png">
        <Transformation crop="scale" width="200" angle="10" />
      </Image>
      <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726674154/Rectangle_25_1_m57fcc.png">
        <Transformation crop="scale" width="200" angle="10" />
      </Image>
      <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726673828/Rectangle_26_1_o3y40e.png">
        <Transformation crop="scale" width="200" angle="10" />
      </Image>
    </div>

  </div>
  <div className='flex size-64 gap-6'>
    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726754667/Rectangle_36_1_dt0gxs.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>
    <Image className="" cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726754670/Rectangle_38_azcgqv.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>

    <Image className=" inline-block  pt-10  " cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726754669/Rectangle_40_1_jrpoie.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>
    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726754668/Rectangle_43_1_npiubs.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>
    <Image cloudName="dzyvwxh7n" publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1726754668/Rectangle_45_cerxbk.png">
      <Transformation crop="scale" width="200" angle="10" />
    </Image>

  </div>





<div  className='border border-r-0 border-l-0 text-base'>
  <ul className='flex gap-10 mt-16 mb-16 ' >
    <li className=''><h3>Funiro.
    </h3>
    <h4 className='text-lightGrey'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</h4>
    </li>

    <li className='space-y-3'>
      <h4 className='mb-2 text-lightGrey '>Links</h4>
      <h4>Home</h4>
      <h4>Shop</h4>
      <h4>About</h4>
      <h4>Contact</h4>
    
    </li>
    <li className='space-y-3'>
      <h4 className='mb-2 text-lightGrey'>Help</h4>
      <h4>Payment Options</h4>
      <h4>Returns</h4>
      <h4>Privacy Policies</h4>
      
    </li>
    
    <li className=''><h4 className='mb-3 text-lightGrey'>Newsletter</h4>
<form onSubmit={(e) => handleSubmit(e)} className='flex gap-3' action="" method="POST">
  
    <input value ={email} onChange = {(e) =>setEmail(e.target.value)} type="email"  name="email" id='email' placeholder="Enter Your Email Address" required/>
 <fieldset><label htmlFor="email"></label></fieldset>
 <button type='submit'>SUBSCRIBE</button>
</form>  
    </li>
  </ul>


</div>
<h4>2023 furino. All rights reverved</h4>
</div>

  )
}

export default Home