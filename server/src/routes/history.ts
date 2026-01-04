import express from 'express'
import History from '../models/History'
import { authMiddleware } from '../middleware/auth'

const router = express.Router()

// Get browsing history for user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const history = await History.find({ userId: req.userId })
      .sort({ visitedAt: -1 })
      .limit(100)
    res.json(history)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Add to history
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { url, title } = req.body
    const historyEntry = new History({ url, title, userId: req.userId })
    await historyEntry.save()
    res.status(201).json(historyEntry)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Clear history
router.delete('/', authMiddleware, async (req, res) => {
  try {
    await History.deleteMany({ userId: req.userId })
    res.json({ message: 'History cleared' })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

export default router