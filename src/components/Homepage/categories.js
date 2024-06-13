'use client';

export default function Categories() {
  return (
    <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 p-4 pb-3">
      <button 
        onClick={() => console.log('all button clicked')} 
        className="rounded-full bg-black text-white font-bold py-2 px-4 focus:outline-none hover:bg-white hover:text-black transition-colors duration-300"
      >
        All
      </button>
      <button 
        onClick={() => console.log('songs button clicked')} 
        className="rounded-full bg-black text-white font-bold py-2 px-4 focus:outline-none hover:bg-white hover:text-black transition-colors duration-300"
      >
        Songs
      </button>
      <button 
        onClick={() => console.log('albums button clicked')} 
        className="rounded-full bg-black text-white font-bold py-2 px-4 focus:outline-none hover:bg-white hover:text-black transition-colors duration-300"
      >
        Albums
      </button>
      <button 
        onClick={() => console.log('artists button clicked')} 
        className="rounded-full bg-black text-white font-bold py-2 px-4 focus:outline-none hover:bg-white hover:text-black transition-colors duration-300"
      >
        Artists
      </button>
    </div>
  );
}
