const form = document.querySelector('#memeInfo');
const urlInput = document.querySelector('input[name="url"]');
const topTextInput = document.querySelector('input[name="topText"]');
const bottomTextInput = document.querySelector('input[name="bottomText"]');
const resultSection = document.querySelector('#results');

function memeMaker(){
    let imageUrl = urlInput.value;
    const meme = document.createElement('div');
    meme.style.backgroundImage = `url(${imageUrl})`;
    return meme;
}

function topWriting(){
    const top = document.createElement('h2');
    top.setAttribute('class', 'topInput');
    top.innerText = topTextInput.value;
    return top;
}

function bottomWriting(){
    const bottom = document.createElement('h2');
    bottom.setAttribute('class', 'bottomInput');
    bottom.innerText = bottomTextInput.value;
    return bottom;
}

form.addEventListener('submit', function(e) {
	e.preventDefault();
    const newMeme = memeMaker();
    const newTop = topWriting();
    const newBottom = bottomWriting();

    newMeme.appendChild(newTop);
    newMeme.appendChild(newBottom);
    resultSection.appendChild(newMeme);
    
    urlInput.value = '';
    topTextInput.value = '';
    bottomTextInput.value = '';
});

resultSection.addEventListener('click', function(e){
    if(e.target.tagName === 'DIV'){
        e.target.remove()
    } else if(e.target.tagName === 'H2'){
        e.target.parentElement.remove();
    }
});
