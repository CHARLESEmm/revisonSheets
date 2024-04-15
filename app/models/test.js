const User = require("./User");

const test = async () => {
    try {
        const chuckNorris = await User.findByPK(1);
        console.log(JSON.stringify(chuckNorris, null, 2));
    } catch (error) {
        console.error("Une erreur est survenue :", error);
    }
}

test();
