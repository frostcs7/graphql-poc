import { ApolloServer, gql } from "apollo-server";
import { ProductsAPI } from "./products-api.js";
import { CountriesAPI } from "./countries-api.js";
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    products: async (_, { brandCode }, { dataSources }) => {
      return dataSources.productsAPI.getProduct(brandCode);
    },
    country: async (_, { country }, { dataSources }) => {
      return dataSources.countriesAPI.getCountry(country);
    },

    // productsOfCountry: async (_, { country, brandCode }, { dataSources }) => {
    //   const countryData = dataSources.countriesAPI.getCountry(country);
    //   const productData = dataSources.productsAPI.getProduct(brandCode);
    //   const combinedData = {
    //     capital: countryData.capital,
    //     products: productData,
    //   };
    //   return combinedData;
    // },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  dataSources: () => {
    return {
      productsAPI: new ProductsAPI(),
      countriesAPI: new CountriesAPI(),
    };
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
