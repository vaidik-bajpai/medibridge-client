interface NavigationButtonInterface {
    buttonText: string
    onClick: () => void
} 

const NavigationButton = ({buttonText}: NavigationButtonInterface) => {
    return (
        <button className="text-sky-500 text-sm cursor-pointer">
            {buttonText}
        </button>
    )
}

export default NavigationButton