# Weather Widget: Real-Time Weather Information for Any City and Country

## About Weather Widget

Weather Widget is a web-based application designed to deliver real-time weather information for any city and country. Powered by WeatherAPI.com, it provides a sleek, dark-themed interface to fetch and display current weather data—such as temperature, conditions, humidity, wind speed, UV index, and more—within seconds. Built with React and Vite for good performance, the widget features responsive design, error handling, and Material UI components.

## Features

- **City & Country Query**: Users specify both city and country for accurate weather results.
- **Real-Time Data**: Pulls up-to-date weather details, including temperature, condition, feels-like, humidity, wind, UV, visibility, and pressure.
- **Dark Theme**: Styled for dark-mode environments with high contrast and readability.
- **Robust Error Handling**: Features client-side validation, API error parsing (e.g., "No matching location found"), and network failure alerts.
- **Loading State**: Displays an inline spinner and disables the submit button during data fetches.
- **Responsive Design**: Adapts effortlessly to mobile, tablet, and desktop screens.
- **Extensible Architecture**: Organized with a separated service layer (getWeatherInfo.js), presentational components (WeatherCard.jsx), and global state in App.jsx.

## Getting Started

### Prerequisites

To run Weather Widget locally, ensure you have the following installed:

- **Node.js**: Version 14 or higher ([Download Node.js](https://nodejs.org/))
- **npm or yarn**: For package management ([npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/))

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/weather-widget.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd weather-widget
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variable, replacing the placeholder with your actual API key:
     ```
     VITE_WEATHER_API_KEY=your_weatherapi_key_here
     ```
   - Obtain an API key from [WeatherAPI.com](https://www.weatherapi.com/).
5. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

### Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Enter a city and country in the search form.
3. Click the "SEARCH" button.
4. View the weather details in the card below the form. If the location is invalid, an error message will appear.

## Technologies Used

Weather Widget is built with a modern tech stack for performance and usability. The key technologies include:

| **Category**   | **Technologies**                             |
| -------------- | -------------------------------------------- |
| **Build Tool** | Vite                                         |
| **Framework**  | React                                        |
| **UI Library** | Material UI                                  |
| **API**        | WeatherAPI.com                               |
| **Styling**    | External CSS + MUI theming                   |
| **Deployment** | Vercel (CI/CD, environment variable support) |

## Project Structure

The project is structured for clarity and maintainability, as shown below:

```
weather-widget/
├── src/
│   ├── assets/                   # Images, icons
│   ├── components/
│   │   ├── NavBar.jsx            # Dark-themed header
│   │   ├── SearchBar.jsx         # City/Country form + error/loading
│   │   ├── WeatherCard.jsx       # Weather display UI
│   │   └── *.css                 # Component-specific styles
│   ├── services/
│   │   └── getWeatherInfo.js     # API fetch & error parsing
│   ├── App.jsx                   # Root component (state lift)
│   ├── main.jsx                  # Vite entry point
│   └── index.css                 # Global resets & theme
├── .env                          # Environment variables (gitignored)
├── .gitignore                    # Git ignore file
├── package.json                  # Project metadata and dependencies
├── README.md                     # Project documentation
└── vite.config.js                # Vite configuration
```

## Contributing

Contributions to Weather Widget are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes, ensuring code follows best practices and includes tests where applicable.
4. Submit a pull request with a clear description of your changes.

Please ensure your contributions align with the project's coding standards and include appropriate documentation.

## Contact

For questions, feedback, or issues, please contact the developer:

- **GitHub**: [SHAIK RAIYAN](https://github.com/SHAIK-RAIYAN)
- **Email**: [shaikraiyan2005@gmail.com](mailto:shaikraiyan2005@gmail.com)

## Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for reliable weather data.
- [Material UI](https://mui.com/) for modular, themeable React components.
- [Vite](https://vitejs.dev/) for lightning-fast development and build performance.

⭐ **Show Some Love**  
If you enjoy this project, drop a star ⭐ on the repo and share your thoughts! 🚀

💡 Made with ❤️ by [SHAIK RAIYAN](https://github.com/SHAIK-RAIYAN).
