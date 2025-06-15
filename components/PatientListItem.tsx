"use client";

interface ItemInterface {
    id: string
    fullname: string
    gender: string
    age: number
    dob: string
}

function PatientListItem({ id, fullname, gender, age, dob }: ItemInterface) {
    return (
        <tr className="odd:bg-[#fffefc] even:bg-[#fcfbf4] text-lg hover:bg-sky-500">
            <td className="border border-gray-300 p-1 text-ellipsis">{`${id.slice(0, 6)}...${id.slice(-5)}`}</td>
            <td className="border border-gray-300 p-1">{fullname}</td>
            <td className="border border-gray-300 p-1">{gender[0].toUpperCase()}</td>
            <td className="border border-gray-300 p-1">{age}</td>
            <td className="border border-gray-300 p-1">{formatDOB(dob, "month")}</td>
        </tr>   
    );
  }

export default PatientListItem;


function formatDOB(dateString: string, format: "dash" | "month" = "month") {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = date.getUTCMonth(); // 0-indexed
    const year = date.getUTCFullYear();

    if (format === "dash") {
        const monthNum = String(month + 1).padStart(2, "0");
        return `${day}-${monthNum}-${year}`;
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${day}.${monthNames[month]}.${year}`;
}