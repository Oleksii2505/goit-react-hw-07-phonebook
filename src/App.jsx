import ContactForm from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter";
import ContactList from "components/ContactList/ContactList";
import { Container, TitlePhonebook, TitleContacts } from './App.styled';

export const App = () => {
   
    return (
        <Container>
            <TitlePhonebook>Phonebook</TitlePhonebook>
            <ContactForm />
            <TitleContacts>Contacts</TitleContacts>
            <Filter />
            <ContactList />
        </Container>
    );
}
