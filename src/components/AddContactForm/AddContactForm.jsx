import React from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PropTypes } from 'prop-types';
import { Btn } from './AddContactForm.styled';

const ContactsForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;
export const AddContactForm = ({ handleSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string('Please type a name').required('Is required'),
    number: yup.string('Please type a number').required('Is required'),
  });
  const initialValues = {
    name: '',
    number: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <ContactsForm autoComplete="off">
        <label htmlFor="name">Name</label>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" component="div" />
        <label htmlFor="number">Number</label>
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="number" component="div" />
        <Btn type="submit"> Add contact</Btn>
      </ContactsForm>
    </Formik>
  );
};

AddContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
