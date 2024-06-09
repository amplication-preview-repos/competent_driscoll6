import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuthorInformationService } from "./authorInformation.service";
import { AuthorInformationControllerBase } from "./base/authorInformation.controller.base";

@swagger.ApiTags("authorInformations")
@common.Controller("authorInformations")
export class AuthorInformationController extends AuthorInformationControllerBase {
  constructor(protected readonly service: AuthorInformationService) {
    super(service);
  }
}
