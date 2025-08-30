
const student =[
    {id:1, name : 'abul', mark : 90},
    {id:2, name : 'ali', mark : 80},
    {id:3, name : 'talha', mark : 50},
    {id:4, name : 'malu', mark : 85},


]


const names = student.map(student=> student.mark*0.85);
const goodStudents = student.filter(student => student.mark>80)
const goodStudent = student.find(student => student.mark>80)

console.log(names);
console.log(goodStudents);
console.log(goodStudent);