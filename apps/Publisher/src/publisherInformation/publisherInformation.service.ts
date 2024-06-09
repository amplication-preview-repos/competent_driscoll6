import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PublisherInformationServiceBase } from "./base/publisherInformation.service.base";

@Injectable()
export class PublisherInformationService extends PublisherInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
