import mongoose, { Document, Schema } from 'mongoose'

export interface IHistory extends Document {
  url: string
  title: string
  userId: mongoose.Types.ObjectId
  visitedAt: Date
}

const HistorySchema: Schema = new Schema({
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
  visitedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model<IHistory>('History', HistorySchema)