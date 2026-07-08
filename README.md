# Calculator
Basic tool to do daily life calculations easily
# JavaScript Calculator

A modular and responsive Calculator application built using **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6)**. The project follows a clean architecture with separate modules for business logic, validation, display management, keyboard handling, history management, storage, and application control.

---

## Live Demo
(https://calculator-np90jx4ne-red240422.vercel.app/)


---

## GitHub Repository
(https://github.com/Radhi2422/Calculator/tree/main)

---

# Features

- Perform Addition, Subtraction, Multiplication, and Division
- Decimal Number Support
- Delete Last Digit
- Clear Calculator
- Keyboard Support
- Input Validation
- Divide-by-Zero Handling
- Calculation History
- Local Storage Support
- Dark/Light Theme
- Responsive Design
- Modular Architecture
- Object-Oriented JavaScript

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API
- DOM Manipulation
- Object-Oriented Programming (OOP)

---

# Folder Structure

```
calculator/

│── index.html
│── style.css
│── README.md

└── js/

    │── main.js
    │── app.js
    │── calculator.js
    │── display.js
    │── validator.js
    │── keyboard.js
    │── history.js
    │── storage.js
    │── logger.js
    │── config.js
    │── theme.js
    │── utils.js
```

---

# Project Architecture

```
                    User

                      │

          Mouse Click / Keyboard

                      │

                      ▼

              App Controller

                      │

      ┌───────────────┼────────────────┐

      ▼               ▼                ▼

 Validator      Calculator Engine    History

                      │

                      ▼

                Display Manager

                      │

                      ▼

                     UI
```

---

# Application Workflow

```
User Input

↓

Controller

↓

Validator

↓

Calculator Engine

↓

Update State

↓

Display Result

↓

Store History

↓

Render UI
```

---

# Module Responsibilities

## main.js

- Application Entry Point
- Creates App instance
- Starts the application

---

## app.js

- Controller
- Handles button clicks
- Coordinates communication between modules

---

## calculator.js

Contains all business logic.

Responsibilities:

- Addition
- Subtraction
- Multiplication
- Division
- Delete
- Clear
- Manage calculator state

---

## validator.js

Validates user input.

Responsibilities:

- Prevent multiple decimals
- Prevent divide-by-zero
- Validate operators
- Validate empty inputs

---

## display.js

Responsible for updating the calculator screen.

Responsibilities:

- Show result
- Clear display
- Display errors

---

## history.js

Maintains calculation history.

Responsibilities:

- Add history
- Display history
- Render history list

---

## keyboard.js

Adds keyboard support.

Supported Keys

- 0–9
- +
- -
- *
- /
- .
- Enter
- Escape
- Backspace

---

## storage.js

Stores history in browser Local Storage.

Responsibilities

- Save History
- Load History
- Clear History

---

## theme.js

Handles Light and Dark mode.

Responsibilities

- Toggle Theme
- Save Theme Preference

---

## logger.js

Application logging.

Responsibilities

- Log Information
- Log Errors

---

## config.js

Stores application configuration.

Example

- Maximum Digits
- Storage Key
- Theme Name

---

## utils.js

Contains reusable helper functions.

Examples

- isNumber()
- formatResult()
- resetState()

---

# State Management

The application maintains the following state:

```javascript
{
    currentInput: "",
    previousInput: "",
    operator: null,
    history: []
}
```

---

# Error Handling

The application handles:

- Divide by Zero
- Multiple Decimal Points
- Empty Input
- Invalid Operators
- Maximum Input Length
- Invalid Keyboard Input

---

# Time Complexity

| Operation | Complexity |
|------------|------------|
| Number Input | O(1) |
| Delete | O(1) |
| Clear | O(1) |
| Calculation | O(1) |
| History Insert | O(1) |

---

# Installation

Clone the repository

```bash
git clone https://github.com/yourusername/javascript-calculator.git
```

Move into project

```bash
cd javascript-calculator
```

Open

```
index.html
```

or use VS Code Live Server.

---

# Future Enhancements

- Scientific Calculator
- Memory Operations (MC, MR, M+, M-)
- Percentage
- Square Root
- Power Function
- Undo / Redo
- Export History
- Unit Testing
- PWA Support
- Voice Input

---

# Learning Outcomes

This project demonstrates:

- Clean Code Principles
- Object-Oriented Programming
- Modular Architecture
- DOM Manipulation
- Event Handling
- State Management
- Local Storage
- Error Handling
- Keyboard Events
- Responsive Design

---

# Screenshots

## Home Page

<img width="652" height="696" alt="image" src="https://github.com/user-attachments/assets/2b0d319e-d23c-41c6-afb7-b90368073e65" />

---

## Calculation History

<img width="636" height="277" alt="image" src="https://github.com/user-attachments/assets/2b583072-b556-4200-9090-55f5e8fd71ab" />


---

# Deployment

Frontend can be deployed using:

- Vercel
- GitHub Pages
- Netlify

---

# Author

**Radhika Mittal**
Software Developer

GitHub:
https://github.com/Radhi2422

LinkedIn:
https://www.linkedin.com/in/radhika-mittal-18b30a240/

---

# License

This project is licensed under the MIT License.

---

## Interview Highlights

This project showcases:

- Modular JavaScript Architecture
- Separation of Concerns
- Object-Oriented Design
- Controller-Based Workflow
- Validation Layer
- Persistent Storage
- Scalable Folder Structure
- Professional Project Organization
