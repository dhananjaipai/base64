var base64 = require('file-base64');
var fs = require('fs');
/* base64.encode('text.txt', function(err, base64String) {
  console.log(base64String);
});
 
var base64String = 'swesh523sfsfgwg';
base64.decode(base64String, 'text.new.txt', function(err, output) {
  console.log('success');
}); */

switch (process.argv[2]) {
    case 'encode':
        base64.encode(process.argv[3], function (err, base64String) {
            fs.writeFileSync(process.argv[4] || 'output.txt' ,base64String,{encoding: 'utf8'});
            console.log('Successfully written to file '+ process.argv[4] || 'output.txt');            
        });
        break;
    case 'decode':
        let base64String = fs.readFileSync(process.argv[3],{encoding: 'utf8'});
        base64.decode(base64String, process.argv[4] , function (err, output) {
            console.log('Successfully written to file '+ process.argv[4]);
        });
        break;
    default:
        console.log('Invalid operation. use node . [encode/decode] [file] [outputfile]')
}