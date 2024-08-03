import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  doctor_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
  
const DoctorsModel = mongoose.model("doctors_login_signup", DoctorSchema);
export default DoctorsModel;
  