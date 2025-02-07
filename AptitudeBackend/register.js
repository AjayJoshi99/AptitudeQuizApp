const {Login} = require("./connection");

const register = async (req, resp) => {
    try {
        const { email, password, fullName:fullname } = req.body;
        const user = await Login.findOne({ email: email, password: password , fullname: fullname});
        if (!user) {
            const addUser = await Login.create({ email: email, password: password , fullname: fullname})
            console.log({ email: email, password: password , fullname: fullname})
            if (addUser && addUser.length !== 0) {
                resp.send({ success: true, massage: "User Added !!!" });
            }
            else {
                resp.send({ success: false, massage: "Error Occured !!!" })
            }
        }
        else {
            resp.send({ success: false, massage: "Email is already in use!!!" });
        }
    } catch (error) {
        resp.send(error)
    }
}
module.exports = register;