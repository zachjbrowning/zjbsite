
const fs = require('fs')

exports.save = function(con) {
    var data = require('./contacts.json');
    var now = new Date();
    data[now] = con;
    fs.writeFile('contacts.json', JSON.stringify(data), (err) => {if (err) console.log(err); console.log('saved!!')});
}



