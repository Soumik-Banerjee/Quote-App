console.log('Starting here');

// Getting Dom elements -->
let quoteMain = document.getElementById('quoet__main');
let quoteAuthor = document.getElementById('quoet__author');
let quoteBtn = document.getElementById('quoet__btn');
let loader = document.getElementById('loader');

// Api repated stuffs -->
let api_url = 'https://type.fit/api/quotes';

quoteBtn.addEventListener('click', getData)

// Initialise main function -->
function getData() {
    showLoader()
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
        hideLoader()
    })
}

// Loader show/hide option -->
function showLoader() {
    loader.style.display = 'grid';
}
function hideLoader() {
    loader.style.display = 'none';
}