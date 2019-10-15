const insturctors =[
    {name: 'Quincy', speciality: 'Quamtum Mechanics'},
    {name: 'Kenn', speciality: 'Math'},
    {name: 'Paul', speciality: 'singing'},
    {name: 'Aaron', speciality: 'reading'},
    {name: 'Carolyn', speciality: 'Kung Fu'}
]

let insturctors_names =[];
for(let i = 0; i < insturctors.length; i++){
    insturctors_names.push(insturctors[i].name);
}
console.log(insturctors_names);

const insturctorsNames = insturctors.map(insturctor => insturctor.name);
console.log(insturctorsNames);

var kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];

console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
var rObj = {};
rObj[obj.key] = obj.value
console.log(rObj);
return rObj;
});
