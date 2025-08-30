import { useEffect, useState } from "react";
import Heading from "./Heading";
import UserTab from "./UserTab";
import axios from "axios";
import Body from "./Body";
import useDebounce from "../hooks/useDebounceHook";



export default function PaymentSection() {
  const [userData, setUserData] = useState([]);
  const [filter, setFilter] = useState("");
  const debouncedValue = useDebounce(filter);

  useEffect(() => {
    async function dataFetch() {
      const response = await axios.get(
        `https://transactionbackend-2y77.onrender.com/api/v1/user/bulk?filter=` + debouncedValue,
        {
          headers: {
            authorization: localStorage.getItem("authorization"),
          },
        }
      );
      console.log(response.data.user);
      setUserData(response.data.user);
    }
    dataFetch();
  }, [debouncedValue]);

  return (
    <div className="py-4 px-4 bg-slate-100 text-slate-700 text-lg   max-w-screen-md mx-auto rounded-md">
      <Heading text={"Users"} />
      <input
        onChange={(e) => setFilter(e.target.value)}
        className="inline-block w-full bg-slate-100 border-2 border-slate-300 rounded-sm py-0.5 px-2 italic"
        type="text"
        placeholder="Search users..."
      />
      {userData.length === 0 ? (
        <Body text={"No such user"} />
      ) : (
        userData.map((user) => (
          <UserTab
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            balance = {user.balance}
            letter={user.firstName[0]}
            id={user.id}
          />
        ))
      )}
    </div>
  );
}
