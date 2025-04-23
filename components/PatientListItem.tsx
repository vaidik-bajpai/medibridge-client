"use client";

interface ItemInterface {
    id: string
    fullname: string
    gender: string
    age: string
    dob: string
}

function PatientListItem({ id, fullname, gender, age, dob }: ItemInterface) {
    return (
        <tr className="odd:bg-[#fffefc] even:bg-[#fcfbf4] text-lg">
            <td className="border border-gray-300 p-1">{id}</td>
            <td className="border border-gray-300 p-1">{fullname}</td>
            <td className="border border-gray-300 p-1">{gender[0].toUpperCase()}</td>
            <td className="border border-gray-300 p-1">{age}</td>
            <td className="border border-gray-300 p-1">{dob}</td>
        </tr>   
    );
  }

export default PatientListItem;