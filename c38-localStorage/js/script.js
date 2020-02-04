var inc = localStorage.length;

document.getElementById("save").addEventListener('click', save);
document.getElementById("deleteAll").addEventListener('click', deleteAll);

function save() {
    var name = document.getElementById('nameForm').value;
    var tlf = document.getElementById("tlf").value;

    if(name != '' && tlf != '') {
        var user = {
            name: name,
            tlf: tlf
        };

        //Comprueba que no exista ya ese usuario debido al incremento
        for (let key in localStorage){
            if('user'+inc === key) {
                inc++;
            }
        }
        
        localStorage.setItem('user'+inc, JSON.stringify(user));
        oneUser(name, tlf);
        inc++;         
        document.getElementById('nameForm').value = '';     
        document.getElementById("tlf").value = '';                         
    } else {
        alert("Completa los campos.");
    }
}

function deleteAll() {
    localStorage.clear();
    document.getElementById('users').innerHTML = '';
}


function printUsers() {
    for ( var i = 0; i < localStorage.length; i++ ) {
        let data = localStorage.getItem(localStorage.key(i));
        if(JSON.parse(data != null)){
            let name = JSON.parse(data).name;
            let tlf = JSON.parse(data).tlf;
            oneUser(name, tlf);
        }
    }
}        

function oneUser(name, tlf) {
    document.getElementById('users').innerHTML +=   `<div class="col-12 card p-2">
                                                        <div class="row">
                                                            <span class="col-6 pl-4 font-weight-bold">${name}</span> 
                                                            <span class="col-5 badge badge-primary">${tlf}</span> 
                                                        </div>
                                                    </div>`;
}

printUsers();