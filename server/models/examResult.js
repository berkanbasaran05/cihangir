import mongoose from 'mongoose';

const examResultSchema = new mongoose.Schema({
  parentName: String,
  parentPhone: String,
  parentEmail: String,
  studentName: String,
  campus: String,
  turkishCorrectAnswer: Number,
  historyCorrectAnswer: Number,
  religionCorrectAnswer: Number,
  foreignLanguageCorrectAnswer: Number,
  mathPointCorrectAnswer: Number,
  sciencePointCorrectAnswer: Number,
  turkishWrongAnswer: Number,
  historyWrongAnswer: Number,
  religionWrongAnswer: Number,
  foreignLanguageWrongAnswer: Number,
  mathPointWrongAnswer: Number,
  sciencePointWrongAnswer: Number,
});

const ExamResult = mongoose.model('ExamResult', examResultSchema);

export default ExamResult;
