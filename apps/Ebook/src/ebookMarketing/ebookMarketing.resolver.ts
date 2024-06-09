import * as graphql from "@nestjs/graphql";
import { EbookMarketingResolverBase } from "./base/ebookMarketing.resolver.base";
import { EbookMarketing } from "./base/EbookMarketing";
import { EbookMarketingService } from "./ebookMarketing.service";

@graphql.Resolver(() => EbookMarketing)
export class EbookMarketingResolver extends EbookMarketingResolverBase {
  constructor(protected readonly service: EbookMarketingService) {
    super(service);
  }
}
