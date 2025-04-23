import { ReactNode } from "react";

interface DecisionCardInterface {
    icon: ReactNode
    action: string 
    onClick: () => void
}

function DecisionCard({icon, action, onClick}: DecisionCardInterface) {
    return (
        <div onClick={onClick} className="flex flex-col mx-4 py-6 justify-center items-center text-center bg-linear-to-b from-white hover:from-gray-300 via-gray-100 hover:via-gray-300 to-gray-300 hover:bg-gray-300 w-1/5 p-3 text-indigo-900 rounded border-1 border-gray-300 cursor-pointer">
            {icon}  
            <div className="flex-wrap text-lg">{action}</div>
        </div>
    )
}

export default DecisionCard;