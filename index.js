const apiKey = 'AIzaSyAnlUeip6LikHAXt30Dy8EGj-SUebwQVTM';
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');
const googleAPIUrl = "https://www.googleapis.com/youtube/v3/search";

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

            // show items of search result as valid links
            results.items.forEach(item => {
                if (item.id.videoId != undefined) {
                    const link = `https://www.youtube.com/watch?v=${item.id.videoId}`;
                    console.log(link);
                    // change above to console.log(item) to see available child items of the search results 
                    
                    // found results will get updated in HTML div
                    // creates a break in HTML doc
                    resultsDiv.innerHTML += "<br />"
                    // add a description itemm, snippet, description, title, thumbnails are all items in the API search result file)
                    // .high.url grabs the high quality thumbnail (not the low or medium)
                    resultsDiv.innerHTML += `<img src="${item.snippet.thumbnails.high.url}" />`;
                    resultsDiv.innerHTML += "<br />"
                    resultsDiv.innerHTML += `<a href="${link}">${item.snippet.title}</a>`;
                    resultsDiv.innerHTML += `<p>${item.snippet.description}</p>`;
                }
            })
        })
});
