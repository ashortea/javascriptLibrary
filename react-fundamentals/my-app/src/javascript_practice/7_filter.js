const insturctors =[
    {name: 'Quincy', speciality: 'Quamtum Mechanics', medals:7},
    {name: 'Kenn', speciality: 'Math', medals:5},
    {name: 'Paul', speciality: 'singing', medals:8},
    {name: 'Aaron', speciality: 'reading', medals:4},
    {name: 'Carolyn', speciality: 'Kung Fu', medals:3}
];

let insturctor_names = [];

for (let i = 0; i < insturctors.length; i++){
    if(insturctors[i].medals>= 5){
        insturctor_names.push(insturctors[i].name);
    }
}

console.log(insturctor_names);

const insturctorNamesTwo = instructors.filter(i => i.medals >= 5);
console.log(insturctorNames);