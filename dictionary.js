var inputWord = document.querySelector('#inputWord')
var btnAction = document.querySelector('#btnAction')
var result = document.querySelector('.container .result-container')

btnAction.addEventListener('click', async () =>{ 
        if(inputWord.value === ''){
        alert('something missing..!!')
        return;
}
    result.innerHTML = ''
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord.value}`)
    const resData = await res.json()
    console.log(resData)
    let resObj = resData[0]


    let generalInfoDiv = document.createElement('div')
    generalInfoDiv.classList.add('general-info')
    let fieldDiv = document.createElement('div')
    fieldDiv.classList.add('field')
    let label1 =document.createElement('label')
    label1.textContent ='Phonetic :'
    let p1 = document.createElement('p')
    p1.textContent = resObj.phonetic
    let playButton = document.createElement('button')
    playAudio.textContent='Play'
    let audioSrc=''
    for(let i=0;i<resObj.phonetics.length;i++){
        if(resObj.phonetics[i].audio !==''){
            audioSrc = resObj.phonetics[i].audio
            break;
        }
    }
    playButton.addEventListener('click',()=>{playAudio(audioSrc)})

    fieldDiv.appendChild(label1)
    fieldDiv.appendChild(p1)

    generalInfoDiv.appendChild(fieldDiv)
    generalInfoDiv.appendChild(playButton)

    result.appendChild(generalInfoDiv)

    let meanings = resObj.meanings
    console.log(meanings)

    
    meanings.map((obj, index) => {
        let exampleDiv = document.createElement('div')
        exampleDiv.classList.add('example')
        let h3Ele = document.createElement('h3')
        h3Ele.textContent=obj.partOfSpeech
        let fieldDiv1 = document.createElement('div')
        fieldDiv1.classList.add('field')
        let label2 = document.createElement('label')
        label2.textContent='Defination :'
        let p2 = document.createElement('p')
        p2.textContent = obj.definitions[0].definition; 
        fieldDiv1.appendChild(label2)
        fieldDiv1.appendChild(p2)

        exampleDiv.appendChild(h3Ele); 
        exampleDiv.appendChild(fieldDiv1)

        result.appendChild(exampleDiv)
    })
})

function playAudio(audioSrc){
    let audio = new Audio(audioSrc)
    audio.play()
}