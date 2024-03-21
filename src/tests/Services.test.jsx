import { render, screen}  from '@testing-library/react';
import Services from '../components/services/Services';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';

test('About component renders correctly', () => {
    render(<Services />);
    const cardDescription = screen.getByText('WireFraming');
    const cardDescription2 = screen.getByText('Web Development');
    const cardDescriprion3 = screen.getByText('Content Strategy');
    expect(cardDescription).toBeInTheDocument();
    expect(cardDescription2).toBeInTheDocument();
    expect(cardDescriprion3).toBeInTheDocument();
});