import ExamResult from '../models/examResult.js';

// Tüm sonuçları getir
export const getAllResults = async (req, res) => {
  try {
    const results = await ExamResult.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Yeni sonuç oluştur
export const createResult = async (req, res) => {
  const result = req.body;
  try {
    const newResult = await ExamResult.create(result);
    res.status(201).json(newResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteAllResults = async (req, res) => {
  try {
    await ExamResult.deleteMany();
    res.status(200).json({ message: 'All results deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};