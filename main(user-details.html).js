<!--    ....................... oll information user.........................-->

console.log(location);

let personId = new URL(location.href).searchParams.get('id');
console.log(personId);
let baseURL = 'https://jsonplaceholder.typicode.com/users/' + personId;

function getCharacters(url) {

    fetch(url)
        .then(response => response.json())
        .then(data => {

            let user = data;
            // console.log(user);


            let frame = document.getElementsByClassName('frame')[0];

            let divBlock = document.createElement('div');
            divBlock.style.cssText = `width: 70%;
            border: 1px solid black;
            border-radius: 10px;
            padding: 5px; display: flex;
            justify-content: center;
            align-items: center; flex-direction: column;`;
            frame.appendChild(divBlock);

            recursBuilder(user, divBlock);

        })
}

getCharacters(baseURL);


function recursBuilder(objact, block) {
    for (const field in objact) {
        let value = objact[field];
        if (typeof value === "object") {
            divBuilder1(field, value, block);
        } else {
            divBuilder2(field, value, block);
        }
    }
}

function divBuilder1(key, value, block) {
    let p = document.createElement('p');
    p.style.cssText = `width: 70%;
            border: 1px solid black;
            border-radius: 10px;
            margin: 5px;
            padding: 5px;`;
    let span = document.createElement('span');
    span.innerHTML = `<b>${key}</b>`;
    block.appendChild(p);
    p.appendChild(span);

    recursBuilder(value, span);
}

function divBuilder2(key, value, block) {
    let p = document.createElement('p');
    p.style.cssText = `width: 70%;
            border: 1px solid black;
            border-radius: 10px;
            margin: 5px;
            padding: 5px;`;
    p.innerHTML = `<b>${key}:</b> ${value}`;
    block.appendChild(p);
}


//     ...................."post of current user"..........................

let postURL = `https://jsonplaceholder.typicode.com/users/${personId}/posts`;
// console.log(postURL);


function getPost(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let borderPost = document.createElement('div');
            borderPost.style.cssText = `width: 90%; margin: 5px;
                            display: flex; justify-content: center; align-items: center; flex-wrap: wrap;`;
            document.body.appendChild(borderPost);
            borderPost.innerHTML = '';

            for (const post of data) {
                // console.log(post);

                let divTitle = document.createElement('div');
                divTitle.style.cssText = `width: 15%; border: 1px solid black;
                             border-radius: 10px; margin: 5px; padding: 5px;
                             display: flex; justify-content: center;
                             align-items: center; flex-direction: column;`;
                borderPost.appendChild(divTitle);

                let span = document.createElement('span');
                span.style.cssText = `text-align: center; margin: 5px;`;
                span.innerText = `${post.id} - ${post.title}`;
                divTitle.appendChild(span);

                let buttonDet = document.createElement('button');
                buttonDet.innerText = `post-details`;
                divTitle.appendChild(buttonDet);

                buttonDet.addEventListener('click', () => {
                    location.href = 'post-details.html?id=' + post.id;
                });

            }

        })

}

let buttonBig = document.getElementById('button');

buttonBig.addEventListener( 'click', () => {

    getPost(postURL);

    buttonBig.disabled = true;

});