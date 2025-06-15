"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { RecordInterface } from "../../types/record";

interface RecordContextType {
    record: RecordInterface | undefined;
    setRecord: (record: RecordInterface) => void;
}

const RecordContext = createContext<RecordContextType | undefined>(undefined);

export const useRecord = () => {
const context = useContext(RecordContext);
    if (!context) {
        throw new Error("useRecord must be used within a RecordProvider");
    }
    return context;
};

export const RecordProvider = ({ children }: { children: ReactNode }) => {
    const [record, setRecord] = useState<RecordInterface>();

    return (
        <RecordContext.Provider value={{ record, setRecord }}>
        {children}
        </RecordContext.Provider>
    );
};
