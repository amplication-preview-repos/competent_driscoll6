import { Module } from "@nestjs/common";
import { EbookMarketingModuleBase } from "./base/ebookMarketing.module.base";
import { EbookMarketingService } from "./ebookMarketing.service";
import { EbookMarketingController } from "./ebookMarketing.controller";
import { EbookMarketingResolver } from "./ebookMarketing.resolver";

@Module({
  imports: [EbookMarketingModuleBase],
  controllers: [EbookMarketingController],
  providers: [EbookMarketingService, EbookMarketingResolver],
  exports: [EbookMarketingService],
})
export class EbookMarketingModule {}
