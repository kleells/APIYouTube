const apiKey = 'AIzaSyAnlUeip6LikHAXt30Dy8EGj-SUebwQVTM';
const searchButton = document.getElementById('searchButton');
const googleAPIUrl = "https://www.googleapis.com/youtube/v3/search"

searchButton.addEventListener('click', (e) => {
    // Build a YouTube API query (more info on Google API documentation)
    const searchTerm = document.getElementById('searchTerm').value;

    const apiPrefix = '&key=';
    const searchQuery = '?part=snippet&q=' + searchTerm + apiPrefix + apiKey;
    const url = googleAPIUrl + searchQuery;

    fetch(url);
});
