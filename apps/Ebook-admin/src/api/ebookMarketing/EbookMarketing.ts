import { JsonValue } from "type-fest";

export type EbookMarketing = {
  category: string | null;
  cover: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  keywords: string | null;
  pricing: number | null;
  subtitle: string | null;
  title: string | null;
  updatedAt: Date;
};
