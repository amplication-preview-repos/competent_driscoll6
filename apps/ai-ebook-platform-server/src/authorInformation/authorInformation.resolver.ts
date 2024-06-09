import * as graphql from "@nestjs/graphql";
import { AuthorInformationResolverBase } from "./base/authorInformation.resolver.base";
import { AuthorInformation } from "./base/AuthorInformation";
import { AuthorInformationService } from "./authorInformation.service";

@graphql.Resolver(() => AuthorInformation)
export class AuthorInformationResolver extends AuthorInformationResolverBase {
  constructor(protected readonly service: AuthorInformationService) {
    super(service);
  }
}
