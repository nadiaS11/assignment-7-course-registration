# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# my-course-roster-nadiaS11
# Course-Registration


##  Questions

### Add at least 3 Project features 
- When any of the Select buttons gets Clicked, the course name, course credit, remaining credit, and price get added to the cart accordingly.
- In the project, it shows a toast when a course gets clicked or added more than once. Another toast appears after the total credit hour reaches its limit i.e 20
- The project is styled using Tailwind CSS and daisyUI.

### Discuss how you managed the state in your assignment project.
State variables in the App.jsx file are as follows:
**cart**: This variable keeps the selected courses in an array.
**totalCredit**: Keeps track of the total credits of the selected courses.
**remaining**: Keeps track of the remaining credit after selecting courses.
**prices**: Stores the total prices of the selected courses.

**handleSelect** is an onclick event handler that is called when a user selects a course. It takes the selected course as an argument.
- It first checks whether the selected course is already in the cart.
- If the course is not in the cart, it calculates the total credit after adding the course, checks if it's within a limit of 20 credits, and updates totalCredit, remaining, -prices, and the cart accordingly. It shows a toast message when a course gets selected after reaching the total credit limit of 20 and the remaining being 0.
- If a selected course is already in the cart, it displays another toast message indicating that the course has already been added.
