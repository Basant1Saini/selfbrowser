import mongoose, { Document, Schema } from 'mongoose'

export interface IBookmark extends Document {
  url: string
  title: string
  userId: mongoose.Types.ObjectId
  createdAt: Date
}

const BookmarkSchema: Schema = new Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model<IBookmark>('Bookmark', BookmarkSchema)