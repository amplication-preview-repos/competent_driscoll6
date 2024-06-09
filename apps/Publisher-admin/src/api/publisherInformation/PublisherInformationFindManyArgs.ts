import { PublisherInformationWhereInput } from "./PublisherInformationWhereInput";
import { PublisherInformationOrderByInput } from "./PublisherInformationOrderByInput";

export type PublisherInformationFindManyArgs = {
  where?: PublisherInformationWhereInput;
  orderBy?: Array<PublisherInformationOrderByInput>;
  skip?: number;
  take?: number;
};
