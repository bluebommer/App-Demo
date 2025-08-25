import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import LoginPage from "../Pages/LoginPage";

test("shows error if phone does not start with +254", () => {
  render(
    <AuthProvider>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </AuthProvider>
  );

  // type invalid number
  const input = screen.getByPlaceholderText(/enter phone number/i);
  fireEvent.change(input, { target: { value: "0712345678" } });

  // click login
  const button = screen.getByText(/login/i);
  fireEvent.click(button);

  // check error message
  expect(
    screen.getByText(/must start with country code/i)
  ).toBeInTheDocument();
});
