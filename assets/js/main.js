let table = document.querySelector("table");
let name = document.querySelector(".name");
let surname = document.querySelector(".surname");
let btn = document.querySelector("button");

table.onclick = function(event){
    let target = event.target;
    if(target.tagName != 'TD') return;
    if(target.tagName == 'TD') {
        target.innerText = prompt("Изменить",target.innerText);
    }
}

btn.onclick = function() {
    let tr = document.createElement("tr");
    if(name.value != "" && surname.value != "") {
        tr.innerHTML = `<td>${name.value}</td><td>${surname.value}</td>`;
        table.appendChild(tr);
    }
}