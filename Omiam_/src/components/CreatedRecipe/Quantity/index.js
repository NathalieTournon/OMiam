import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Quantity({ onChange }) {
  const valueUnit = useSelector((state) => state.createdRecipe.recipeIngredients.unit);

  return (
    <input
      className="ingredients-type"
      type="text"
      onChange={onChange}
      value={valueUnit}
      placeholder="cl"
    />
  );
}
Quantity.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Quantity;
