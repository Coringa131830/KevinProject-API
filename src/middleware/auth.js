const jwt = require('jsonwebtoken');

module.exports = (req,res,nxt) => {

    const token = req.header('auth');
    if(!token) res.status(400).json({err: "No token provided"});

    try {

        const decoded = jwt.verify(token, 'JWT_SECRET!');
        req.userId = decoded;
        nxt();

    }catch (err) {

        if( err ) throw err.message;
        return res.status(401);

    }

};
