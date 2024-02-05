import ProgressBar from "./ProgressBar";

const TechStackItem = ({ image, name, value }) => {
  const hostName = import.meta.env.VITE_PUBLIC_API;

  return (
    <div className="flex flex-col gap-2 z-10">
      <div className="flex items-center gap-4">
        <img src={`${hostName}/${image}`} className="h-14 w-14 object-contain" alt="react-icon" />

        <span className="text-white text-3xl">{name}</span>
      </div>
      <ProgressBar percentage={value} />
    </div>
  );
};

export default TechStackItem;
