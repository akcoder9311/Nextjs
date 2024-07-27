"use client"
import React from 'react';
import Link from 'next/link';
import { HoverEffect } from './ui/card-hover-effect';

const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

function Upcommingwebinar() {
    return (
        <div className='p-12 bg-gray-900 text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                   <div className='text-center'>
                    <h2 className='text-2xl text-green-700 font-semibold uppercase'>FETURED WEBINARS</h2>
                    <p className='text-4xl text-white font-bold mt-4'>Enhance Your Musical Jouney</p>
                   </div>
                   <div className='mt-10 text-center'>
                    <HoverEffect items={featuredWebinars.map((webinar)=> ({
                        title:webinar.title,
                        description: webinar.description,
                        link:'/'
                    }))} />
                   </div>
                   <div className='mt-10 text-center'>
                    <Link href={"/"}
                className='bg-white text-neutral-700 hover:bg-gray-300 transition duration-200 p-3 font-semibold rounded-md border border-natural-900 '
                >View All Webinars</Link>
                   </div>
            </div>
        </div>
    );
}

export default Upcommingwebinar;