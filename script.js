document.getElementById('jsonButton').addEventListener('click', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const jsonDataDiv = document.getElementById('jsonData');
            jsonDataDiv.innerHTML = `<h3>${data.title}</h3>
                                     <p>${data.description}</p>
                                     <ul>${data.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
        })
        .catch(error => console.error('Error loading the JSON data:', error));
});
