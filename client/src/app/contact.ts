/**
 * This holds all the properties of a Contact and is used for Type checking
 */
export class Contact {
  id: number;
  firstName: string;
  lastName?: string;
  phoneNumber: number;
  email?: string;
  isActive: boolean;
  country: string;
  countryCode: string;
}
