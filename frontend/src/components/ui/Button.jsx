import './Button.css'

const Button = ({ children, className, onClick, type, size }) => {

    const sizeOptions = {
        sm: '100px',
        md: '150px',
        lg: '200px',
        xl: '250px'
    }

    return (
        <button 
            type={type ? type : 'button'} 
            onClick={onClick} 
            className={className ? `default-btn ${className}` : 'default-btn'}
            style={{maxWidth: sizeOptions[size]}}
        >
            {children}
        </button>
    );
}

export default Button;