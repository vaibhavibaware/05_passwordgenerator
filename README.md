# Password Generator Application

## Overview
This project is a **Password Generator** web application built using **React.js**. It allows users to generate secure, random passwords with customizable options such as password length, inclusion of numbers, and special characters.

---

## Features

- **Dynamic Password Generation:** Generates random passwords based on user preferences.
- **Customizable Options:**  
  - Password length ranging from 6 to 100 characters.  
  - Toggle inclusion of numbers and special characters.  
- **Clipboard Functionality:** Copy the generated password to the clipboard with a single click.

---

## Technologies Used

- **React.js:** Functional components with hooks for state and lifecycle management.  
- **Tailwind CSS:** Utility-first CSS framework for styling the UI.

---

## Components & State Management

- **App.js** handles the core functionality and UI.  
- **State variables:**  
  - `lengtht` — Controls the password length.  
  - `Numberallowed` — Enables/disables inclusion of numbers.  
  - `charAllowed` — Enables/disables inclusion of special characters.  
  - `Password` — Holds the generated password.  

- **React Hooks used:**  
  - `useState` — Manage state variables.  
  - `useCallback` — Memoize password generation and clipboard copy functions.  
  - `useEffect` — Automatically generate a new password when state changes.  
  - `useRef` — Reference the input element for clipboard copying.

---
