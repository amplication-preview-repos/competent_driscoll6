import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthorInformationServiceBase } from "./base/authorInformation.service.base";

@Injectable()
export class AuthorInformationService extends AuthorInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
