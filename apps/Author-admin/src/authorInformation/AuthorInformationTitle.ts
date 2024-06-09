import { AuthorInformation as TAuthorInformation } from "../api/authorInformation/AuthorInformation";

export const AUTHORINFORMATION_TITLE_FIELD = "name";

export const AuthorInformationTitle = (record: TAuthorInformation): string => {
  return record.name?.toString() || String(record.id);
};
