var db = []


//READ
function showStudents(){
  
    document.getElementById('tableData').innerHTML = ''
    for(var index = 0; index < db.length ; index++){
        
        document.getElementById('tableData').innerHTML += `   
        <tr> 
        <td>${db[index].fullName}</td>
        <td>${db[index].group}</td>
        <td><button>update</button></td>
        <td><button>delete</button></td>
        </tr>
        `
    };
}


//CREAT
function createStudent(){

    var student = {
        fullName:document.getElementById('fn').value ,group:document.getElementById('group').value
    };
    
    db[db.length] = student;
    
    showStudents();
}

console.log(db);