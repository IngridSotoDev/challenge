import { act, fireEvent, render } from "@testing-library/react";
import LoginPage from ".";

describe('Login Page', () => {
  test('renders login form with inputs', () => {
    const {getByText,getByPlaceholderText } = render(<LoginPage />);
    
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('should be submits form on button click', () => {
    const { getByRole } = render(<LoginPage />);
    const consoleSpy = jest.spyOn(console, 'log');
  
    fireEvent.submit(getByRole('button', { name: 'Sign In' }));
    
    expect(consoleSpy).toHaveBeenCalledWith('login');
  });
});