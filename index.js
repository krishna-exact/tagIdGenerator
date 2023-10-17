
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "metrics": [
    {
      "tags": {},
      "name": "metric:HIHKDTDIGITWIN01:cpu",
      "aggregators": [
        {
          "name": "sum",
          "sampling": {
            "value": "1",
            "unit": "milliseconds"
          }
        }
      ]
    }
  ],
  "plugins": [],
  "cache_time": 0,
  "start_relative": {
    "value": "60",
    "unit": "minutes"
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://data.exactspace.co/exactdata/api/v1/datapoints/query", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));