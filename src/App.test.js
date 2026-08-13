// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NonceYield title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NonceYield/i);
    expect(titleElement).toBeInTheDocument();
});
