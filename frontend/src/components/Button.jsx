import './Button.css'

const Button = ({ children, className }) => {
    return (
        <button className={`default-button ` + className}>
            {children}
        </button>
    );
}

export default Button;