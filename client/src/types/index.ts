export interface User {
  id: string
  email: string
  name: string
  createdAt: Date
}

export interface Bookmark {
  id: string
  url: string
  title: string
  userId: string
  createdAt: Date
}

export interface HistoryEntry {
  id: string
  url: string
  title: string
  userId: string
  visitedAt: Date
}

export interface Tab {
  id: string
  url: string
  title: string
  isActive: boolean
}