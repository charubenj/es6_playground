 export default function addToDom(tagName, text){
    const newTag = document.createElement(tagName);

    newTag.innerText = text;

    document.getElementById('root').appendChild(newTag);
 }






// if u r storing into variable can export