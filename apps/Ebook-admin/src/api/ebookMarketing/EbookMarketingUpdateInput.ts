import { InputJsonValue } from "../../types";

export type EbookMarketingUpdateInput = {
  category?: string | null;
  cover?: InputJsonValue;
  description?: string | null;
  keywords?: string | null;
  pricing?: number | null;
  subtitle?: string | null;
  title?: string | null;
};
