import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

import { useState } from "react";

function App() {
  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = data.duration >= 1;

  function handleInputChange(e, type) {
    let val = e.target.value;

    setData((oldData) => {
      return {
        ...oldData,
        [type]: +val,
      };
    });
  }

  return (
    <>
      <Header/>
      <UserInput info={data} onInputChange={handleInputChange}/>
      {!inputIsValid && (
        <p className="center">
          Please enter a duration of at least 1 year.
        </p>
      )}
      {inputIsValid && <Result info={data}/>}
    </>
  );
}

export default App;
