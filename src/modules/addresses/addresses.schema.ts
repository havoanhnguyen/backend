import * as mongoose from 'mongoose';

export const addressSchema = new mongoose.Schema({
  apartment: { type: String, default: '' },
  ward: { type: String, default: '' },
  district: { type: String, default: '' },
  province: { type: String, default: '' },
  country: { type: String, default: '' },
  zipcode: { type: String, default: '' },
  fullAddress: { type: String, default: '' },
});

export interface Address extends Document {
  apartment: string;
  ward: string;
  district: string;
  province: string;
  country: string;
  zipcode: string;
  fullAddress: { type: Date; default: '' };
}
