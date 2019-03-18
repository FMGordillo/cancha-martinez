# Cancha Martinez

## PLEASE NOTE

These are some considerations to be done for some parts of the code:

### IBM Cloudant

Index document must be provided in order to sort matches by **`reservation_date`**. Below is the example doc to create:

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

### Mailing

Currently using [SendGrid](https://www.sendgrid.com/) and [IBM Cloud Functions](https://cloud.ibm.com/openwhisk/) in conjunction with [API Management](https://cloud.ibm.com/openwhisk/apimanagement).

Why? Because:

1. It normalizes requests to the SendGrid API
2. It makes a `sequence` (after the mail is sent, it registers in another DB all the mails that SendGrid sends, in case that something fails)
3. It's... more secure? I think?
