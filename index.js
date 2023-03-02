const apiKey = 'AIzaSyAnlUeip6LikHAXt30Dy8EGj-SUebwQVTM';
const searchButton = document.getElementById('searchButton');
const googleAPIUrl = "https://www.googleapis.com/youtube/v3/search"

searchButton.addEventListener('click', (e) => {
    // Build a YouTube API query (more info on Google API documentation)
    const searchTerm = document.getElementById('searchTerm').value;

    const apiPrefix = '&key=';
    const searchQuery = '?part=snippet&q=' + searchTerm + apiPrefix + apiKey;
    const url = googleAPIUrl + searchQuery;

    // fetch search results
    fetch(url)
        .then(response => response.json())
        .then((results) => {

            // show items of search result as link
            results.items.forEach(item => {
                if (item.id.videoId != undefined) {
                    const link = `https://www.youtube.com/watch?v=${item.id.videoId}`;
                    console.log(link);
                }
            })
        })
});
