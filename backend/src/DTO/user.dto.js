
class UserDTO {

    static getRegisteredUser = (req,hashedPwd) =>{
        return {
            documentId: documentId,
            name: req.body.name,
            last_name: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            address: req.body.address,
            password: hashedPwd
        }
    }
}

export default UserDTO;