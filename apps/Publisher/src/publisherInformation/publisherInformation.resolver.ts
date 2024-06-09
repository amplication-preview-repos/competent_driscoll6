import * as graphql from "@nestjs/graphql";
import { PublisherInformationResolverBase } from "./base/publisherInformation.resolver.base";
import { PublisherInformation } from "./base/PublisherInformation";
import { PublisherInformationService } from "./publisherInformation.service";

@graphql.Resolver(() => PublisherInformation)
export class PublisherInformationResolver extends PublisherInformationResolverBase {
  constructor(protected readonly service: PublisherInformationService) {
    super(service);
  }
}
