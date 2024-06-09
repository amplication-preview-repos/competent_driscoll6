import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EbookMarketingService } from "./ebookMarketing.service";
import { EbookMarketingControllerBase } from "./base/ebookMarketing.controller.base";

@swagger.ApiTags("ebookMarketings")
@common.Controller("ebookMarketings")
export class EbookMarketingController extends EbookMarketingControllerBase {
  constructor(protected readonly service: EbookMarketingService) {
    super(service);
  }
}
