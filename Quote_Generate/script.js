const api_url = "https://dummyjson.com/quotes/1";
const quote=document.getElementById("quote");
const author=document.getElementById("author");
async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);

    quote.innerHTML = data[0].quote;
    author.innerHTML = data[0].author;
}

getQuote(api_url);