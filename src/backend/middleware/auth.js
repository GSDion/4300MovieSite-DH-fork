const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        console.log(token)
        if (!token)
            return res  
                .status(401)
                .json({ msg: "No auth token, access denied"});
        const verified = jwt.verify(token, "passwordKey");
        if (!verified)
            return res  
                .status(401)
                .json({ msg: "Token verification failed, authorization deneid"});
        // since the token was made out the document id
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

module.exports = auth;
