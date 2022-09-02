import { gql } from "apollo-server";

const typeDefs = gql`
  type Product {
    id: String
    active: Boolean
    country: String
    legacy_handles: [String]
    meal_swap: Boolean
    meal_swap_default_choice: String
    swappable_meals: String
    is_preset_enabled: Boolean
    is_subscribable: Boolean
    is_available_for_extra_meals: Boolean
    name: String
    handle: String
    legacy_ids: [String]
    price: Int
    one_off_price: Int
    recurring_price: Int
    special_fee: Int
    public: Boolean
    specs: Spec
    sort: Int
    family: String
    scm: String
    scm_short: String
    scm_size: String
    created_at: String
    updated_at: String
  }

  type Spec {
    meals: Int
    size: Int
    recurrency: Int
  }

  type Country {
    capital: [String]
    latlng: [Int]
    area: Float
    flag: String
  }

  type Query {
    products(brandCode: String): [Product]
    country(country: String): Country
  }
`;

export { typeDefs };
