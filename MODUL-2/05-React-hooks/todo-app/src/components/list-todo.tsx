import CardTodo from "./card-todo";

const ListTodo = () => {
  return (
    <div className="mt-5 bg-white shadow rounded-md md:rounded-xl md:rounded-b-none max-h-96 overflow-y-auto dark:bg-[#25273D] dark:text-[#767992]">
      <CardTodo
        completedTodo={() => {}}
        deleteTodo={() => {}}
        isCompleted
        todo="Todo anda"
      />
      <CardTodo
        completedTodo={() => {}}
        deleteTodo={() => {}}
        isCompleted={false}
        todo="Todo anda"
      />
      <footer className="px-5 py-3 md:hidden flex items-center justify-between">
        <p>5 Items left</p>
        <button className="cursor-pointer">Clear Completed</button>
      </footer>
    </div>
  );
};

export default ListTodo;
