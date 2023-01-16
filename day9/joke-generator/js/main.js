//🤟 grab the items
const jokes = document.getElementById("jokes");
const button = document.getElementById("button");

const URL = 'https://humor-jokes-and-memes.p.rapidapi.com/jokes/random?max-length=200&include-tags=one_liner&min-rating=7&exclude-tags=nsfw&keywords=rocket'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '099fc46614mshaf967185f75457ap1f8b46jsn1234f156d92b',
        'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
    }
};
const getJoke = () => {
    fetch(URL, options)
        .then((response) => response.json())
        .then((data) =>
            //console.log(data)
            jokes.textContent = `${data.joke}`
        )
}
button.addEventListener("click", getJoke);
getJoke();