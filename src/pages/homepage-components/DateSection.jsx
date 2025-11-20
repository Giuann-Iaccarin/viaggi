import IslandSection from "./IslandSection";

const DateSection = ({ dateInfo, isLast }) => {
    const isReturnSection = dateInfo.type === 'Ritorni';

    return (
        <div className="relative pl-8 pb-12">
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

            {/* Timeline line */}
            {!isLast && (
                <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gray-300"></div>
            )}

            {/* Contenuto */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-1">{dateInfo.date}</h2>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {dateInfo.type}
                    </span>
                </div>

                <div className="space-y-4">
                    {dateInfo.islands.map((island, idx) => (
                        <IslandSection key={idx} island={island} isReturnSection={isReturnSection} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DateSection;