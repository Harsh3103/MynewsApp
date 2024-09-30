// Master.js (api.js)
const API_KEY = 'q7NZFTHG6B6RrPNuIgehM27DF-vK6SGnFCeN1z6NqkR5NBf_';
const BASE_URL = 'https://api.currentsapi.services/v1/latest-news';

// Fetch the latest news based on country
export const fetchLatestNews = async (country = 'IN') => {
    const url = `${BASE_URL}?country=${country}&apiKey=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.news; // Return only the news array
    } catch (error) {
        console.error('Fetch error:', error);
        return []; // Return an empty array on error
    }
};
