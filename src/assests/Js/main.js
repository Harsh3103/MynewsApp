import axios from 'axios';

const fetchNewsData = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/news/all');
        return response.data;
    } catch (error) {
        console.error("Error fetching news data:", error);
        throw error; // Re-throw to handle it in your component
    }
};

export default fetchNewsData;
