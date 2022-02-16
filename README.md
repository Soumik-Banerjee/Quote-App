# ![Logo](./favicon.ico) Quoet App

This is a JavaScript quote application created by using vanilla javascript. I used Fetch Api get tha data from api, after that convert it into JSON and print that on the web page.

### Api link
```
https://type.fit/api/quotes
```

### Working

``` javascript
fetch(api_url).then((response) => {
    return response.json();
    }).then((data) => {
    let index = Math.round(data.length * Math.random());
    quoteMain.innerText = data[index]['text'];
    if (data[index]['author'] == null) {
        quoteAuthor.innerText = "Author";
    } else {
        quoteAuthor.innerText = data[index]['author'];
    }
})
```