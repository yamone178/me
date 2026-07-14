import { render, screen } from '@testing-library/react';
import Work from './components/Work';

test('renders the LOM Tech work experience page', () => {
  render(<Work />);

  expect(screen.getByRole('heading', { name: /work experience/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /frontend developer/i })).toBeInTheDocument();
  expect(screen.getByText('LOM Tech')).toBeInTheDocument();
  expect(screen.getByText('05/2025')).toBeInTheDocument();
  expect(screen.getByText('07/2026')).toBeInTheDocument();
  expect(screen.getByText(/Learning Management System \(LMS\)/i)).toBeInTheDocument();
});
