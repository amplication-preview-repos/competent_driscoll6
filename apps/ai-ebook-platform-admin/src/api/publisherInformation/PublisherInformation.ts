import { JsonValue } from "type-fest";

export type PublisherInformation = {
  about: string | null;
  createdAt: Date;
  id: string;
  logo: JsonValue;
  name: string | null;
  updatedAt: Date;
};
