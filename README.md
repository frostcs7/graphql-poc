# graphql-poc
This is poc for menu tribe for graphql
Its fetching the basic product entity with countries

###
Query:
```
query ProductQuery($country: String) {
  products {
    id
  }
  country(country: $country) {
    area
  }
}
```

Response:
```
{
  "data": {
    "products": [
      {
        "id": "63691627de09401d7104acd2"
      },
      {
        "id": "5b33824c30c11c68ad136cc3"
      },
      {
        "id": "5a7194f372d77a594482649f"
      },
      {
        "id": "5af05f3616d5cf3d6b72c760"
      },
      {
        "id": "5a71951672d77a59448264a0"
      },
      {
        "id": "5af05f7416d5cf3d6b72c76a"
      },
      {
        "id": "5d0b91b4fff0a40032780022"
      },
      {
        "id": "5ee9beda150e3a46412a3af6"
      },
      {
        "id": "5d0b9192dcc23e2045289ba2"
      },
      {
        "id": "5ee9beda150e3a46412a3af7"
      },
      {
        "id": "5ee9beda150e3a46412a3af8"
      },
      {
        "id": "636139637c4f2b3f0c06ba62"
      },
      {
        "id": "6065b968429b3e67912f64f2"
      },
      {
        "id": "6065b968429b3e67912f64f5"
      },
      {
        "id": "6065b968429b3e67912f64f3"
      },
      {
        "id": "6065b968429b3e67912f64f6"
      },
      {
        "id": "6065b968429b3e67912f64f4"
      },
      {
        "id": "6065b968429b3e67912f64f7"
      },
      {
        "id": "6065b968429b3e67912f64f8"
      },
      {
        "id": "63614388f9b2c79ee9053652"
      }
    ],
    "country": {
      "area": 75417
    }
  }
}
```
