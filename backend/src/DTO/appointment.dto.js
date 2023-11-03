
class AppointmentsDto {

    static saveAppointment = (req,userID) =>{
        return {
            date: req.body.date,
            location: req.body.location,
            patientId: userID.dataValues.id,
            doctorId: req.body.doctorId,
        }
    }
}

export default AppointmentsDto;