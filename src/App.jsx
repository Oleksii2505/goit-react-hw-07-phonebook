import ContactForm from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter";
import ContactList from "components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "components/Redux/operations";
import { selectError, selectIsLoading } from "components/Redux/selectors";
import { Container, TitlePhonebook, TitleContacts } from './App.styled';

export const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container>
            <TitlePhonebook>Phonebook</TitlePhonebook>
            <ContactForm />
            <TitleContacts>Contacts</TitleContacts>
            <Filter />
            {isLoading && !error && <b>Loading...</b>}
            <ContactList />
        </Container>
    );
}
