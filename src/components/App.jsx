import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'Box';

import { setFilterValue } from './redux/filterSlice';
import {
  selectContacts,
  selectIsLoading,
  selectFilter,
  selectError,
} from './redux/selectors';

import { fetchContacts, addContact, deleteContact } from './redux/operations';

import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { ContactList } from 'components/ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (
      contacts.find(el => {
        return el.name.toLowerCase() === name.toLowerCase();
      })
    ) {
      alert(`Sorry, but ${name} is already in contacts!`);
      return;
    } else {
      dispatch(addContact({ name, number }));
    }

    resetForm();
  };
  const handleFilterContacts = e => {
    dispatch(setFilterValue(e.target.value));
  };
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      mr="auto"
      ml="auto"
      maxWidth={6}
      p={5}
    >
      <AddContactForm handleSubmit={handleSubmit} />
      <FilterContacts handleFilterContacts={handleFilterContacts} />

      {isLoading && <b>Request in progress...</b>}
      {error && <b>{error}</b>}
      <ContactList
        contacts={contacts}
        filter={filter}
        handleDeleteContacts={handleDeleteContact}
      />
    </Box>
  );
};
