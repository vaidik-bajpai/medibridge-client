"use client"

import { RecordProvider, useRecord } from "@/context/RecordContext";
import PatientLayoutContent from "../../../../../components/PatientLayoutContent";

export default function PatientLayout({
        children,
    }: {
        children: React.ReactNode;
}) {
    return (
        <RecordProvider>
            <PatientLayoutContent children={children}/>
        </RecordProvider>
    )
}

