//firstone search box!!!
let searchQuery = document.getElementById("search-input1");
let searchBtn = document.getElementById("search-btn1");
let outerDiv = document.createElement("div");
outerDiv.classList.add("outer-div")
searchBtn.addEventListener("click", (onclc) => {
    onclc.preventDefault();

    outerDiv.innerHTML = '';
    let url = searchQuery.value;
    let api = `https://api.github.com/users/${url}/repos`;
    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            let heading = document.createElement("h2");
            heading.innerText = "Repositories"

            let noOfRepos = document.createElement("p")
            noOfRepos.innerText = data.length

            let some = document.createElement("h2");
            some.innerText = heading.innerText + " " + noOfRepos.innerText;
            some.style.textAlign = "center"

            let img = document.createElement("img");
            img.src = data[0].owner.avatar_url;

            let userName = document.createElement("h2");
            userName.innerText = data[0].owner.login;

            document.body.appendChild(some);
            document.body.appendChild(img);
            document.body.appendChild(userName);

            data.forEach(element => {
                let innerDiv = document.createElement("div");
                innerDiv.classList.add("inner-div");

                let title = document.createElement("h3");
                title.innerText = element.name;

                let languag = document.createElement("p");
                languag.innerText = element.language;

                let hrLine = document.createElement("hr");
                hrLine.style.width = "inherit"


                innerDiv.appendChild(title);
                innerDiv.appendChild(languag);
                innerDiv.appendChild(hrLine);
                outerDiv.appendChild(innerDiv);
                document.body.appendChild(outerDiv);
            });
        })
        .catch((error) => {
            console.log(error);
        })
})


//Second one!!!

let searchQuery2 = document.getElementById("search-input2");
let searchBtn2 = document.getElementById("search-btn2");
let outerDiv2 = document.createElement("div");
outerDiv2.classList.add("outer-div")
searchBtn2.addEventListener("click", (onclc2) => {
    onclc2.preventDefault();
    outerDiv.innerHTML = '';
    outerDiv2.innerHTML = '';
    let url2 = searchQuery2.value;
    let api2 = `https://api.github.com/search/repositories?q=${url2}`;
    fetch(api2)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let heading = document.createElement("h2");
            heading.innerText = "repository results"

            let noOfRepos = document.createElement("p")
            noOfRepos.innerText = data.total_count;

            let some = document.createElement("h2");
            some.innerText = noOfRepos.innerText + " " + heading.innerText;
            some.style.textAlign = "center"
            document.body.appendChild(some);

            let values = data.items;
            values.forEach(element => {
                let innerDiv = document.createElement("div");
                innerDiv.classList.add("inner-div");

                // let name = document.createElement("h3");
                // name.innerText = element.full_name;

                let title = document.createElement("A");
                let titleHeading = document.createTextNode(element.full_name);
                title.setAttribute("href", element.html_url);
                title.setAttribute("target", "_blank");
                title.appendChild(titleHeading);
                //document.body.appendChild(title);

                let desc = document.createElement("p");
                desc.innerText = element.description;

                let lang = document.createElement("p");
                lang.innerText = element.language;

                let hrLine = document.createElement("hr");
                hrLine.style.width = "inherit"

                // innerDiv.appendChild(name);
                //innerDiv.appendChild(titleHeading);
                innerDiv.appendChild(title);
                innerDiv.appendChild(desc);
                innerDiv.appendChild(lang);
                innerDiv.appendChild(hrLine);
                outerDiv2.appendChild(innerDiv);
                document.body.appendChild(outerDiv2);

            });
        })
        .catch((error) => {
            console.log(error);
        })
})