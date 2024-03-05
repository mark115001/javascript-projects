//TODO: Add Your Code Below
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    // this.alert("Hello World")
      response.json().then( function(json) {
        console.log(json)
        
        const container = document.getElementById("container");
        let newTag = document.createElement('div');
        newTag.className = "astronaut";
        newTag.innerHTML = "Hello World from innerHTML";
        container.appendChild(newTag);
        for (i=0; i<7; i++) {
        container.innerHTML += `<div class="bio"></div>`;
        container.innerHTML += `<h3> ${json[i].firstName} ${json[i].lastName}</h3>`
        container.innerHTML += `<ul>
        <li>Hours in Space: ${json[i].hoursInSpace}</li>
        <li>Active: ${json[i].active}</li>
        <li>Skills: ${json[i].skills}</li>
        </ul>`
        newTag = document.createElement('img')
        newTag.className = "avatar"
        container.appendChild(newTag)
        };
       });

    });
});