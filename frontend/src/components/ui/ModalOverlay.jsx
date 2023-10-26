import './ModalOverlay.css'

const ModalOverlay = ({ children, isOpen }) => {
    return ( 
        <div className="modal__overlay" style={isOpen ? {} : {display: 'none'}}>
            {children}
        </div>
     );
}
 
export default ModalOverlay;