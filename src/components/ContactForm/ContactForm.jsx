import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';
import { addContact } from '../Redux/operations';
import { selectContacts } from 'components/Redux/selectors';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)

    const onFormSubmit = e => {
        e.preventDefault();
        const contact = Array.isArray(contacts) && contacts.find(
          (c) =>
            c.name.toLowerCase() === name.toLowerCase() ||
            c.number.toLowerCase() === number.toLowerCase()
        );
        if (contact) {
          if (contact.name.toLowerCase() === name.toLowerCase()) {
            return alert(`${name} is already in contact`);
          } else if (contact.number.toLowerCase() === number.toLowerCase()) {
            return alert(`${number} is already in contact`);
          }
        };
        dispatch(
          addContact({
            name: name,
            number: number,
          })
        );
        resetForm();
      };

      const resetForm = () => {
        setName('');
        setNumber('');
      };
    
    const onInputChange = e => {
        const { name, value } = e.target;
        switch (name) {
          case 'name':
            setName(value);
            break;
          case 'number':
            setNumber(value);
            break;
    
          default:
            break;
        }
      };

    return (
        <Form onSubmit={onFormSubmit}>
            <Label>
                Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Enter contact name"
                    onChange={onInputChange}
                    value={name}
                />
            </Label>
            <Label>
            Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Enter contact number"
                    onChange={onInputChange}
                    value={number}
                />
            </Label>
            <SubmitBtn type="submit">Add contact</SubmitBtn>
        </Form>
    );
};

export default ContactForm;