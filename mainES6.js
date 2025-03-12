const ChangName = () => {
    let name = document.querySelector('.name');
    let changename = document.getElementById("name").value
    name.innerText= changename;
}


const color = () => {
    let body = document.body;
    let fun = document.querySelectorAll('.fun');
    
    if (body.style.backgroundColor === 'lightblue') {
        body.style.backgroundColor = 'white';
        fun.style.backgroundColor = 'white';
        fun.style.boxShadow = '0px 0px 5px rgba(106, 220, 255, 0.5)';
    } else {
        body.style.backgroundColor = 'lightblue';
        fun.style.backgroundColor = 'white';
        fun.style.boxShadow = '0px 0px 5px rgba(255, 255, 255, 0.5)';
    }
}

let number = 0;
const blus = () => {
    let n = document.querySelector('.number');
    number++;
    n.innerText= number;
}

const add = () => {
    let inputList = document.getElementById('inputList').value;
    let li = document.createElement('li');
    let list = document.querySelector('.list');

    li.innerText= inputList;
    list.append(li);
}

const rmv = () => {
    let list = document.querySelector('.list');
    let liElements = list.querySelectorAll('li');
    if (liElements.length > 0) {
        let lastLi = liElements[liElements.length - 1];
        list.removeChild(lastLi);
    } else {
        alert('There are no names to remove');
    }
}

 
const calc = (x, y, op) => {
 
    x = parseFloat(x);
    y = parseFloat(y);
    op = parseInt(op, 10);

    switch(op){
        case 1:
            return x + y;

        case 2:
            return x - y;

        case 3:
            return x * y;

        case 4:
            return x / y;

        default:
                return "the opration is not correct";
    }
}

const opration = () => {

    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    op = document.getElementById("op").value;

    const res = calc(x, y, op);
    document.getElementById("result").innerText = res;
}