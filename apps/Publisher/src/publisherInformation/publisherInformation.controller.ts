import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PublisherInformationService } from "./publisherInformation.service";
import { PublisherInformationControllerBase } from "./base/publisherInformation.controller.base";

@swagger.ApiTags("publisherInformations")
@common.Controller("publisherInformations")
export class PublisherInformationController extends PublisherInformationControllerBase {
  constructor(protected readonly service: PublisherInformationService) {
    super(service);
  }
}
