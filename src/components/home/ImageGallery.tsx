import PhotoAlbum from "react-photo-album";
import SectionHeading from "../ui/sectionHeading";

const ImageGallery = () => {
  const photos = [
    { src: "/images/1.jpeg", width: 640, height: 480 },
    { src: "/images/2.jpeg", width: 840, height: 520 },
    { src: "/images/3.jpeg", width: 800, height: 1422 },
    { src: "/images/4.jpeg", width: 1200, height: 500 },
    { src: "/images/5.jpeg", width: 1920, height: 1281 },
    { src: "/images/6.jpeg", width: 900, height: 600 },
    { src: "/images/7.jpeg", width: 1109, height: 614 },
    { src: "/images/8.jpeg", width: 1109, height: 614 },
    { src: "/images/9.jpeg", width: 696, height: 369 },
  ];
  return (
    <section className="w-full mt-[50px]">
      <SectionHeading
        className="flex justify-center items-center text-green-600"
        text="Image Gallery"
      />
      <div className="flex text-center justify-center items-end">
        <p className=" text-[16px] text-primaryTxt font-[500] max-w-[550px]">
          Explore our mosaic of images featuring vibrant individuals who have
          embraced health with our products.
        </p>
      </div>
      <div className="w-full rounded-[10px] overflow-hidden mt-[40px]">
        <PhotoAlbum layout="rows" photos={photos} />;
      </div>
    </section>
  );
};

export default ImageGallery;
