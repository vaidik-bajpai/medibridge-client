const PatientSubHeader = ({headerText}: {headerText: string}) => {
    return (
        <h2 className="font-bold text-lg border-b-4 border-teal-700 text-teal-700 px-2">
            {headerText}
        </h2>
    )
}

export default PatientSubHeader