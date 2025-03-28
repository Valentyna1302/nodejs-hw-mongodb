import { ContactsColection } from '../db/models/Contacts.js';

export const getAllContacts = async () => {
  const students = await ContactsColection.find();
  return students;
};

export const getContactById = async (contactId) => {
  const student = await ContactsColection.findById(contactId);
  return student;
};
