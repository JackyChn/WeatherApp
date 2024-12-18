# Weather App

This project is a weather application that allows users to search for weather information for any city in the world. The background dynamically changes based on the city's current weather conditions (e.g., Sunny, Rainy, Cloudy, etc.) with smooth transitions for enhanced UX.

## Features

- **Dynamic Background**: Changes background images based on weather type (Sunny, Rainy, Cloudy, Snowy).
- **Search City Weather**: Users can search for any city to retrieve its current weather.
- **Loading Spinner**: Displays a loading animation while fetching data.
- **City Not Found Handling**: Displays an error message when the city is not found.
- **Weather Details**: Shows temperature (Celsius/Fahrenheit), humidity, wind speed, and weather condition.

## Tech Stack

- **Next.js**: React framework for server-side rendering and client-side interactivity.
- **TypeScript**: Type-safe JavaScript for scalability and maintainability.
- **Tailwind CSS**: Utility-first CSS for responsive and modern UI design.
- **Redux Toolkit**: State management for dynamic weather backgrounds.
- **Weather API**: Retrieves real-time weather data on 'https://www.weatherapi.com/'

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure Node.js is installed.
- **NPM or Yarn**: Package manager for dependencies.

### Steps to Run the App

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd weather-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your Weather API key.

## Usage

1. **Search for a City**: Enter a city's name and press **Enter** or click the **Search** button.
2. **Dynamic Weather Display**: The app fetches weather data and displays the relevant weather condition with an updated background image.
3. **Error Handling**: If the city does not exist, an appropriate message is shown.

## Screenshots

### Home Page with Dynamic Background

![Home Page](public/Sunny.jpg)

### Loading State

![Loading](public/loading.png)

### City Not Found

![Error](public/error.png)

## Future Improvements

- Add hourly and 7-day weather forecasts.
- Integrate location-based weather retrieval.
- Enhance animations and UI components.

## License

[Nahh....]

---

### Author

[Jacky]
