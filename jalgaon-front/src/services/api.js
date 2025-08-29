// src/services/api.js

const BASE_URL = "https://jalgaonback.demovoting.com/api";

// Generic fetch function
const apiFetch = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
};

// Tourism API endpoints
export const tourismAPI = {
  getSpots: () => apiFetch("/tourism/spots"),
  getGallery: (lang = "en") => apiFetch(`/tourism/gallery?lang=${lang}`),
  // Add more tourism endpoints as needed
  getSpotById: (id) => apiFetch(`/tourism/spots/${slug}`),
};

// Export the base fetch function for custom requests
export { apiFetch, BASE_URL };
