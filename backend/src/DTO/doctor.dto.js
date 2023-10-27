
class DoctorDTO {

    //reconstruyo al objeto doctor con las propiedades requeridas
    static getDoctorCreated = (req) =>{
        return {
            name: req.body.name,
            speciality: req.body.speciality,
            location: req.body.location,
            studies: req.body.studies,
            interest: req.body.interest,
            availability: req.body.availability
        }
    }

}


export default DoctorDTO;