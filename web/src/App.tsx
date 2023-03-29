import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank" className="">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-logo"
            alt="Vite logo"
          />
        </a>

        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-logo-react animate-logo-spin"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-5xl leading-5">Vite + React</h1>

      <div className="p-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-5 py-2 bg-[#1A1A1A] transition-all hover:border-[#646CFF] focus:outline-4 focus-visible:outline-4"
        >
          count is {count}
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
