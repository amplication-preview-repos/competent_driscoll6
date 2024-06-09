import { AuthorInformationWhereInput } from "./AuthorInformationWhereInput";
import { AuthorInformationOrderByInput } from "./AuthorInformationOrderByInput";

export type AuthorInformationFindManyArgs = {
  where?: AuthorInformationWhereInput;
  orderBy?: Array<AuthorInformationOrderByInput>;
  skip?: number;
  take?: number;
};
