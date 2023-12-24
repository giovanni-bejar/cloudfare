# README for Cloudflare Internship Assignment: Organizational Chart Dashboard

## Project Overview
This project is a dashboard designed to display an organizational chart for an internet company. It was developed as part of a software engineering internship assignment at Cloudflare. The project is divided into two main components: a backend API developed using Cloudflare Workers and a frontend React application.

### Backend API
The backend API, hosted on Cloudflare Workers, provides three main endpoints:

- `/organization-chart`: Handles GET and POST requests for retrieving and updating the organization chart.
- `/employee`: Handles POST requests to filter and return employee details based on specific criteria.
- `/me`: Returns personal information about the developer, Giovanni Bejar.

### Frontend UI
The frontend is a React application that displays the organizational chart using the `react-google-charts` library. It fetches data from the backend API and provides an interactive interface to view details about each employee in the organization.

## Key Functionalities

### Backend API (`index.js`)
- `async fetch(request, env, ctx)`: Main function handling incoming requests and routing them to the appropriate handler based on the URL path.
- `handleOrgChartRequest(request, env)`: Handles requests to `/organization-chart`. It supports both GET and POST methods for retrieving and updating the organizational chart, respectively.
- `handleEmployeeRequest(request, env)`: Processes POST requests to `/employee` for filtering employees based on given criteria such as name, department, salary, etc.
- `handleMeRequest(request, env)`: Returns the developer's personal information, skills, and an interesting fact.
- `convertCsvToJson(csvData)`: Converts CSV data to JSON format, suitable for storing and retrieving the organization's structure.
- `filterEmployees(orgChart, query)`: Filters the list of employees based on specified query parameters.

### Frontend React Application (`OrgChartComponent`)
- React Hooks (`useState`, `useEffect`): Manage state and side-effects within the application.
- `fetch` API Calls: Fetch organization data from the backend API.
- `transformToOrgChartData(data)`: Transforms the fetched data into a format compatible with `react-google-charts`.
- `flattenEmployeeData(departments)`: Flattens the departmental data to simplify employee lookup.
- `handleChartSelect(chartWrapper)`: Handles the selection of an employee on the chart to display detailed information.
- `EmployeeDetail` Component: Displays detailed information about the selected employee, including their role, department, salary, and skills.

## Deployment
The backend API is deployed on Cloudflare Workers, while the frontend React application is hosted on Cloudflare Pages.

### API URL
[https://coding-assignment.giovannibejar122.workers.dev/](https://coding-assignment.giovannibejar122.workers.dev/)

### Running the Project Locally
To run the project locally, clone the repository, and for the frontend, run:

```bash
npm install
npm start
