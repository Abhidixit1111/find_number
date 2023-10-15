function getNumber() {
    let array=[];
    let arrayList=document.querySelector('.arrayList');
    let msg=document.querySelector('.message');
    let a = Math.floor(Math.random() * 100)
    let n = document.querySelector('.inputBox');
    n.addEventListener('change', (e) => {
        if(array.length<7){
        let userValue = Number(e.target.value);
        array.push(userValue);
        arrayList.innerHTML=`<h1>${array}</h1>`
        if (userValue === a){
            msg.innerHTML=`<h2><b>YOU WIN</b>, attempt:${array.length}<b></h2>`;
            msg.style.color='rgb(95, 223, 16)';
        }
        else if (userValue > a)
            {msg.innerHTML=`<h2>VALUE IS <b>'GREATER'</b>, attempt:${array.length}</h2>`;
            msg.style.color='red';
        }
        else
            {msg.innerHTML=`<h2>VALUE IS <b>'SMALLER'</b>, attempt:${array.length}</h2>`;
            msg.style.color='yellow';
        }
        }
        else
        msg.innerHTML=`<h2>YOU LOSE</h2>`;
    })
};
getNumber();

