
import React, { useState } from 'react';

import { Image, Video, Transformation } from 'cloudinary-react';
import logotwo from '../../assets/logotwo.svg'
import arrow from '../../assets/arrow.svg'
import location from '../../assets/location.svg'
import phone from '../../assets/phone.svg'
import time from '../../assets/time.svg'



const Contact = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission here (e.g., send data to an API)
        console.log(formData);
    };


/* Rectangle 1 */



return (
    <div > 
   



        
   <div className='relative w-[94vw] mx-0 mb-10'>
  {/* Cloudinary Image */}
  <Image
    cloudName="dzyvwxh7n" // Your Cloudinary cloud name
    publicId="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1727578723/Rectangle_1_wogcyd.png" // Use the publicId from your imageData array
    className="w-full h-auto object-cover"
  >
    <Transformation crop="scale" />
  </Image>

  {/* Text overlay */}
  <div className='absolute inset-0 flex flex-col justify-center items-center font-poppines text-black'>
    {/* Logo */}
    <img src={logotwo} alt="icon" className='w-10 h-10 mb-2' />
    
    {/* Heading */}
    <h3 className='text-5xl font-medium mb-4'>Contact</h3>

    {/* Breadcrumb navigation */}
    <div className='flex space-x-2 text-base items-center font-light'>
      <h5>Home</h5>
      <img src={arrow} alt="icon" className='w-2 h-2 mx-2' />
      <h5>Contact</h5>
    </div>
  </div>
</div>

    <div className=" ml-36 font-poppines text-xs ">
   
<div className='mb-32 '>
            <h3 className='text-4xl font-semibold'>Get In Touch With Us</h3>
            <h4 className='text-xs font-normal text-lightGrey'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h4>
        </div>

        </div>



        <div className="font-poppines flex gap-[12vw] ">
<img className="absolute ml-28" src={location} alt="" />
 <img className="absolute ml-28 mt-16 " src={phone}  alt="" />
 <img className="absolute ml-28 mt-36" src= {time} alt="" />
            <div className='text-left  ml-40'>
                
                <div className='text-base font-medium'><h3 >Address</h3></div>
                <h4 className='pb-6 text-xs'>236 5th SE Avenue, New York NY10000, United States</h4>


               
                <h3 className='text-base font-medium'>Phone</h3>
                <h4 className='pb-5 text-xs'>Mobile: +(84) 546-6789 <br />
                    Hotline: +(84) 456-6789</h4>


                
                <h3 className='text-base font-medium'>Working Time</h3>
                <h4 className='text-xs'>Monday-Friday: 9:00 - 22:00 <br />
                    Saturday-Sunday: 9:00 - 21:00</h4>
            </div>


            <div className=' text-left font-poppines text-xs  '>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4  bg-white shadow-lg rounded-lg">
                    <div className="mb-4 pr-56">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-5  ">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                            placeholder="Abc"
                            required
                        />
                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="email" className="mb-5 block text-gray-700 font-medium ">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Abc@dev.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className=" mb-5 block text-gray-700 font-medium ">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="This is an optional"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="mb-5 block text-gray-700 font-medium ">Message</label>
                        <input
                            type="text"
                            id="message"
                            name="message"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Hi! i’d like to ask about"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[13vw] h-[50] px-4 py-2 bg-customLightbrown text-white rounded-lg hover:bg-yellow-950 transition"
                    >
                        Submit
                    </button>
                </form>


            </div>

        </div>

    </div>
    
)
}

export default Contact;