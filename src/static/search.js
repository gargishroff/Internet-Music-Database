const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const audioElement=document.getElementById('play_music');

// const filterDropdown = document.getElementById('filter');
const durationFilter = document.getElementById('duration-filter');
const explicitnessFilter = document.getElementById('explicitness-filter');
const maxDurationInput = document.getElementById('max-duration');
const explicitnessSelect = document.getElementById('explicitness');
const durationSubmitButton = document.getElementById('duration-submit');
const explicitnessSubmitButton = document.getElementById('explicitness-submit');


function renderResults(results) {
    searchResults.innerHTML = '';
    
    results.forEach(result => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const a = document.createElement('a');
      const artist = document.createElement('p');
      const album = document.createElement('p');
      const audioPreview = document.createElement('audio');
      const audioSource = document.createElement('source');
      const dur=document.createElement('p');
      const exp=document.createElement('p');
      
      img.src = result.artworkUrl100;
      a.href = result.trackViewUrl;
      a.textContent = result.trackName;
      artist.textContent = result.artistName;
      album.textContent = result.collectionName;
      audioPreview.controls = true;
      audioSource.src = result.previewUrl;
      audioSource.type = 'audio/mpeg';
      dur.textContent=result.trackTimeMillis;
      dur.value=parseInt(dur.textContent);
      dur.textContent = ((dur.value)/60000).toFixed(2);
      exp.textContent=result.trackExplicitness;
      audioPreview.appendChild(audioSource);
      
      li.appendChild(img);
      li.appendChild(a);
      li.appendChild(artist);
      li.appendChild(album);
      li.appendChild(audioPreview);
      li.appendChild(dur);
      li.appendChild(exp);
      searchResults.appendChild(li);
    });
  }

// filterDropdown.addEventListener('change', () => {
//     const selectedFilter = filterDropdown.value;
    
//     if (selectedFilter === 'duration') {
      durationFilter.style.display = 'block';
      // explicitnessFilter.style.display = 'none';
    // } else if (selectedFilter === 'explicitness') {
      // durationFilter.style.display = 'none';
      explicitnessFilter.style.display = 'block';
    // } else {
      // durationFilter.style.display = 'none';
      // explicitnessFilter.style.display = 'none';
  //   }
    
  //   renderResults(searchResults.data.results, selectedFilter);
  // });




searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const query = searchInput.value;
    const url = `https://itunes.apple.com/search?term=${query}&media=music&limit=10`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results.length == 0) {
          searchResults.innerHTML = "No results found :(";
        } else {
          searchResults.data = data;
          renderResults(data.results);
        }
      })
      .catch(error => console.error(error));
      searchResults.style.display = 'block';
    body.style.backgroundImage = 'none';
  }); 

document.getElementById('explicitness-filter').addEventListener('submit', (event) => {
    event.preventDefault();
    
    // const selectedFilter = filterDropdown.value;
    const query = searchInput.value;
    const url = `https://itunes.apple.com/search?term=${query}&media=music&limit=10`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        
          const maxDurationInput = document.getElementById('max-duration');
          const maxDuration = (maxDurationInput.value)*60000;

          const explicitnessSelect = document.getElementById('explicitness');
          const ex=explicitnessSelect.value;

          if(maxDurationInput.value.length !== 0 && ex===""){


          const filteredResults = data.results.filter(result => result.trackTimeMillis <= maxDuration);
      
          if (filteredResults.length === 0) {
            searchResults.innerHTML = "No results found";
          } else {
            searchResults.innerHTML = '';
      
            filteredResults.forEach(result => {
              const li = document.createElement('li');
              const img = document.createElement('img');
              const a = document.createElement('a');
              const artist = document.createElement('p');
              const album = document.createElement('p');
              const audioPreview = document.createElement('audio');
              const audioSource = document.createElement('source');
              const dur=document.createElement('p');
              const exp=document.createElement('p');
      
              img.src = result.artworkUrl100;
              a.href = result.trackViewUrl;
              a.textContent = result.trackName;
              artist.textContent = result.artistName;
              album.textContent = result.collectionName;
              audioPreview.controls = true;
              audioSource.src = result.previewUrl;
              audioSource.type = 'audio/mpeg';
              dur.textContent=result.trackTimeMillis;
              dur.value=parseInt(dur.textContent);
               dur.textContent = ((dur.value)/60000).toFixed(2);
              exp.textContent=result.trackExplicitness;
              audioPreview.appendChild(audioSource);
      
              li.appendChild(img);
              li.appendChild(a);
              li.appendChild(artist);
              li.appendChild(album);
              li.appendChild(audioPreview);
              li.appendChild(dur);
              li.appendChild(exp);
              searchResults.appendChild(li);
            });
          }
        }

        else if(maxDurationInput.value.length === 0 && ex!=="")
        {
          const filteredResults = data.results.filter(result => result.trackExplicitness === ex);
      
          if (filteredResults.length === 0) {
            searchResults.innerHTML = "No results found";
          } else {
            searchResults.innerHTML = '';
      
            filteredResults.forEach(result => {
              const li = document.createElement('li');
              const img = document.createElement('img');
              const a = document.createElement('a');
              const artist = document.createElement('p');
              const album = document.createElement('p');
              const audioPreview = document.createElement('audio');
              const audioSource = document.createElement('source');
              const dur=document.createElement('p');
              const exp=document.createElement('p');
      
              img.src = result.artworkUrl100;
              a.href = result.trackViewUrl;
              a.textContent = result.trackName;
              artist.textContent = result.artistName;
              album.textContent = result.collectionName;
              audioPreview.controls = true;
              audioSource.src = result.previewUrl;
              audioSource.type = 'audio/mpeg';
              dur.textContent=result.trackTimeMillis;
              dur.value=parseInt(dur.textContent);
              dur.textContent = ((dur.value)/60000).toFixed(2);
    exp.textContent=result.trackExplicitness;
              audioPreview.appendChild(audioSource);
      
              li.appendChild(img);
              li.appendChild(a);
              li.appendChild(artist);
              li.appendChild(album);
              li.appendChild(audioPreview);
              li.appendChild(dur);
              li.appendChild(exp);
              searchResults.appendChild(li);
            });
      
        }
      }
      else if (maxDurationInput.value.length !== 0 && ex!=="")
      {
        const filteredResults = data.results.filter(result => result.trackTimeMillis <= maxDuration && result.trackExplicitness === ex);
        if (filteredResults.length === 0) {
          searchResults.innerHTML = "No results found";
        } else {
          searchResults.innerHTML = '';
    
          filteredResults.forEach(result => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const a = document.createElement('a');
            const artist = document.createElement('p');
            const album = document.createElement('p');
            const audioPreview = document.createElement('audio');
            const audioSource = document.createElement('source');
            const dur=document.createElement('p');
            const exp=document.createElement('p');
    
            img.src = result.artworkUrl100;
            a.href = result.trackViewUrl;
            a.textContent = result.trackName;
            artist.textContent = result.artistName;
            album.textContent = result.collectionName;
            audioPreview.controls = true;
            audioSource.src = result.previewUrl;
            audioSource.type = 'audio/mpeg';
            dur.textContent=result.trackTimeMillis;
            dur.value=parseInt(dur.textContent);
            dur.textContent = ((dur.value)/60000).toFixed(2);
            exp.textContent=result.trackExplicitness;
            audioPreview.appendChild(audioSource);
    
            li.appendChild(img);
            li.appendChild(a);
            li.appendChild(artist);
            li.appendChild(album);
            li.appendChild(audioPreview);
            li.appendChild(dur);
            li.appendChild(exp);
            searchResults.appendChild(li);
          });
    
      }

      }
      else if(maxDurationInput.value.length === 0 && ex==="")
      {
        if (data.results.length == 0) {
          searchResults.innerHTML = "No results found :(";
        } else {
          searchResults.data = data;
          renderResults(data.results);
        }
      }
    })
           
    
      

      .catch(error => console.error(error));
      searchResults.style.display = 'block';
        body.style.backgroundImage='none';
  });

  const clearFiltersButton = document.getElementById("clear");

  clearFiltersButton.addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default behavior of the button (submitting a form)
    document.getElementById("max-duration").value = ""; // reset the value of the duration filter
    document.getElementById("explicitness").value = ""; // reset the value of the explicitness filter

    const query = searchInput.value;
    const url = `https://itunes.apple.com/search?term=${query}&media=music&limit=10`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results.length == 0) {
          searchResults.innerHTML = "No results found :(";
        } else {
          searchResults.data = data;
          renderResults(data.results);
        }
      })
      .catch(error => console.error(error));
      searchResults.style.display = 'block';
    body.style.backgroundImage = 'none';

    
  });