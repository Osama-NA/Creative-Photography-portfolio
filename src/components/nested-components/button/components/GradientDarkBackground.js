import GradientDarkBackgroundStyle from "../styles/GradientDarkBackground.styled";

const GradientDarkBackground = ({ text, width }) => {
    return (
        <GradientDarkBackgroundStyle style={{ width: width }} className="button">
            <div className="background-gradient">
                <p>{text}</p>
            </div>
        </GradientDarkBackgroundStyle>
    )
}

export default GradientDarkBackground;