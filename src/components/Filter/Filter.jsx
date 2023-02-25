import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
function Filter({ value, onChange }) {
  return (
    <form>
      <label>
        Find contacts by name
        <Input type="text" value={value} name="filter" onChange={onChange} />
      </label>
    </form>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
