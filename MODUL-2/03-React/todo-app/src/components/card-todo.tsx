import { IoMdClose } from "react-icons/io";
import Checkbox from "./ui/checkbox";
import clsx from "clsx";

interface CardTodoProps {
  todo: string;
  isCompleted: boolean;
  deleteTodo: () => void;
  completedTodo: () => void;
}

const CardTodo = (props: CardTodoProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-4 border-b border-[#E3E4F1] px-5 dark:border-[#393A4B]">
      <Checkbox onChecked={props.completedTodo} active={props.isCompleted} />
      <p
        className={clsx(
          "flex-1",
          props.isCompleted && "line-through text-neutral-500"
        )}
      >
        {props.todo}
      </p>
      <button
        onClick={props.deleteTodo}
        className="cursor-pointer text-black dark:text-[#494C6B]"
      >
        <IoMdClose className="w-7 h-7" />
      </button>
    </div>
  );
};

export default CardTodo;
