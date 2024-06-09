import { Module } from "@nestjs/common";
import { PublisherInformationModuleBase } from "./base/publisherInformation.module.base";
import { PublisherInformationService } from "./publisherInformation.service";
import { PublisherInformationController } from "./publisherInformation.controller";
import { PublisherInformationResolver } from "./publisherInformation.resolver";

@Module({
  imports: [PublisherInformationModuleBase],
  controllers: [PublisherInformationController],
  providers: [PublisherInformationService, PublisherInformationResolver],
  exports: [PublisherInformationService],
})
export class PublisherInformationModule {}
