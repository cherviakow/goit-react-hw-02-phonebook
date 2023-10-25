import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, OnDelite }) => {
    return (
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={css.contactItem} key={id}>
              <p className="contactText">{name}:</p>
              <p className="contactText">{number}</p>
              <button className={css.btnDelete} onClick={() => OnDelite(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default ContactList;



// const ContactList = ({contacts, onDelite})=>{
// return(
//     <ul className="contactList">
//         {contacts.map(({id, name, number})=>{
//             return(
//             <li className="contactItem" key={id}>
//                 <p className="listItem">{name}</p>
//                 <p className="listItem">{number}</p>
//                 <button className="deliteBtn" onClick={onDelite(id)}>
//                     Delete
//                 </button>
//             </li>
//             );
//         })}
//     </ul>
// )
// }

// export default ContactList;

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         })
//     ),
//     onDelite: PropTypes.func.isRequired,
// };