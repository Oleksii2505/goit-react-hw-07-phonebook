import PropTypes from 'prop-types';
import { DeleteBtn, Item, List } from './ContactList.styled';
import { delContact } from 'components/Redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
    const dispatch = useDispatch();
    const {numbers} = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    
    const getFilteredContacts = (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      };
    
      const filteredContacts = getFilteredContacts(numbers, filter);
    
      if (filteredContacts.length === 0) {
        return <p>You haven't added any contacts yet</p>;
      }
    
    return (
        <List>
            {filteredContacts.map(({ id, name, number }) =>  (
                    <Item key={id}>
                        {name}: {number}{' '}
                        <DeleteBtn
                            type="button"
                            onClick={() => dispatch(delContact(id))}
                        >
                            Delete
                        </DeleteBtn>
                    </Item>
                )
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