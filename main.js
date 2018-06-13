
'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const studentList = [
    {
        id : 1,
        name : "uma",
        age : 21
    },
    {
        id : 2,
        name : "suba",
        age : 20
    },
    {
        id : 3,
        name : "swetha",
        age : 17
    },
    {
        id : 4,
        name : "hema",
        age : 15
    }
]

app.get('/api/student', (req,resp) => {
    resp.json(studentList);
});

app.post('/api/student', (req,resp) => {
    const newStudent ={
   id:studentList.length+1,
   name:req.body.name,
   age:req.body.age
}
studentList.push(newStudent);
resp.json(newStudent.id);
console.log(studentList);
});

app.delete('/api/student/:id', (req, resp) => {
    console.log(req);
    const idToBeDeleted = parseInt(req.params.id);
    const studentToBeDeleted = studentList.findIndex(student => student.id === idToBeDeleted);
    studentList.splice(studentToBeDeleted, 1);
    resp.json(idToBeDeleted);
});

app.get('/api/student/:id', (req, resp) => {
    console.log(req);
    const idToBeFetched = parseInt(req.params.id);
    const studentToBeFetched = studentList.find(student => student.id === idToBeFetched);
    resp.json(studentToBeFetched);
});

app.patch("/api/student/:id",(req,resp) => {
    const idToBepatched=parseInt(req.params.id);
    const studentToBePatched = studentList.find(student => student.id === idToBepatched);
    student.name=req.body.name;
    student.age=req.body.age;
    studentList[studentToBePatched].name=student.name;
    studentList[studentToBePatched].age=student.age;
    resp.json(studentToBePatched);

});
    
app.listen(5000);