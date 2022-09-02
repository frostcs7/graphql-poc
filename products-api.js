import { RESTDataSource } from "apollo-datasource-rest";

class ProductsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://products-service.staging-k8s.hellofresh.io/";
  }

  async getProduct(brandCode = "ER") {
    const data = await this.get(`products/?country=${brandCode}`);
    return data.items;
  }
}

export { ProductsAPI };
