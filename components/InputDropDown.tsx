import { UseFormRegister } from "react-hook-form";

interface Props {
    error?: string;
    name: string
}

function InputDropDown({ error, name, ...props }: Props) {
    return (
        <div className="flex flex-col gap-1 text-base w-full max-w-3xl">
            <label htmlFor="role" className="px-1">Select your role:</label>
            <select
                {...props}
                className="outline-none border-1 border-gray-200 rounded-lg px-3 py-2 text-lg text-gray-800 focus:border-blue-300 focus:ring-3 focus:ring-blue-200"
                id="role" name="role"
            >
                <option value="receptionist">Receptionist</option>
                <option value="doctor">Doctor</option>
            </select>
            {error && <p className="text-red-500 text-xs px-1">{error}</p>}
        </div>
    )
}

export default InputDropDown;