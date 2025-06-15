"use client"

import { useRecord } from "@/context/RecordContext";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GeneralHeader from "./GeneralHeader";
import { formatDOB } from "../utils/dateFormat";

export default function PatientLayoutContent({
        children,
    }: {
        children: React.ReactNode;
}) {
    const params = useParams();
    const id = params.id;
    const router = useRouter();

    const { record, setRecord } = useRecord();
    const [loading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        handleGetPatient();
    }, [id])

    async function handleGetPatient() {
        setIsLoading(true)
        try {
            const res = await fetch(
                `http://localhost:8080/v1/patient/${id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                },
            );
            if (!res.ok) {
                // Handles 400 (Bad Request), 404 (Not Found), etc.
                console.warn("Invalid ID or patient not found");
                router.push("/home/patients"); // Redirect back
                return;
            }

            const data = await res.json();

            if (!data?.data?.patient) {
                // Safety check in case patient is null
                router.push("/home/patients");
                return;
            }

            setRecord(data.data);
        } catch (err) {
            
            console.error("Failed to fetch patients", err);
        }
        setIsLoading(false);
    }

    return (
        <div className="w-full shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-lg">
            {loading ? 
                (
                    <div>loading</div>
                ) : (
                    record ? (
                        <>
                            <div className="bg-gray-50 p-3 py-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-6 items-center">
                                        <GeneralHeader headerText={record.patient.fullname}/>
                                        <div className="text-xs text-teal-700">{`${record.patient.gender} ${record.patient.age} year(s) (${formatDOB(record.patient.dob)})`}</div>
                                        <button className="text-xs text-sky-500 cursor-pointer hover:underline">Edit</button>
                                    </div>
                                    <div className="text-xs">
                                        <span className="text-gray-600 text-sm italic border-b mr-1">Patient ID: </span>
                                        {`${record.patient.id.slice(0, 6)}...${record.patient.id.slice(-5)}`}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 px-2">
                                    <div className="border-b w-fit border-gray-600 text-gray-600 text-sm">{record.patient.address}</div>
                                    <div className="text-xs italic text-gray-600">Address</div>

                                    <div className="border-b w-fit border-gray-600 text-gray-600 text-sm">{record.patient.contactNo}</div>
                                    <div className="text-xs italic underline text-gray-600">Contact Number</div>

                                    <button className="text-xs text-sky-500 cursor-pointer hover:underline w-fit">Edit</button>
                                </div>
                            </div>
                            <div className="p-3 py-5">{children}</div>
                        </>
                    ) : (
                        null
                    )
                )
            }
        </div>
    )
}