import clsx from "clsx";
import { FaCheck } from "react-icons/fa";

interface CheckboxProps {
  active: boolean;
  onChecked: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ active, onChecked }) => {
  return (
    <div
      onClick={onChecked}
      className={clsx(
        "relative h-4 w-4 cursor-pointer rounded-full border-2 p-3 hover:border-indigo-500 transition-all duration-300",
        active
          ? "border-white bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 dark:border-[#25273D]"
          : "border-[#E3E4F1] dark:border-[#393A4B]"
      )}
    >
      {active && (
        <FaCheck
          size={13}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
        />
      )}
    </div>
  );
};

export default Checkbox;
