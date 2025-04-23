function Action({buttonText}: {buttonText: string}) {
    return <button type="submit" className="ml-auto text-white text-center w-26 mx-8 mt-4 py-1.5 rounded bg-linear-to-b from-lime-500 hover:from-lime-600 to-lime-600 cursor-pointer">
        {buttonText}
    </button>
}   

export default Action;