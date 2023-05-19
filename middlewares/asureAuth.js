const asureAuth = (req, res, next) => {
    const token = req.headers.authorization
    console.log(token);
    if(!token){
        return res.status(403).send({message:"No hay token de autorizacion"});
    }
    next();
}


module.exports = {
    asureAuth
}