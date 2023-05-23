import { InputType, Field } from "type-graphql";
import "reflect-metadata";

@InputType()
export class CreateCountryInput {
    @Field()
    code!: string;

    @Field()
    name!: string;

    @Field()
    emoji!: string;

    @Field()
    continentCode!: string;
}