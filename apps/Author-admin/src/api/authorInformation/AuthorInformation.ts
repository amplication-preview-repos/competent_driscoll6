import { JsonValue } from "type-fest";

export type AuthorInformation = {
  biography: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  name: string | null;
  updatedAt: Date;
};
