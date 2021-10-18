import PropTypes from 'prop-types';
import s from './Filter.module.css';

export function Filter({ onChange, value }) {
  return (
    <div>
      <label className={s.label}>Find contacts by name</label>
      <input
        type="tel"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChange}
        className={s.input}
      />
    </div>
  );
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
