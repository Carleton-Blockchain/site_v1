import React from 'react'
import { PosterSchema } from '../common/Data';
import Image from 'next/image';
interface GalleryProps{
  posters: PosterSchema[];
}
function formatDate(date: Date): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = months[date.getMonth()];
  const day = String(date.getDate()).padStart(2, "0"); // Ensures day is 2 digits
  const year = date.getFullYear();

  return `${month}, ${day}, ${year}`;
}

const PosterGallery = ({posters} : GalleryProps) => {
  return (
    <div className={`flex gap-10 h-[30vh] lg:h-[30vw] ${posters.length === 1 ? " justify-center" : ""}`} style={{width: `${posters.length >= 5 ? "60%" : posters.length !== 1 ? 14*posters.length + "%" : "fit-content"}`}} >
      {posters.map((poster, index) => (
        <div key={index} className={` drop-shadow-lg rounded-2xl transform-gpu flex-1 hover:flex-[2] transition-all duration-300 ease-in-out`}>
          
          <div className='p-3 flex flex-col text-white text-wrap justify-end h-full w-full rounded-2xl absolute inset-0 bg-transparent z-10 overflow-clip font-semibold'>
            <div className='pb-5 font-thin'>
              {formatDate(new Date(poster.date))}
            </div>
            <div>
              {poster.title}
            </div>
          </div>
          <div className='h-full brightness-50 hover:brightness-100 transition-all duration-100 ease-in-out'>
            <img className='h-full object-cover w-full  rounded-2xl' loading='lazy' src={poster.image.url} alt={poster.image.alt || ""}/>
          </div>
          
        </div>
        ))}
    </div>
  )
}


export default PosterGallery