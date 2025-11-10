var db = [
    { fullName: 'simo', group: 2 },
    { fullName: 'dahmad', group: 1 },
    { fullName: 'dahassan', group: 0 },
]
var student = {}

// create
function create() {
    var fullName = document.getElementById('fn').value
    var group = document.getElementById('group').value
    if (fullName != '' && group > 0 && group <= 2) {
        student = {
            fullName: document.getElementById('fn').value,
            group: document.getElementById('group').value
        }
        db[db.length] = student

    } else {
        alert('full name has not to be empty and the group <1 - 2>')
    }

  
        document.getElementById('fn').value = ''
        document.getElementById('group').value = ''
   
        Read()

}

// Read
function Read() {
    document.getElementById('tableData').innerHTML = ''

    for (var ka = 0; ka < db.length; ka = ka + 1)
        document.getElementById('tableData').innerHTML += `
    <tr>
    <td>${db[ka].fullName}</td>
    <td>${db[ka].group}</td>
    <td><button onclick = 'Update(${ka})'>update</button></td>
    <td><button>delete</button></td>   
    </tr>
    `
}

function Update(index){
    document.getElementById('fn').value = db[index].fullName;
    document.getElementById('group').value = db[index].group 
     document.getElementById('btn').innerHTML = 'UPDATE'
     document.getElementById('btn').onclick = function () {
         handelUpdate(index)
     }
}


function handelUpdate(i){
    db[i].fullName = document.getElementById('fn').value
    db[i].group = document.getElementById('group').value
    Read()
}