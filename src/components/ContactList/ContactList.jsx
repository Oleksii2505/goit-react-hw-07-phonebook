import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../Redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts, selectIsLoading, selectError } from 'components/Redux/selectors';
import { DeleteBtn, Item, List } from './ContactList.styled';

const ContactList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const filteredContacts = useSelector(selectVisibleContacts);
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    const onClickDelete = contactId => {
        dispatch(deleteContact(contactId));
    };
    
    return (
        <List>
            {isLoading && !error && <b>Loading...</b>}
            {filteredContacts.map(({ id, name, phone }) =>  {
                return (
                    <Item key={id}>
                        {name}: {phone}{' '}
                        <DeleteBtn
                            type="button"
                            onClick={() => onClickDelete(id)}
                        >
                            Delete
                        </DeleteBtn>
                    </Item>
                )}
            )}
        </List>
    );
};

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};

export default ContactList;