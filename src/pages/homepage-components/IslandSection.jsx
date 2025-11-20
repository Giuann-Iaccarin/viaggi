import React, { useState } from 'react';
import { destinationsInfo } from '../../data/destinations';
import ImageGallery from './ImageGallery';
import DestinationInfo from './DestinationInfo';
import FlightCard from './FlightCard';
import HotelCard from './HotelCard';

const IslandSection = ({ island, isReturnSection }) => {
    const [showDetails, setShowDetails] = useState(false);
    const info = destinationsInfo[island.name];

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    {island.name}
                </h3>
                {!isReturnSection && info && (
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                    >
                        {showDetails ? 'Nascondi dettagli' : 'Scopri la destinazione'}
                    </button>
                )}
            </div>

            {/* Dettagli destinazione */}
            {showDetails && !isReturnSection && info && (
                <div className="mb-6 ml-6">
                    <ImageGallery images={info.images} islandName={island.name} />
                    <DestinationInfo info={info} />
                    <HotelCard hotel={info.hotel} />
                </div>
            )}

            {/* Voli o ritorni */}
            {isReturnSection ? (
                <div className="ml-6 space-y-2">
                    {island.returns.map((returnTime, idx) => (
                        <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <span className="text-base font-medium text-gray-700">{returnTime}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-2">
                    {island.flights.map((flight, idx) => (
                        <FlightCard key={idx} flight={flight} />
                    ))}
                </div>
            )}
        </div>
    );
};
export default IslandSection;