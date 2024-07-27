"use client";

import React from 'react';
import courseData from '../data/music_courses.json'
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

interface Course{
            id:number,
            title:String,
            slug:String,
            description:String,
            price:number,
            instructor:String,
            isFeatured:Boolean,
}

function FeaturedCourses() {

   const featuredCourses = courseData.courses.filter((courses: Course) => courses.isFeatured);

    return (
        <div className='text-white text-center py-12 bg-gray-800 '>
           <div className='text-center'>
           <h1 className='text-2xl text-green-700 font-semibold'>FEATURED COURSES</h1>
           <p className='text-4xl text-white font-bold mt-4'>Enhance Your Musical Jouney</p>
           </div>

           <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center '>
                {featuredCourses.map((course: Course)=>(
                    <div key={course.id} className='flex justify-center'>
                        <BackgroundGradient
                        className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow:hidden h-full max-w-sm'>
                            <div className = "p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>

                        </BackgroundGradient>
                        
                    </div>
                ))}
            </div>
           </div>
            <div className='text-center mt-20'>
                <Link href={"/courses"}
                className='bg-white text-neutral-700 hover:bg-gray-300 transition duration-200 p-3 font-semibold rounded-md border border-natural-900 '>
                     View All Courses
                </Link>
            </div>
        </div>
    );
}

export default FeaturedCourses;