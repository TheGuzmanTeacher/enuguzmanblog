document.getElementById('searchBar').addEventListener('keyup', function() {
    let searchTerm = this.value.toLowerCase();
    let videos = document.querySelectorAll('.video');

    videos.forEach(function(video) {
        let title = video.querySelector('h2').textContent.toLowerCase();
        let description = video.querySelector('p').textContent.toLowerCase();
        let category = video.getAttribute('data-category').toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
            video.style.display = '';
        } else {
            video.style.display = 'none';
        }
    });
});

document.getElementById('searchBar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let videos = document.querySelectorAll('.video');

    videos.forEach(function(video) {
        let title = video.querySelector('h3').innerText.toLowerCase();
        if (title.includes(filter)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
});

