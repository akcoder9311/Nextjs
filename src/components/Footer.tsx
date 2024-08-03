import React from 'react';

function Footer() {
    return (
        <div className='bg-black text-gray-200 text-center py-12 '>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4  sm:px-8 lg:px-8'> 
            <div >
                <h2 className='text-white text-lg font-semibold mb-4'>About Us</h2>
                <p className='mb-4'>
                Music School is a premier institution dedicated to teaching the art
                and science of music. We nurture talent from the ground up,
                fostering a vibrant community of musicians.
                </p>
            </div>

            <div>
                <h2 className='text-lg text-white mb-4 font-semibold'>Quick Links</h2>

                <ul>
                    <li><a href="#" className='hover:text-white transition-colors durations-300'>Home</a></li>
                    <li><a href="#" className='hover:text-white transition-colors durations-300'>About Us</a></li>
                    <li><a href="#" className='hover:text-white transition-colors durations-300'>Courses</a></li>
                    <li><a href="#" className='hover:text-white transition-colors durations-300'>Contact</a></li>
                   
                </ul>
            </div>
            <div>
                <h2 className='text-lg text-white mb-4 font-semibold'>Follow Us</h2>

                <ul>
                    <li><a href="#" className='hover:text-white transition-colors durations-300'>Instagram</a></li>
                    <li><a href="#" className='hover:text-white transition-colors durations-300'>twitter</a></li>
                    <li><a href="#" className='hover:text-white transition-colors durations-300'>Facebook</a></li>
                    <li><a href="#" className='hover:text-white transition-colors durations-300'>youtube</a></li>
                   
                </ul>
            </div>
            <div>
                <h2 className='text-white text-lg mb-4 font-semibold'></h2>
                <p>New Delhi India</p>
                <p>Delhi 110053</p>
                <p>Email: Info@ucliw@gamil.com</p>
                <p>phone: (123) 8470304997</p>
            </div>
            
            </div>
            <p className='text-center text-xs pt-8'>© 2024 Music School: All Rights Are Reserved.</p>
        </div>
    );
}

export default Footer