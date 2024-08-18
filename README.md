# Country Explorer

## Overview

Country Explorer is a web application that allows users to explore information about various countries. It features a list of countries with details including name, capital, currency, language, and region. Users can click on a country name to view detailed information, including the country flag and a link to a map.

This project is built using React with TypeScript for the frontend and ASP.NET Core 8.0 for the backend. The frontend interacts with the backend API, which in turn fetches data from the REST Countries API.

## Design Choices

### Frontend Framework
- **React with TypeScript**: Provides a component-based architecture and type safety, enhancing development and maintainability.

### Routing
- **React Router**: Manages client-side routing, enabling smooth navigation between the list and detail pages.

### API Interaction
- **Axios**: Used for HTTP requests to the backend API due to its simplicity and ease of use.

### Backend Framework
- **ASP.NET Core 8.0**: Chosen for its performance, security, and seamless integration with front-end technologies.

### Data Handling
- **REST Countries API**: Provides comprehensive country data required for the application.

### Error Handling and Logging
- **Frontend**: Basic error logging to the console.
- **Backend**: Basic error handling and logging for easier debugging and maintenance.

### Styling
- **Basic CSS**: Applied for component styling. For improved aesthetics, CSS frameworks or design systems could be considered.

## Improvements for Real-World Application

1. **Enhanced Error Handling**
   - Implement user-friendly error messages and retry mechanisms.
   - Integrate monitoring and logging tools such as Sentry or Application Insights.

2. **Responsive Design**
   - Extend styling to ensure responsiveness across mobile and tablet devices.

3. **Testing**
   - Add unit and integration tests for frontend using Jest and React Testing Library.
   - Improve backend unit test coverage and add integration tests.

4. **Performance Optimization**
   - Implement code splitting and caching mechanisms for better performance.

5. **User Interface Enhancements**
   - Use design systems or UI frameworks for consistency.
   - Ensure accessibility for users with disabilities.

6. **Deployment**
   - Set up CI/CD pipelines for automated testing and deployment.

## Instructions for Running the Application

### Prerequisites

- **Node.js and npm**: Install from [nodejs.org](https://nodejs.org/).
- **.NET Core SDK**: Install from [dotnet.microsoft.com](https://dotnet.microsoft.com/download/dotnet).

### Clone the Repository

```bash
git clone https://github.com/jasersokoli/CountryExplorer.git
cd CountryExplorer
```

### Setup and Run Backend

1. **Navigate to the Backend Directory**

   ```bash
   cd CountryExplorer/Backend

2. **Restore Dependencies and Build**

   ```bash
   dotnet restore
   dotnet build

3. **Run the API**

   ```bash
   dotnet run
   ```
   - The API will start on https://localhost:7042 (replace this URL with your backend URL if deployed).

### Setup and Run Frontend

1. **Navigate to the Frontend Directory**

   ```bash
   cd CountryExplorer/Frontend

2. **Install Dependencies**

   ```bash
   npm install

3. **Update API URL in Frontend**

   - Open src/CountriesList.tsx and src/CountryDetails.tsx.
   - Replace https://localhost:7042 with the actual backend URL if deployed.

4. **Start the Development Server**   
   ```bash
   npm start
   ```
   - The frontend will open in your default browser at http://localhost:3000.

### Access the Application
   - Open your browser and navigate to http://localhost:3000 to view the application.

### Running Tests
   - Backend Tests
    ```bash
    dotnet test
    ```

### Additional Notes
   - Ensure the API URL in the frontend code matches the backend deployment URL.

### License
This project is licensed under the MIT License.
