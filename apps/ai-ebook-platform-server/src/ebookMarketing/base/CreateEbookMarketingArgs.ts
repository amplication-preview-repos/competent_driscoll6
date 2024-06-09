/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EbookMarketingCreateInput } from "./EbookMarketingCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateEbookMarketingArgs {
  @ApiProperty({
    required: true,
    type: () => EbookMarketingCreateInput,
  })
  @ValidateNested()
  @Type(() => EbookMarketingCreateInput)
  @Field(() => EbookMarketingCreateInput, { nullable: false })
  data!: EbookMarketingCreateInput;
}

export { CreateEbookMarketingArgs as CreateEbookMarketingArgs };
