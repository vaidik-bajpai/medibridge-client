import PatientListItem from "../../../../components/PatientListItem";
import SearchBar from "../../../../components/SearchBar";
import SearchPatientsHeader from "../../../../components/GeneralHeader";
import GeneralHeader from "../../../../components/GeneralHeader";

function PatientsList() {
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
                    <PatientListItem
                        id={"some id"}
                        fullname={"Vaidik Bajpai"}
                        gender={"M"}
                        age="20"
                        dob="18.Dec.2004"
                    />
                    <PatientListItem
                        id={"some id"}
                        fullname={"Vaidik Bajpai"}
                        gender={"M"}
                        age="20"
                        dob="18.Dec.2004"
                    />
                    <PatientListItem
                        id={"some id"}
                        fullname={"Vaidik Bajpai"}
                        gender={"M"}
                        age="20"
                        dob="18.Dec.2004"
                    />
                    <PatientListItem
                        id={"some id"}
                        fullname={"Vaidik Bajpai"}
                        gender={"M"}
                        age="20"
                        dob="18.Dec.2004"
                    />
                    <PatientListItem
                        id={"some id"}
                        fullname={"Vaidik Bajpai"}
                        gender={"M"}
                        age="20"
                        dob="18.Dec.2004"
                    />
                    <PatientListItem
                        id={"some id"}
                        fullname={"Vaidik Bajpai"}
                        gender={"M"}
                        age="20"
                        dob="18.Dec.2004"
                    />
                    <PatientListItem
                        id={"some id"}
                        fullname={"Vaidik Bajpai"}
                        gender={"M"}
                        age="20"
                        dob="18.Dec.2004"
                    />
                    <PatientListItem
                        id={"some id"}
                        fullname={"Vaidik Bajpai"}
                        gender={"M"}
                        age="20"
                        dob="18.Dec.2004"
                    />
                    <PatientListItem
                        id={"some id"}
                        fullname={"Vaidik Bajpai"}
                        gender={"M"}
                        age="20"
                        dob="18.Dec.2004"
                    />
                </tbody>
            </table>
        </div>
    )
}

export default PatientsList;