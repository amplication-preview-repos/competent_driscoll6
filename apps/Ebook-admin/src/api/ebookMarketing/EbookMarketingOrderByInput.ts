import { SortOrder } from "../../util/SortOrder";

export type EbookMarketingOrderByInput = {
  category?: SortOrder;
  cover?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  keywords?: SortOrder;
  pricing?: SortOrder;
  subtitle?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
