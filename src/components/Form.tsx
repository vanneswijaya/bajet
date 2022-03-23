import { UrlContext } from "../App";
import { useContext, useState } from "react";

const Form = (): JSX.Element => {
  const url = useContext(UrlContext);
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("food");
  const [success, setSuccess] = useState<boolean | null>(null);
  const data = { amount: amount, category: category };

  const handleAdd = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();
    if (amount > 0) {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setAmount(0);
      setCategory("food");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(null);
      }, 2000);
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="form">
      <form className="flex flex-col" onSubmit={handleAdd}>
        <div className="flex flex-row gap-5">
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
          />
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="flex flex-row gap-5">
          <button className="w-20 h-10 bg-green-300 mt-5">Add</button>
          {success && <div className="mt-7">Entry added!</div>}
          {success === false && (
            <div className="mt-7">Amount must be above 0!</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
