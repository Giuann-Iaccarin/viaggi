const DestinationInfo = ({ info }) => {
    return (
        <div className="space-y-6 mb-6">
            {/* Descrizione */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">📍</span> Panoramica
                </h4>
                <p className="text-gray-700 leading-relaxed">{info.description}</p>
            </div>

            {/* Spiagge */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">🏖️</span> Spiagge da visitare
                </h4>
                <div className="space-y-3">
                    {info.beaches.map((beach, idx) => (
                        <div key={idx} className="pl-4 border-l-4 border-blue-400">
                            <h5 className="font-semibold text-gray-800">{beach.name}</h5>
                            <p className="text-sm text-gray-600">{beach.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Noleggio auto */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">🚗</span> Noleggio auto
                </h4>
                <div className="flex items-start gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${info.carRental.recommended
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                        }`}>
                        {info.carRental.recommended ? '✓ Consigliato' : 'Facoltativo'}
                    </span>
                    <p className="text-gray-700 flex-1">{info.carRental.reason}</p>
                </div>
            </div>

            {/* Vita notturna */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">🎉</span> Vita notturna
                </h4>
                <div className="flex items-start gap-3 mb-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {info.nightlife.rating}
                    </span>
                </div>
                <p className="text-gray-700">{info.nightlife.description}</p>
            </div>
        </div>
    );
};

export default DestinationInfo;