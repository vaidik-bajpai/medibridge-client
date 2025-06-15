"use client";

import { formatDOB } from "../utils/dateFormat";

interface ItemInterface {
    id: string
    fullname: string
    gender: string
    age: number
    dob: string
    onClick: () => void
}

function PatientListItem({ id, fullname, gender, age, dob, onClick }: ItemInterface) {
    return (
        <tr className="odd:bg-[#fffefc] even:bg-[#fcfbf4] text-lg hover:bg-sky-500" onClick={onClick}>
            <td className="border border-gray-300 p-1 text-ellipsis">{`${id.slice(0, 6)}...${id.slice(-5)}`}</td>
            <td className="border border-gray-300 p-1">{fullname}</td>
            <td className="border border-gray-300 p-1">{gender[0].toUpperCase()}</td>
            <td className="border border-gray-300 p-1">{age}</td>
            <td className="border border-gray-300 p-1">{formatDOB(dob, "month")}</td>
        </tr>   
    );
  }

export default PatientListItem;