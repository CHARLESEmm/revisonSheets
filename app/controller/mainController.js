const {sheet} = require("../models")

const mainController = {

    async homepage(req,res){

        try {
            const sheets = await sheet.findAll()
            res.render('home', {sheets});
        } catch (error) {
            
        }

        
    }

}

module.exports = mainController;