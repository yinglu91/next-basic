import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { describe } from 'node:test'

// group test cases using describe
describe('Home', () => {
  // Tri AAA
  it('should have Docs test', () => {
    render(<Home />) // Arrange

    const myEl = screen.getByText('Docs') // Act

    expect(myEl).toBeInTheDocument() // Assert
  })

  it('should contain the text "information"', () => {
    render(<Home />) // Arrange

    const myEl = screen.getByText(/information/i) // Act

    expect(myEl).toBeInTheDocument() // Assert
  })

  it('should have a heading (h2) "Learn"', () => {
    render(<Home />) // Arrange

    const myEl = screen.getByRole('heading', { name: 'Learn' }) // Act

    expect(myEl).toBeInTheDocument() // Assert
  })
})
