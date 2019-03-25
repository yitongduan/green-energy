//create resources
const resources = [
    {
        heading: "Solution 1", 
        path: "https://images.pexels.com/photos/1076807/pexels-photo-1076807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper feugiat velit in ultrices. Etiam molestie sodales diam, sed scelerisque tellus venenatis at. Etiam in nulla in turpis dictum tristique et eu urna. Quisque non faucibus sem. Suspendisse ut nisl vel purus cursus molestie at ut ligula. Mauris eu nisi tempor, fringilla ex ut, malesuada est. Phasellus et urna tincidunt, vehicula dolor ut, maximus leo. Ut faucibus elit erat, in tempus nibh scelerisque quis. Praesent venenatis, libero sit amet rhoncus condimentum, nisi sem ullamcorper felis, eget aliquet dui mi quis sem."
    },
    {
        heading: "Solution 2",
        path: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper feugiat velit in ultrices. Etiam molestie sodales diam, sed scelerisque tellus venenatis at. Etiam in nulla in turpis dictum tristique et eu urna. Quisque non faucibus sem. Suspendisse ut nisl vel purus cursus molestie at ut ligula. Mauris eu nisi tempor, fringilla ex ut, malesuada est. Phasellus et urna tincidunt, vehicula dolor ut, maximus leo. Ut faucibus elit erat, in tempus nibh scelerisque quis. Praesent venenatis, libero sit amet rhoncus condimentum, nisi sem ullamcorper felis, eget aliquet dui mi quis sem."
    },
    {
        heading: "Solution 3",
        path: "https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper feugiat velit in ultrices. Etiam molestie sodales diam, sed scelerisque tellus venenatis at. Etiam in nulla in turpis dictum tristique et eu urna. Quisque non faucibus sem. Suspendisse ut nisl vel purus cursus molestie at ut ligula. Mauris eu nisi tempor, fringilla ex ut, malesuada est. Ut faucibus elit erat, in tempus nibh scelerisque quis. Praesent venenatis, libero sit amet rhoncus condimentum, nisi sem ullamcorper felis, eget aliquet dui mi quis sem."
    }
];

/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");

/*CREATING EVENT-HANDLER*/
function contentLoader(ev) {
    /*console.log("content loader works");*/
    let eventTarget = ev.target.className;
   
    //console.log(eventTarget.textContent);

    if (eventTarget === "fas fa-cog" || eventTarget === "one") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].path}">
                                    <p>${resources[0].body}</p>
                                    </article>` ;
    } else if (eventTarget === "fas fa-hammer" || eventTarget === "two") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[1].heading}</h2>
                                    <img src="${resources[1].path}">
                                    <p>${resources[1].body}</p>
                                    </article>` ;
    } else {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[2].heading}</h2>
                                    <img src="${resources[2].path}">
                                    <p>${resources[2].body}</p>
                                    </article>` ;
    }

    /*move id to the current button*/
    //ev.target.id = "active";
    for (let btn of btns) {
        if (btn.id) {
            btn.removeAttribute("id");
            
            }
    }
    ev.currentTarget.id = "active";
}

/* REGISTERING EVENT CONTENT */
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);