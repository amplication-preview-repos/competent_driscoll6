import { PublisherInformation as TPublisherInformation } from "../api/publisherInformation/PublisherInformation";

export const PUBLISHERINFORMATION_TITLE_FIELD = "name";

export const PublisherInformationTitle = (
  record: TPublisherInformation
): string => {
  return record.name?.toString() || String(record.id);
};
