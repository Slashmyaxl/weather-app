export default function getImg(condition, img) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=70APDjt9U3cZXN3rTTNxFR9XiWgnSyLh&s=${condition}`, { mode: 'cors' })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(img);
        img.src = response.data.images.original.url;
    });
}