import { render, screen}  from '@testing-library/react';
import Experience from '../components/experience/Experience';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';

test.only('Experience component renders correctly', () => {
    render(<Experience />);
    const frontEndSkill = screen.getByText('HTML');
    const frontEndSkill2 = screen.getByText('CSS');
    const backEndSkill = screen.getByText('Node.js');
    const backEndSkill2 = screen.getByText('Express');
    expect(frontEndSkill).toBeInTheDocument();
    expect(frontEndSkill2).toBeInTheDocument();
    expect(backEndSkill).toBeInTheDocument();
    expect(backEndSkill2).toBeInTheDocument();    
});