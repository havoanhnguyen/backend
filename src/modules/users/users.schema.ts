import * as mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { Address, addressSchema } from '@modules/addresses/addresses.schema';

export const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, default: '' },
    address: addressSchema,
    birthDay: { type: Date, default: null },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    fullTextSearch: { type: String, default: null },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

userSchema.index({ email: 1 });
userSchema.index({ fullTextSearch: 1 });

userSchema.plugin(mongoosePaginate);

export interface User extends Document {
  readonly email: string;
  readonly password: string;
  readonly phone: string;
  readonly address: Address;
  readonly birthDay: Date;
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTextSearch: string;
}
