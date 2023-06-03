import css from './ContactItem.module.css'
import PropTypes from 'prop-types';

export const ContactItem = ({name, number, itemKey, deleteContact})=>{
    return (
    <>
    <p key={itemKey}>{name}: {number}</p>
    <button className={css.button} onClick={() => deleteContact(itemKey)}>Delete</button>
    </>
)
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    itemKey: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
 }