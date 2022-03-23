import { createContext, useContext } from "react";
import Balance from "./components/Balance";
import Form from "./components/Form";
import History from "./components/History";
import Spending from "./components/Spending";

const data_url = "http://localhost:8000/entries";
export const UrlContext = createContext<RequestInfo | string>(data_url);

function App() {
  return (
    <UrlContext.Provider value={data_url}>
      <div className="App bg-orange-300 w-screen h-screen p-20">
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <div className="text-6xl font-bold mb-10">Bajet.</div>
            <Form></Form>
            <Balance></Balance>
          </div>
          <div className="flex flex-col">
            <Spending></Spending>
            <History></History>
          </div>
        </div>
      </div>
    </UrlContext.Provider>
  );
}

export default App;
