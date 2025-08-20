const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'VISPER-MD&S1ZBES4I#4r7v9DLa22KCzOKdiCVz0-4Pb7Ymb4XEef_ZrpkOhhE' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'cybersachiya1' : process.env.SESSION_NAME, 

};

