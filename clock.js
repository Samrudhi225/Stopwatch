var timer = document.querySelector('#timer')
var laps = document.querySelector('#laps')
var start = document.querySelector('#start')
var list = document.querySelector('#list')


var mins=0, seconds=0, miliseconds=0, lapCount=1
var watchTimer = null
start.addEventListener('click',()=>{
    if(start.textContent === 'Start'){
        start.textContent='Stop'
        watchTimer=setInterval(()=>{
            miliseconds+=1
            if(miliseconds>100){
                miliseconds = 0
                seconds+=1
                if(seconds>59){
                    seconds = 0
                    mins+=1
                }
            }
            let mm=miliseconds < 10 ? `0${miliseconds}` : miliseconds
            let mn=mins < 10 ? `0${mins}` : mins
            let ss=seconds < 10 ? `0${seconds}` : seconds
            
            timer.textContent=`${mn} : ${ss} : ${mm}`
        },10)
    }
    else if(start.textContent === 'Stop'){
        clearInterval(watchTimer)
        laps.textContent = 'Restart'
    }
})
laps.addEventListener('click',()=>{
    if(laps.textContent==='Laps'){
        let p1Ele=document.createElement('p')
        p1Ele.textContent=`Laps-${lapCount}`
        lapCount+=1
        let p2Ele=document.createElement('p')
        p2Ele.textContent=timer.textContent
        let liEle=document.createElement('li')
        liEle.append(p1Ele)
        liEle.append(p2Ele)
        list.append(liEle)
    } else if(laps.textContent==='Restart'){
        list.textContent=''
        miliseconds=0
        seconds=0
        mins=0
        let mm = miliseconds < 10 ? `0${miliseconds}` : miliseconds
        let ss=  seconds < 10 ? `0${seconds}` : seconds
        let mn = mins < 10 ?  `0${mins}` : mins
        timer.textContent =`${mn} : ${mm} : ${ss}`
        start.textContent ='Start'
        laps.textContent ='Laps'
    }
})