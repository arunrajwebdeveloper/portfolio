import { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { galleryImages } from "../assets/images";
import "photoswipe/style.css";
import Logo from "../components/Logo";
import Cursor from "../components/Cursor";
import { Link } from "react-router";
import Modal from "../components/Modal";

type GalleryImage = {
  imageUrl: string;
  width?: number;
  height?: number;
};

type SimpleGalleryProps = {
  galleryID: string;
  images: GalleryImage[];
};

function getImageDimensions(
  src: string
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () =>
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
}

function SimpleGallery({ galleryID, images }: SimpleGalleryProps) {
  const [imagesWithSize, setImagesWithSize] = useState<GalleryImage[]>([]);

  // Load image dimensions automatically
  useEffect(() => {
    Promise.all(
      images.map(async (img) => {
        if (img.width && img.height) return img; // already provided
        const { width, height } = await getImageDimensions(img.imageUrl);
        return { ...img, width, height };
      })
    ).then(setImagesWithSize);
  }, [images]);

  // Init PhotoSwipe
  useEffect(() => {
    if (!imagesWithSize.length) return;

    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),

      //------------------
      // CONTROL OPTIONS
      //------------------
      padding: { top: 40, bottom: 40, left: 50, right: 50 },
      bgOpacity: 0.95,
      loop: false,
      wheelToZoom: true,
      pinchToClose: true,
      closeOnVerticalDrag: true,
      escKey: true,
      arrowKeys: true,
      indexIndicatorSep: " / ",
      errorMsg: "The photo cannot be loaded",

      //------------------

      // HIDE BUTTONS

      // -----------------

      zoom: false,
      // arrowPrev: false,
      // arrowNext: false,
      // close: false,
      // counter: false,

      //------------------

      // BUTTONS ICONS

      // -----------------

      // zoomSVG: '',
      // loadingIndicatorSVG: '',
      arrowPrevSVG:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="1.3" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"></path></svg>',
      arrowNextSVG:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="1.3" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"></path></svg>',
      closeSVG:
        '<svg fill="none" stroke="black" stroke-width="1.3" tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path d="M19.286 4.714 4.714 19.286M4.714 4.714l14.572 14.572"></path></svg>',
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [galleryID, imagesWithSize]);

  return (
    <div>
      <ul
        className="pswp-gallery select-none columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-10 md:gap-20"
        id={galleryID}
      >
        {imagesWithSize.map((image, index) => (
          <li className="mb-10 md:mb-20 " key={`${galleryID}-${index}`}>
            <a
              href={image.imageUrl}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={galleryID + "-" + index}
              target="_blank"
              rel="noreferrer"
              className="block outline-0"
            >
              <img
                src={image.imageUrl}
                alt=""
                loading="lazy"
                className="m-auto max-w-full max-h-full object-cover cursor-pointer align-middle"
              />
            </a>
          </li>
        ))}
      </ul>

      <div className="py-36 mt-16 select-none">
        <p className="text-lg text-gray-600 max-w-lg mx-auto text-center">
          You’ve reached the end, but we hope you leave with a new appreciation
          for the intricate beauty found in the world's smallest details.
        </p>
      </div>
    </div>
  );
}

const Photography = () => {
  const [magnetActive, setMagnetActive] = useState<boolean>(false);
  const [loadedImages, setLoadedImages] = useState<{ imageUrl: string }[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaded: { imageUrl: string }[] = [];

    galleryImages.forEach((image) => {
      const img = new Image();
      img.src = image.imageUrl;

      img.onload = () => {
        loaded.push(image);
        setLoadedImages([...loaded]); // trigger UI updates
        if (loaded.length === galleryImages.length) setIsLoaded(true);
      };

      img.onerror = () => {
        loaded.push(image); // even on error, continue
        setLoadedImages([...loaded]);
        if (loaded.length === galleryImages.length) setIsLoaded(true);
      };
    });
  }, []);

  const progress = Math.min(
    Math.round((loadedImages.length / galleryImages.length) * 100),
    100
  );

  return (
    <>
      <Logo
        magnetActive={magnetActive}
        setMagnetActive={setMagnetActive}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
      <Cursor hideCursor={magnetActive} />

      <div className="mx-auto px-6 md:px-14 max-w-[1800px] py-20">
        <div className="inline-block">
          <Link to="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#000"
              stroke-width="2"
              stroke-miterlimit="10"
              height={20}
              width={20}
            >
              <path d="M6 16h22m-16.485 6l-6-6 6-6" />
            </svg>
            <span>Back</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto px-6 md:px-14 max-w-3xl">
        <div className="pb-32 pt-20">
          <p className="text-2xl text-gray-600 mb-4">Life at 1:1</p>
          <h2 className="text-6xl text-black">
            The World is Smaller Than You Think.
          </h2>
          {!isLoaded && (
            <div className="mt-10">
              <div className="w-full bg-gray-100 h-1 rounded overflow-hidden">
                <div
                  className="bg-[#ffd53e] h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-xs text-gray-800">Loading images...</p>
                <p className="text-xs text-gray-800">{progress}%</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto px-6 md:px-14 max-w-[1800px]">
        {isLoaded && (
          <SimpleGallery
            galleryID="my-photography-gallery"
            images={loadedImages}
          />
        )}
      </div>

      <Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)} />
    </>
  );
};

export default Photography;
