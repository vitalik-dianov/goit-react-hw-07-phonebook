import { PropTypes } from 'prop-types';
import { ListItem, List } from './ContactList.styled';

export const ContactList = ({ contacts, filter, handleDeleteContacts }) => {
  const visibleContacts = contacts.filter(el => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <List>
      {visibleContacts.map(el => {
        return (
          <ListItem key={el.id}>
            {el.name} : {el.number}
            <button type="button" onClick={() => handleDeleteContacts(el.id)}>
              Delete
            </button>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDeleteContacts: PropTypes.func.isRequired,
};
