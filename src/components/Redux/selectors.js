import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = state => state.filter;
export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilteredContacts],
    (contacts, filter) => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
  );
