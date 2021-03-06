import UnfilledButtonStyle from "../styles/UnfilledButton.styled";

const UnfilledButton = ({ text, width }) => {
    return (
        <UnfilledButtonStyle style={{ width: width }} className="unfilled-button button">
            {text}
        </UnfilledButtonStyle >
    )
}

export default UnfilledButton;