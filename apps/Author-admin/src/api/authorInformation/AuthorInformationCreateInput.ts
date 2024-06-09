import { InputJsonValue } from "../../types";

export type AuthorInformationCreateInput = {
  biography?: string | null;
  image?: InputJsonValue;
  name?: string | null;
};
