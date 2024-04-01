
const URL = 'https://jsonplaceholder.typicode.com/users';

function getCharacters(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            drawUsIdNameButton(json);

        })
}
getCharacters(URL);


function drawUsIdNameButton(persons) {

    let frame = document.createElement('div');
    frame.style.cssText = `width: 80%;
            border: 1px solid black;
            border-radius: 5px; display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap; gap: 5px;
            padding: 5px;`;
    document.body.appendChild(frame);



    for (const person of persons) {

        // console.log(person.name);

        let card = document.createElement('div');
        card.style.cssText = `width: 45%;
            height: 100px; border: 1px solid black;
            border-radius: 5px; display: flex;
            justify-content: center;
            align-items: center;`;
        frame.appendChild(card);

        let divInfo = document.createElement('div');
        divInfo.style.cssText = `text-align: center;`;

        let h2 = document.createElement('h2');
        h2.style.cssText = `margin: 0;`;
        h2.innerText = `${person.id}`;

        let h3 = document.createElement('h3');
        h3.style.cssText = `margin: 0;`;
        h3.innerText = `${person.name}`;

        card.appendChild(divInfo);
        divInfo.append(h2, h3);

        let buttonOllInfo = document.createElement('button');
        buttonOllInfo.innerText = `About Person`;
        buttonOllInfo.style.cssText = `margin: 10px;`

        buttonOllInfo.addEventListener('click', () => {
            location.href = 'user-details.html?id=' + person.id;
        });

        divInfo.appendChild(buttonOllInfo);

    }

}