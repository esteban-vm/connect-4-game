import { configure } from '@testing-library/react'

beforeAll(() => {
  configure({ throwSuggestions: true })
})
