import express from 'express';
import { getAllResults, createResult, deleteAllResults } from '../controllers/examResultController.js';

const router = express.Router();

// GET all results
router.get('/', getAllResults);

// POST create a new result
router.post('/', createResult);

// DELETE delete all results

export default router;
