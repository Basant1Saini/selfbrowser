import { create } from 'zustand'

interface BrowserState {
  currentUrl: string
  history: string[]
  bookmarks: string[]
  isLoading: boolean
  setCurrentUrl: (url: string) => void
  addToHistory: (url: string) => void
  addBookmark: (url: string) => void
  removeBookmark: (url: string) => void
  setLoading: (loading: boolean) => void
}

export const useBrowserStore = create<BrowserState>((set) => ({
  currentUrl: 'https://www.google.com',
  history: [],
  bookmarks: [],
  isLoading: false,
  setCurrentUrl: (url) => set({ currentUrl: url }),
  addToHistory: (url) => set((state) => ({ 
    history: [...state.history, url] 
  })),
  addBookmark: (url) => set((state) => ({ 
    bookmarks: [...state.bookmarks, url] 
  })),
  removeBookmark: (url) => set((state) => ({ 
    bookmarks: state.bookmarks.filter(bookmark => bookmark !== url) 
  })),
  setLoading: (loading) => set({ isLoading: loading })
}))