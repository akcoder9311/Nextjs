import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { AnimatedTooltip } from './ui/animated-tooltip';


const instructors = [
    {
      id: 1,
      name: 'Elen Briggs',
      designation: 'Vocal Coach',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljJTIwaW5zdHJjdG9yJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 2,
      name: 'Marcus Reid',
      designation: 'Guitar Instructor',
      image:
        'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwaW5zdHJjdG9yJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 3,
      name: 'Andre Gomez',
      designation: 'Piano Teacher',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBpbnN0cmN0b3IlMjBmYWNlfGVufDB8fDB8fHww',
    },
    {
      id: 4,
      name: 'zulia zang',
      designation: 'Drumming Expert',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBpbnN0cmN0b3IlMjBmYWNlfGVufDB8fDB8fHww',
    },
  ];

function Instructor() {
    return (
        <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
          <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full text-white'>
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text center mb-8 ">Meet Our Instructors</h2>
            <p className='text-base md:text-lg text-white text-center mb-4 '>Discover the telented profestionals who will guid you musical jouney</p>
            <div className=' flex flex-row items-center justify-center mb-10 w-full'>
               <AnimatedTooltip items={instructors}/>
            </div>

          </WavyBackground>
      </div>
    );
}

export default Instructor;