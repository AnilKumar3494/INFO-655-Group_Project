import { render, screen}  from '@testing-library/react';
import About from '../components/about/About';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';

test('About component renders correctly', () => {
    render(<About />);
    const cardDescription = screen.getByText('4 Developers');
    const cardDescription2 = screen.getByText('INFO 655');
    const cardDescriprion3 = screen.getByText('Portfolio');
    expect(cardDescription).toBeInTheDocument();
    expect(cardDescription2).toBeInTheDocument();
    expect(cardDescriprion3).toBeInTheDocument();
});
