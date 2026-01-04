import express from 'express'
import Bookmark from '../models/Bookmark'
import { authMiddleware } from '../middleware/auth'

const router = express.Router()

// Get all bookmarks for user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ userId: req.userId })
    res.json(bookmarks)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Add bookmark
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { url, title } = req.body
    const bookmark = new Bookmark({ url, title, userId: req.userId })
    await bookmark.save()
    res.status(201).json(bookmark)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Delete bookmark
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Bookmark.findOneAndDelete({ _id: req.params.id, userId: req.userId })
    res.json({ message: 'Bookmark deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

export default router