import styles from './ModalOverlay.module.css'

const ModalOverlay = ({ children, isOpen }) => {
    return ( 
        <div className={styles.modalOverlay} style={isOpen ? {} : {display: 'none'}}>
            {children}
        </div>
     );
}
 
export default ModalOverlay;