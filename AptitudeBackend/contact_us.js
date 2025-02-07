const {contactUs} = require("./connection");

const contact_us = async (req, resp) => {
    try {
        const { name, email, msg } = req.body;
            const addUser = await contactUs.create({name:name, email:email, msg: msg})
            if (addUser && addUser.length !== 0) {
                resp.send({ success: true, massage: "User Added !!!" });
            }
            else {
                resp.send({ success: false, massage: "Error Occured !!!" })
            }
    } catch (error) {
        resp.send(error)
    }
}
module.exports = contact_us;