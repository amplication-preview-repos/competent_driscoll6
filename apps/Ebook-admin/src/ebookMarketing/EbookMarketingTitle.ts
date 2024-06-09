import { EbookMarketing as TEbookMarketing } from "../api/ebookMarketing/EbookMarketing";

export const EBOOKMARKETING_TITLE_FIELD = "subtitle";

export const EbookMarketingTitle = (record: TEbookMarketing): string => {
  return record.subtitle?.toString() || String(record.id);
};
