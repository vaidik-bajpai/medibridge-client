interface Props {
    error?: string;
    name: string
}

const InputDropDownSmall = ({ error, name, ...props }: Props) => {
    return (
        <div className="flex flex-col gap-1 text-base w-full max-w-3xl">
            <label htmlFor="role" className="px-1">Select your role:</label>
            <select
                {...props}
                className="outline-none border-1 border-gray-200 rounded-lg px-2 py-1 text-lg text-gray-800 focus:border-blue-300 focus:ring-3 focus:ring-blue-200"
                id="role" name="role"
            >
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHER">OTHER</option>
            </select>
            {error && <p className="text-red-500 text-xs px-1">{error}</p>}
        </div>
    )
}

export default InputDropDownSmall