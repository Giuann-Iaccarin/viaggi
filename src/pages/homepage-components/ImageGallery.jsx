import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = ({ images, islandName }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const prevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentImage((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="mb-6">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">

                {/* Immagine */}
                <img
                    src={images[currentImage]}
                    alt={`${islandName} ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                />

                {/* Freccia sinistra */}
                <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Freccia destra */}
                <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Pallini */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImage(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${currentImage === idx
                                    ? 'bg-white w-8'
                                    : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
