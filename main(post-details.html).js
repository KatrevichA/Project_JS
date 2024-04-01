
<!--.......................Post details .....................-->

console.log(location);

let postId = new URL(location.href).searchParams.get('id');
console.log(postId);

let postURL = `https://jsonplaceholder.typicode.com/posts/${postId}`;


function getParams(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            drawParams(data);
        })
}

getParams(postURL);

function drawParams(object) {

    let frame = document.getElementsByClassName('frame')[0];

    for (const elementObj in object) {
        // console.log(elementObj);
        // console.log(object[elementObj]);

        let divPost = document.createElement('div');
        divPost.style.cssText = `width: 50%;
            border: 1px solid black;
            border-radius: 5px; padding: 5px;`;
        frame.appendChild(divPost);

        let span = document.createElement('span');
        divPost.appendChild(span);
        span.innerHTML = `<b>${elementObj} - </b> ${object [elementObj]}`;
    }

}


//     .................................comments...................................

let commentsURL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
console.log(commentsURL);


function getComments(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            drawComment(data);

        })

}
getComments(commentsURL);



function drawComment(arr) {

    let frameComments = document.getElementsByClassName('frameComments')[0];

    for (const elementArr of arr) {
        // console.log(elementArr);

        let divCom = document.createElement('div');
        divCom.style.cssText = `width: 20%;
                border: 1px solid black;
                border-radius: 5px; padding: 10px;
                margin: 10px;`;
        frameComments.appendChild(divCom);

        for (const elementArrKey in elementArr) {
            // console.log(elementArrKey);

            let divSpan = document.createElement('div');
            divSpan.style.cssText = `border: 1px solid black;
                border-radius: 5px; padding: 5px; margin: 2px;`;
            divCom.appendChild(divSpan);


            let span = document.createElement('span');
            divSpan.appendChild(span);
            span.innerHTML = `<b>${elementArrKey} - </b> ${elementArr [elementArrKey]}`;

        }

    }

}