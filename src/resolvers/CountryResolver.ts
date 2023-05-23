import { Query, Arg, Resolver, Mutation } from "type-graphql";
import { Country } from "../entities/Country";
import countryService, { countryRepository } from "../services/countryService";
import { CreateCountryInput } from "../inputs/CreateCountryInput";

@Resolver(Country)
export class CountryResolver {
    @Query(() => [Country])
    async getAllCountries(): Promise<Country[]> {
        try {
            let countries = await countryService.getAll();
            return countries;
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    @Query(() => Country)
    async getOne(
        @Arg("code") code: string,
    ): Promise<Country> {
        try {
            let country = await countryService.getOne(code);
            return country;
        } catch (err) {
            throw new Error('Aucun pays trouvé pour le code donné');
        }
    }

    @Query(() => [Country])
    async getByContinentCode(
        @Arg("code") code: string,
    ): Promise<Country[]> {
        try {
            let results = await countryService.getByContinentCode(code);
            return results.length > 0 ? results : [];
        } catch (err: any) {
            throw new Error("Erreur en recherchant les pays associés au code continent");
        }
    }

    @Mutation(() => Country)
    async createOne(
        @Arg("country") country: CreateCountryInput,
    ): Promise<Country> {
        try {
            let newCountry = await countryService.create(country);
            return newCountry;
        } catch (err: any) {
            throw new Error('Erreur en créant le pays');
        }
    }

    @Mutation(() => String)
    async deleteOne(
        @Arg("code") code: string,
    ): Promise<string> {
        try {
            await countryService.delete(code);
            return 'ok';
        } catch (err) {
            throw new Error('Erreur en supprimant le pays');
        }
    }
}