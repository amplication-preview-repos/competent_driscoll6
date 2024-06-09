import { Module } from "@nestjs/common";
import { AuthorInformationModuleBase } from "./base/authorInformation.module.base";
import { AuthorInformationService } from "./authorInformation.service";
import { AuthorInformationController } from "./authorInformation.controller";
import { AuthorInformationResolver } from "./authorInformation.resolver";

@Module({
  imports: [AuthorInformationModuleBase],
  controllers: [AuthorInformationController],
  providers: [AuthorInformationService, AuthorInformationResolver],
  exports: [AuthorInformationService],
})
export class AuthorInformationModule {}
