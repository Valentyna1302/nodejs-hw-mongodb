import { SORT_ORDER } from '../constants/index.js';
import { ContactsColection } from '../db/models/Contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsColection.find();
  const contactsCount = await ContactsColection.find()
    .merge(contactsQuery)
    .countDocuments();

  const contacts = await contactsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return { data: contacts, ...paginationData };
};

export const getContactById = async (contactId) => {
  const contact = await ContactsColection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsColection.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  const rawResult = await ContactsColection.findOneAndUpdate(
    { _id: contactId },
    payload,
    { ...options },
  );
  return rawResult;
};

export const deleteContact = async (contactId) => {
  const contact = await ContactsColection.findOneAndDelete({ _id: contactId });

  return contact;
};
