import css from './Filter.module.css'
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.label}>
      <span className={css.title}>Find contacts by name</span>
      <input
        className={css.title}
        type="text"
        title={'Start typing the contact name..'}
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};