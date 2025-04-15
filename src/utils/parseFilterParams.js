import { typeList } from '../constants/contacts.js';

const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = (type) => typeList.includes(type);

  if (isType(type)) return type;
};

const parseBoolean = (boolean) => {
  if (typeof boolean === 'string') {
    if (boolean === 'true') return true;
    if (boolean === 'false') return false;
  }
  return;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedType = parseType(contactType);
  const parsedBoolean = parseBoolean(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedBoolean,
  };
};
