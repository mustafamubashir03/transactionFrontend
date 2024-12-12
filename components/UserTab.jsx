import { Link } from "react-router-dom";
import ButtonSmall from "./ButtonSmall";
import ProfileIcon from "./ProfileIcon";

export default function UserTab({ letter, firstName, lastName,id,balance}) {

  return (
    <div className="border-2 rounded-md px-4 flex justify-between mt-4 items-center">
      <div className=" flex  gap-2">
        <ProfileIcon letter={letter} />
        <p className="self-center">{firstName} {lastName}</p>
      </div>
        <p className="bg-green-100 px-1 rounded-full border-2 border-green-700 text-green-700 font-semibold text-xs">${balance}</p>
      <Link to={`/send?to=${id}&firstName=${firstName}&lastName=${lastName}`}>
        <ButtonSmall label={"Send money"} />
      </Link>
    </div>
  );
}
