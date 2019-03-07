# Cancha Martinez

## PLEASE NOTE

Index document must be provided in order to sort matches by `reservation_date`. Below is the example doc to create:

```
"_id": "*****",
"_rev": "*****",
"language": "query",
  "views": {
    "reservation_date": {
      "map": {
        "fields": {
          "reservation_date": "asc"
        },
        "partial_filter_selector": {}
      },
      "reduce": "_count",
      "options": {
        "def": {
          "fields": [
            "reservation_date"
          ]
        }
      }
    }
```
