const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Arin", "age": 6}', 'utf8', (err) => {
    if (err) console.log(err);
});



fs.readFile('employees.json', 'utf8', (err, data) => {
  if (err) console.log(err);                         
  console.log(data);                                
})


fs.appendFile('employees.json', '\n {"name": "Baris", "age": 29}', 'utf8', (err) => {
    if (err) console.log(err);
});


fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
});