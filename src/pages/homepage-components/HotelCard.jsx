import React from 'react';
import { ExternalLink } from 'lucide-react';

const HotelCard = ({ hotel }) => {
    if (!hotel) return null;

    return (
        <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200 mb-6 ml-6">
            {hotel.image && (
                <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
            )}

            <h4 className="text-lg font-semibold text-gray-800">{hotel.name}</h4>

            <div className="mt-2 text-gray-700 space-y-1">
                <p><span className="font-medium">Prezzo totale:</span> €{hotel.priceTotal}</p>
                <p><span className="font-medium">Camere:</span> {hotel.rooms}</p>
                <p><span className="font-medium">Ospiti:</span> {hotel.guests}</p>
            </div>

            <a
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
            >
                Vai all’hotel
                <ExternalLink className="w-4 h-4 ml-2" />
            </a>
        </div>
    );
};

export default HotelCard;