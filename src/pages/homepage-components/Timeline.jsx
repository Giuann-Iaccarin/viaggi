import DateSection from "./DateSection";

const Timeline = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto">
            {data.dates.map((dateInfo, idx) => (
                <DateSection
                    key={idx}
                    dateInfo={dateInfo}
                    isLast={idx === data.dates.length - 1}
                />
            ))}
        </div>
    );
};

export default Timeline;