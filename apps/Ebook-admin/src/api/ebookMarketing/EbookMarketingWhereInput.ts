import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EbookMarketingWhereInput = {
  category?: StringNullableFilter;
  cover?: JsonFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  keywords?: StringNullableFilter;
  pricing?: FloatNullableFilter;
  subtitle?: StringNullableFilter;
  title?: StringNullableFilter;
};
