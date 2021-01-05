const path = require('path') // Path module import

// Path to this file
let full_path = path.basename(__filename);

console.log(full_path)

let file_extension = path.extname(__filename);

// Extension of this file
console.log(file_extension);

let full_file_info = path.parse(__filename);

// Full info about this file
console.log(full_file_info);

// Path concatenation
console.log(path.join(__dirname, '..', 'Modules', 'index.js'))