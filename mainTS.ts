const ChangName = (): void => {
    let name = document.querySelector<HTMLDivElement>('.name');
    let changename = (document.getElementById("name") as HTMLInputElement).value;
    if (name) {
        name.innerText = changename;
    }
};

const color = (): void => {
    let body = document.body;
    let fun = document.querySelectorAll<HTMLElement>('.fun');

    if (body.style.backgroundColor === 'lightblue') {
        body.style.backgroundColor = 'white';
        fun.forEach(element => {
            element.style.backgroundColor = 'white';
            element.style.boxShadow = '0px 0px 5px rgba(106, 220, 255, 0.5)';
        });
    } else {
        body.style.backgroundColor = 'lightblue';
        fun.forEach(element => {
            element.style.backgroundColor = 'white';
            element.style.boxShadow = '0px 0px 5px rgba(255, 255, 255, 0.5)';
        });
    }
};

let number = 0;
const blus = (): void => {
    let n = document.querySelector<HTMLDivElement>('.number');
    if (!n) {
        console.error("Element with class '.number' not found");
        return;
    }
    
    number++;
    n.innerText = number.toString();
};

const add = (): void => {
    let inputList = (document.getElementById('inputList') as HTMLInputElement).value;
    let li = document.createElement('li');
    let list = document.querySelector<HTMLUListElement>('.list');

    li.innerText = inputList;
    if (list) {
        list.append(li);
    }
};

const rmv = (): void => {
    let list = document.querySelector<HTMLUListElement>('.list');
    if (!list) {
        alert('List not found');
        return;
    }

    let liElements = list.querySelectorAll('li');
    if (liElements.length > 0) {
        let lastLi = liElements[liElements.length - 1];
        list.removeChild(lastLi);
    } else {
        alert('There are no names to remove');
    }
};

const calc = (x: string, y: string, op: number): number | string => {
    let numX = parseFloat(x);
    let numY = parseFloat(y);

    switch (op) {
        case 1:
            return numX + numY;
        case 2:
            return numX - numY;
        case 3:
            return numX * numY;
        case 4:
            return numY !== 0 ? numX / numY : "Cannot divide by zero";
        default:
            return "The operation is not correct";
    }
};

const opration = (): void => {
    let x = (document.getElementById("x") as HTMLInputElement).value;
    let y = (document.getElementById("y") as HTMLInputElement).value;
    let op = parseInt((document.getElementById("op") as HTMLInputElement).value, 10);

    const res = calc(x, y, op);
    let resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerText = res.toString();
    }
};