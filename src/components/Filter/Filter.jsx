import { Input, Label } from './Filter.styled';
import { getFilter } from 'components/Redux/filterSlice';
import { useDispatch, useSelector} from 'react-redux';
import { selectFilteredContacts } from 'components/Redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilteredContacts)
    return (
        <Label>
            Find contact by name
            <Input
                type="text"
                name="name"
                placeholder="Enter contact name"
                value={filter}
                onChange={(e) => dispatch(getFilter(e.target.value))}
                pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
            />
        </Label>
    );
};

