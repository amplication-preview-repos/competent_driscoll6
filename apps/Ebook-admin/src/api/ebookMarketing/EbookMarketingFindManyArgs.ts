import { EbookMarketingWhereInput } from "./EbookMarketingWhereInput";
import { EbookMarketingOrderByInput } from "./EbookMarketingOrderByInput";

export type EbookMarketingFindManyArgs = {
  where?: EbookMarketingWhereInput;
  orderBy?: Array<EbookMarketingOrderByInput>;
  skip?: number;
  take?: number;
};
