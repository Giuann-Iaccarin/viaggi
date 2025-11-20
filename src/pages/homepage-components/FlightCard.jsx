const FlightCard = ({ flight }) => {
    return (
        <div className="ml-6 mb-3 p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-gray-500">Andata:</span>
                        <span className="text-base font-semibold text-gray-800">{flight.departure}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-500">Ritorno ({flight.returnDate}):</span>
                        <span className="text-base font-semibold text-gray-800">{flight.return}</span>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <span className="text-2xl font-bold text-blue-600">{flight.price}€</span>
                </div>
            </div>
        </div>
    );
};
export default FlightCard;