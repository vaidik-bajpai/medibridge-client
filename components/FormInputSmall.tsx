interface FormInputInterface {
    type: string;
    label: string;
    name: string; 
    error?: string; 
}

const FormInputSmall = ({ type, label, name, error, ...props }: FormInputInterface) => {
    return (
        <div className="flex flex-col gap-1 text-base w-full">
            <label className="px-1">{label}</label>
            <input 
                {...props} 
                type={type}
                name={name} 
                className="appearance-none outline-none border-1 border-gray-200 rounded px-2 py-1 placeholder:text-lg placeholder:text-gray-500 focus:border-blue-300 focus:ring-3 focus:ring-blue-200"/>
            {error && <p className="text-red-500 text-xs px-1">{error}</p>}
        </div>
    )
}

export default FormInputSmall