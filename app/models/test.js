const Tag = require("./Tag");
const User = require("./User");


const test = async () => {
    
       

        // Récupération de tous les utilisateurs
        const tag = await Tag.findByPk(1);
        
        console.log(tag.toJSON());
    
   
}

test();
