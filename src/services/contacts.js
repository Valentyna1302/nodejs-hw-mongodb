import { ContactsColection } from '../db/models/Contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsColection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsColection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsColection.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload, option = {}) => {
  const rawResult = await ContactsColection.findOneAndUpdate(
    { _id: contactId },
    payload,
    { new: true },
  );
  return rawResult;
};
