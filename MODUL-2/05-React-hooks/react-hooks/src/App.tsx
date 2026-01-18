import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

type State = {
  count: number;
};

type Action = { type: "increment" | "decrement" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      if (state.count <= 0) return state;
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const initialValue: State = { count: 0 };

function App() {
  const ref = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState<number>(0);

  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    console.log("useEffect triggered");

    return () => {
      console.log("useEffect cleanup");
    };
  }, [count]);

  // Contoh menggunakan useEffect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling...");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const memoExample = useMemo(() => {
    return 0;
  }, []);

  const callbackExample = useCallback(() => {
    return 0;
  }, []);

  const handleGetValue = () => {
    const value = ref.current?.value;

    alert("Input value: " + value);
  };

  const decrement = () => setCount(count - 1);

  const increment = () => setCount(count + 1);

  return (
    <div className="p-5 flex gap-4">
      {/* useRef */}
      <div className="flex flex-col gap-2 border p-5 w-fit rounded-2xl">
        <h1>USE REF</h1>
        <input ref={ref} type="text" className="border" />
        <button
          onClick={handleGetValue}
          className="bg-black text-white rounded-2xl p-2 active:scale-95 transition-all duration-300"
        >
          Submit
        </button>
      </div>

      {/* useState */}
      <div className="flex flex-col gap-2 border p-5 w-fit rounded-2xl">
        <h1>USE STATE</h1>
        <div className="flex gap-2 items-center">
          <button
            onClick={decrement}
            className="bg-black text-white rounded-2xl p-2 active:scale-95 transition-all duration-300"
          >
            -
          </button>
          <p>{count}</p>
          <button
            onClick={increment}
            className="bg-black text-white rounded-2xl p-2 active:scale-95 transition-all duration-300"
          >
            +
          </button>
        </div>
      </div>

      {/* useReducer */}
      <div className="flex flex-col gap-2 border p-5 w-fit rounded-2xl">
        <h1>USE REDUCER</h1>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="bg-black text-white rounded-2xl p-2 active:scale-95 transition-all duration-300"
          >
            -
          </button>
          <p>{state.count}</p>
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="bg-black text-white rounded-2xl p-2 active:scale-95 transition-all duration-300"
          >
            +
          </button>
        </div>
      </div>

      <div>{memoExample}</div>

      <div>{callbackExample()}</div>
    </div>
  );
}

export default App;
