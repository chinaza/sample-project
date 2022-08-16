import mongoose from 'mongoose';

const ValidationModel = mongoose.model('Validation', {
  studentId: { type: String, required: true },
  name: { type: String },
  isStudent: { type: Boolean, required: true },
});

export default ValidationModel;
