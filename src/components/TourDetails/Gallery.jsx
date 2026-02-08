// Gallery.jsx
const Gallery = ({ images }) => {
  if (!images || images.length < 4) return null;
  console.log("Gallery images:", images);
  return (

    <div className="mb-8 mt-[10px]  max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 gap-4 h-[920px] md:h-[450px] lg:h-[500px] xlg:h-[550px]">

        {/* Big left image */}
        <div className="md:row-span-2 rounded-xl overflow-hidden">
          <img
            src={images[0]}
            alt="tour-0"
            className="w-full h-full  object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>

        {/* Top right */}
        <div className="md:col-span-2 overflow-hidden  lg:col-span-2">
          <img
            src={images[1]}
            alt="tour-1"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>

        {/* Bottom right left */}
        <div className="rounded-xl overflow-hidden">
          <img
            src={images[2]}
            alt="tour-2"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>

        {/* Bottom right right */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={images[3]}
            alt="tour-3"
            className="w-full h-full object-cover rounded-xl  transition-transform duration-500 ease-out hover:scale-110"
          />

          {/* Overlay button */}
          <button className="absolute bottom-3 right-3 bg-white/90 px-3 py-1 text-sm rounded-lg shadow">
            Gallery
          </button>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
