function GeneralHeader({headerText}: {headerText: string}) {
    return (
        <h1 className="text-xl text-teal-700">
            {headerText}
        </h1>
    )
}

export default GeneralHeader;