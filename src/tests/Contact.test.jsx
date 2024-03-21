import { render, screen, fireEvent }  from '@testing-library/react';
import Contact from '../components/contact/Contact';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';


test('form is not submitted when required fields are empty', async () => {
  const { getByPlaceholderText } = render(<Contact />);

 
  const nameInput = getByPlaceholderText("Your Good Name");
  fireEvent.change(nameInput, { target: { value: 'Test Name' } });

  const nameText =  await screen.findByDisplayValue('Test Name');

  
  const messageInput = getByPlaceholderText('Leave your thoughts');
  fireEvent.change(messageInput, { target: { value: 'Test Message' } });

  const messageText =  await screen.findByDisplayValue('Test Message');

  
  const submitButton = screen.getByRole('button', {type: 'submit'});
  fireEvent.click(submitButton);
  expect(nameText).toBeInTheDocument();
  expect(messageText).toBeInTheDocument();
});