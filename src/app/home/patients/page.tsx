"use client"

import PatientListItem from "../../../../components/PatientListItem";
import SearchBar from "../../../../components/SearchBar";
import GeneralHeader from "../../../../components/GeneralHeader";
import NavigationButton from "../../../../components/NavigationButton";
import { useEffect, useState } from "react";

interface PatientItem {
    id: string
    fullName: string
    dob: string
    age: number
    gender: string
}

interface Metadata {
	currentPage: number
	pageSize: number
	totalItems: number
	totalPages: number
	from: number
	to: number
	hasNext: boolean
	hasPrevious: boolean
}

interface PatientsList {
    patients: PatientItem[]
    meta: Metadata
}

function PatientsList() {
    const [listPatients, setListPatients] = useState<PatientsList>({
        patients: [],
        meta: {
            currentPage: 1,
            pageSize: 10,
            totalItems: 0,
            totalPages: 0,
            from: 0,
            to: 0,
            hasNext: false,
            hasPrevious: false
        }
    });

    const [page, setPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const pageSize = 10

    useEffect(() => {
        fetchPatients();
    }, [page, searchTerm])

    const fetchPatients = async () => {
        try {
            const res = await fetch(
                `http://localhost:8080/v1/patient?page=${page}&pageSize=${pageSize}&searchTerm=${encodeURIComponent(searchTerm)}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                },
            );
            const data = await res.json();
            setListPatients(data.data)
        } catch (err) {
            console.error("Failed to fetch patients", err);
        }
    };

    return (
        <div className="space-y-3 p-4 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded">
            <div className="space-y-3">
                <GeneralHeader headerText="Find Patient Record"/>
                <SearchBar />
            </div>
            <table className="p-2 rounded-lg shadow-lg w-full mx-auto border-collapse">
                <thead className="text-lg">
                    <tr className="font-semibold text-gray-700 bg-linear-to-b from-slate-100 to-gray-200">
                        <td className="p-1 border-1 border-gray-300">Identifier</td>
                        <td className="p-1 border-1 border-gray-300">Name</td>
                        <td className="p-1 border-1 border-gray-300">Gender</td>
                        <td className="p-1 border-1 border-gray-300">Age</td>
                        <td className="p-1 border-1 border-gray-300">Birthdate</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        listPatients.patients.map((p) => (
                            <PatientListItem
                                id={p.id}
                                fullname={p.fullName}
                                gender={p.gender[0]}
                                age={p.age}
                                dob={p.dob}
                            />
                        ))
                    }
                </tbody>
            </table>

            <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">Showing {listPatients.meta.from} to {listPatients.meta.to} of {listPatients.meta.totalItems} entries</div>
                <div className="flex gap-2 items-center">
                    <NavigationButton buttonText="First" onClick={() => setPage(1)}/>
                    <NavigationButton buttonText="Previous" onClick={() => setPage((prev) => {
                        if(prev <= 1) return 1
                        return prev - 1;
                    })}/>
                    <div className="text-sky-500 text-sm">{page}</div>
                    <NavigationButton buttonText="Next" onClick={() => setPage((prev) => {
                        if(prev >= listPatients.meta.totalPages) return listPatients.meta.totalPages
                        return prev + 1;
                    })}/>
                    <NavigationButton buttonText="Last" onClick={() => setPage(listPatients.meta.totalPages)}/>
                </div>
            </div>
        </div>
    )
}

export default PatientsList;