const Tag = require("./Tag");
const User = require("./User");
const Sheet = require("./Sheet");


const test = async () => {
    
       

        // Récupération de tous les utilisateurs
        const sheet = await Sheet.findAll();
        
        console.log(JSON.stringify(sheet, null, 2))

    
   
}

test();
