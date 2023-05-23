import { Repository } from "typeorm";
import { dataSource } from "../tools/utils";
import { Country } from "../entities/Country";
import { CreateCountryInput } from "../inputs/CreateCountryInput";

export const countryRepository: Repository<Country> =
  dataSource.getRepository(Country);

  export default {
  getAll: async (): Promise<Country[]> => {
    return await countryRepository.find();
  },

  getOne: async (code: string): Promise<Country> => {
    return await countryRepository.findOneByOrFail({ code });
  },

  getByContinentCode: async (code: string): Promise<Country[]> => {
    return await countryRepository.find({
      where: {
        continentCode: code
      }
    });
  },

  create: async (country: CreateCountryInput): Promise<Country> => {
    return await countryRepository.save(country);
  },

  delete: async (code: string): Promise<any> => {
    return await countryRepository.delete({ code: code });
  }
}