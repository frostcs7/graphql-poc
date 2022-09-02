import { RESTDataSource } from "apollo-datasource-rest";

class CountriesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://restcountries.com/v3.1/";
  }

  async getCountry(country) {
    const data = await this.get(`name/${encodeURIComponent(country)}`);
    return data[0];
  }
}

export { CountriesAPI };
