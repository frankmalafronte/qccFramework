app.get('/api/students', (req, res)=>{
    const students=[
        {id: 1, firstName:'Invoker', lastName='kun'},
        {id: 1, firstName:'Life', lastName='Stealer'},
        {id: 1, firstName:'Shadow', lastName='Fiend'}
];
res.json(students);
});