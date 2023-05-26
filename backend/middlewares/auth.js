const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const auth = (req, res, next) => {

    try {
        let token = req.headers.authorization;
        if(!token) {
            res.status(401).json({message: "Unauthorised user"});
        }
        else {
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRET_KEY);
            req.userId = user.id;
        }
        next();

    }
    catch (error) {
        console.log(error);
        res.status(401).json({message: "Unauthorised user"});
    }
}

module.exports = auth;