import { model, Schema } from 'mongoose';
import { typeList } from '../../constants/contacts.js';
import { handleSaveError } from './hooks.js';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: typeList,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

contactsSchema.post('save', handleSaveError);

contactsSchema.pre('findOneAndUpdate', function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
});

contactsSchema.post('findOneAndUpdate', handleSaveError);

export const ContactsColection = model('contacts', contactsSchema);
