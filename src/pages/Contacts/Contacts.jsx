import React, { useEffect } from 'react';
import Form from '../../components/Form/Form';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import * as contactsSelectors from '../../redux/contacts/contactsSelectors';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Div } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterReducer';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };

    const dublicateContact = contacts.find(item => item.name === contact.name);

    if (dublicateContact) {
      return Notify.failure(`${data.name} is already in contacts`);
    }

    dispatch(contactsOperations.addContact(contact));
  };

  const onDeleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  const changeFilter = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Div>
      <div variant="outlined">
        <Form onSubmit={formSubmitHandler} />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      </div>
    </Div>
  );
}
