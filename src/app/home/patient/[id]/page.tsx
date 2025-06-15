"use client"

import { useRecord } from "@/context/RecordContext";
import PatientSubHeader from "../../../../../components/PatientSubHeader";
import { format } from "path";
import { formatDOB } from "../../../../../utils/dateFormat";

const Patient = () => {
    const { record } = useRecord();

    if (!record) return null; // Safety check

    return (
        <div className="flex gap-4 w-full">
            <div className="w-full">
                <div className="max-w-sm ml-auto">
                    <PatientSubHeader headerText="Diagnoses" />
                    <div className="bg-gray-50">
                        {record.diagnoses === null || record.diagnoses.length === 0 ? (
                            <div className="text-sm text-gray-500 italic py-2 px-2">No diagnoses available.</div>
                        ) : (
                            record.diagnoses.map((diag) => (
                                <div 
                                    key={diag.id}
                                    className="text-sm font-semibold">{diag.name}
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="ml-auto max-w-sm">
                    <PatientSubHeader headerText="Vitals" />
                    <div className="bg-gray-50 py-2 px-2">
                        {record.vitals && Object.values(record.vitals).some(v => v) ? (
                            Object.entries(record.vitals).map(([key, value]) => {
                                if (!value) return null;
                                return (
                                    <div key={key} className="text-sm font-semibold capitalize">
                                        {key.replace(/([A-Z])/g, ' $1')}: {value}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-sm text-gray-500 italic">
                                No vital observations available.
                            </div>
                        )}
                    </div>
                </div>

                <div className="max-w-sm ml-auto">
                    <PatientSubHeader headerText="Recent Visits" />
                    <div className="bg-gray-50 py-2 px-2">
                        <div className="text-sky-500">{formatDOB(record.patient.updatedAt) ?? formatDOB(record.patient.createdAt)}</div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="max-w-sm">
                    <PatientSubHeader headerText="Family" />
                    <table className="p-2 rounded-lg shadow-lg w-full mx-auto border-collapse">
                        <thead className="text-md">
                            <tr className="text-gray-700 bg-linear-to-b from-slate-100 to-gray-200">
                                <td className="p-1 border-1 border-gray-300">Name</td>
                                <td className="p-1 border-1 border-gray-300">Relation</td>
                                <td className="p-1 border-1 border-gray-300">Contact No</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-[#fffefc] even:bg-[#fcfbf4] text-lg">
                                <td className="border border-gray-300 p-1 text-ellipsis">{record.patient.emergencyName}</td>
                                <td className="border border-gray-300 p-1">{record.patient.emergencyRelation}</td>
                                <td className="border border-gray-300 p-1">{record.patient.contactNo}</td>
                            </tr> 
                        </tbody>
                    </table>    
                </div>

                <div className="max-w-sm">
                    <PatientSubHeader headerText="Conditions" />
                    <div className="bg-gray-50 rounded-md px-2 py-2 shadow-sm">
                        {Array.isArray(record.diagnoses) && record.diagnoses.length > 0 ? (
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
                                {record.diagnoses.map((condition) => (
                                    <li key={condition.id} className="font-medium">
                                        {condition.name}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="text-sm text-gray-500 italic">
                                No diagnosed conditions available.
                            </div>
                        )}
                    </div>
                </div>

                <div className="max-w-sm">
                    <PatientSubHeader headerText="Allergy" />
                    {Array.isArray(record.allergies) && record.allergies.length > 0 ? (
                        <table className="w-full border-collapse shadow rounded-lg">
                            <thead className="bg-gradient-to-b from-slate-100 to-gray-200 text-gray-700 text-sm">
                                <tr>
                                    <th className="border border-gray-300 p-2 text-left">Name</th>
                                    <th className="border border-gray-300 p-2 text-left">Reaction</th>
                                    <th className="border border-gray-300 p-2 text-left">Severity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {record.allergies.map((allergy) => (
                                    <tr key={allergy.id} className="odd:bg-[#fffefc] even:bg-[#fcfbf4] text-sm">
                                        <td className="border border-gray-300 p-2">{allergy.name}</td>
                                        <td className="border border-gray-300 p-2">{allergy.reaction}</td>
                                        <td className="border border-gray-300 p-2">{allergy.severity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="bg-gray-50 text-sm text-gray-500 italic p-3 rounded shadow">
                            No known allergies reported.
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};

export default Patient;
