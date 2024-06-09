import { InputJsonValue } from "../../types";

export type AuthorInformationUpdateInput = {
  biography?: string | null;
  image?: InputJsonValue;
  name?: string | null;
};
