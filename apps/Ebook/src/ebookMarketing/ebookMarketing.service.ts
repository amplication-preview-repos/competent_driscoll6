import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EbookMarketingServiceBase } from "./base/ebookMarketing.service.base";

@Injectable()
export class EbookMarketingService extends EbookMarketingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
