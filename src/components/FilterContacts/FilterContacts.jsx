import { Box } from 'Box';
import { PropTypes } from 'prop-types';

export const FilterContacts = ({ handleFilterContacts }) => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      flexDirection="column"
      pt={5}
      pb={5}
    >
      <label htmlFor="filter">Filter</label>
      <input type="text" name="filterName" onChange={handleFilterContacts} />
    </Box>
  );
};

FilterContacts.propTypes = {
  handleFilterContacts: PropTypes.func.isRequired,
};
