"use client";

import { Search, User } from "lucide-react";
import DecisionCard from "../../../../components/DecisionCard";
import GeneralHeader from "../../../../components/GeneralHeader";
import { useRouter } from "next/navigation";

function Decision() {   
    const router = useRouter();
    return (
        <div className="flex flex-col gap-5 w-full shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-lg p-3 py-5">  
            <GeneralHeader headerText="Logged in as Doctor at Medibridge."/>
            <div className="flex p-1">
                <DecisionCard icon={<Search />} action="Find Patient Record" onClick={() => router.push("/home/patients")}/>
                <DecisionCard icon={<User fill="#312e81" size={20}/> } action="Register a patient"  onClick={() => router.push("/home/register")}/>
            </div>
        </div>
    )
}

export default Decision;