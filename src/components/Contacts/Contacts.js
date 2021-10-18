import PropTypes from 'prop-types';
import s from './Contacts.module.css';

export function Contacts({ contacts, onDelete }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={s.item}>
          {name}: {number}
          <button
            onClick={() => onDelete(id)}
            type="button"
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};
