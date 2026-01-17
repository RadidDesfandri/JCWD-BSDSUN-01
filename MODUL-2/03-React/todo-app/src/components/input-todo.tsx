import Checkbox from "./ui/checkbox";

const InputTodo = () => {
  return (
    <div className="mt-8 md:mt-10 px-5 bg-white py-3 md:py-5 rounded-md md:rounded-xl flex items-center gap-2 dark:bg-[#25273D] dark:text-[#767992]">
      <Checkbox active={false} onChecked={() => {}} />
      <input
        type="text"
        className="w-full outline-0"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default InputTodo;
