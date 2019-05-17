
function findEntry(phonebook){
var ent = prompt("Enter entry");
var entryFound = false;
for(var i =0; i<= phonebook.length;i++){
if(ent == phonebook[i]){
    entryFound = true;
}

return entryFound;
}



}