import React, { useEffect, useState } from 'react';
import DialogBox from '../components/newcategorydialog'; // Import your DialogBox component
import axios from 'axios';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons

const NewsCategory = () => {
    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [newsData, setNewsData] = useState({
        NewsAPI: [],
        CurrentsAPI: [],
        TheGuardian: []
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [showAll, setShowAll] = useState(false); // State to toggle loading all news
    const [selectedSource, setSelectedSource] = useState('All'); // State for selected news source
    const [filteredNews, setFilteredNews] = useState([]); // State for filtered news based on search

    const openModal = (newsItem) => {
        setModalData(newsItem);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalData(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newsApiResponse = await axios.get('http://localhost:4000/api/news/source?source=NewsAPI');
                const currentsApiResponse = await axios.get('http://localhost:4000/api/news/source?source=CurrentsAPI');
                const guardianApiResponse = await axios.get('http://localhost:4000/api/news/source?source=The Guardian');

                setNewsData({
                    NewsAPI: newsApiResponse.data.data || [],
                    CurrentsAPI: currentsApiResponse.data.data || [],
                    TheGuardian: guardianApiResponse.data.data || []
                });
            } catch (error) {
                console.error("Error fetching news data:", error);
            }
        };

        fetchData();
    }, []);

    // Function to handle search input change
    const handleSearchChange = async (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        if (query) {
            try {
                const response = await axios.get(`http://localhost:4000/api/news/all?query=${query}`);
                setFilteredNews(response.data.data || []);
            } catch (error) {
                console.error("Error fetching search results:", error);
                setFilteredNews([]);
            }
        } else {
            setFilteredNews([]); // Reset filtered news if query is empty
        }
    };

    // Function to handle source selection change
    const handleSourceChange = (event) => {
        setSelectedSource(event.target.value);
        setShowAll(false); // Reset to show only initial news cards when source changes
    };

    // Get news for display based on selected source or search
    const getDisplayNews = () => {
        if (searchQuery) {
            return filteredNews; // Return filtered news if there's a search query
        }

        let allNews = [];

        // Collect news from selected source
        if (selectedSource === 'All') {
            allNews = [
                ...newsData.NewsAPI.slice(0, showAll ? newsData.NewsAPI.length : 3), // Show all or first 3 from NewsAPI
                ...newsData.CurrentsAPI.slice(0, showAll ? newsData.CurrentsAPI.length : 3), // Show all or first 3 from CurrentsAPI
                ...newsData.TheGuardian.slice(0, showAll ? newsData.TheGuardian.length : 3) // Show all or first 3 from The Guardian
            ];
        } else if (selectedSource === 'NewsAPI') {
            allNews = newsData.NewsAPI.slice(0, showAll ? newsData.NewsAPI.length : 3);
        } else if (selectedSource === 'CurrentsAPI') {
            allNews = newsData.CurrentsAPI.slice(0, showAll ? newsData.CurrentsAPI.length : 3);
        } else if (selectedSource === 'The Guardian') {
            allNews = newsData.TheGuardian.slice(0, showAll ? newsData.TheGuardian.length : 3);
        }

        return allNews;
    };

    // Determine which news items to display based on whether all news should be shown
    const displayNews = getDisplayNews();

    // Load more news items
    const loadMoreNews = () => {
        setShowAll(true); // Show all news on button click
    };

    // Placeholder image URL
    const placeholderImage = 'https://via.placeholder.com/1920x1005.png?text=No+Image+Available';

    return (
        <div className="news-category">
            <div className="container">
                {/* Search Box */}
                <div className="search-box mb-4" style={{ marginTop: '20px' }}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" style={{ border: '1px solid black', backgroundColor: 'white' }}>
                                <FaSearch />
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for news..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            style={{ border: '1px solid black', width: '300px' }} // Set width and border
                        />
                    </div>
                </div>

                {/* Dropdown for selecting news source */}
                <div className="mb-4">
                    <select 
                        value={selectedSource} 
                        onChange={handleSourceChange} 
                        className="form-select"
                        style={{ width: '300px' }} // Set width for dropdown
                    >
                        <option value="All">All</option>
                        <option value="NewsAPI">NewsAPI</option>
                        <option value="The Guardian">The Guardian</option>
                        <option value="CurrentsAPI">CurrentsAPI</option>
                    </select>
                </div>

                <div className="row">
                    {displayNews.map((newsItem) => (
                        <div className="col-md-4 mb-4" key={newsItem.id}>
                            <div className="card" style={{ border: '1px solid #ddd', borderRadius: '8px', height: '100%' }}>
                                <img 
                                    src={newsItem.urlToImage || placeholderImage} // Use placeholder if no image
                                    alt={newsItem.webTitle} 
                                    className="card-img-top" 
                                    style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', height: '200px', objectFit: 'cover' }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{newsItem.webTitle}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{newsItem.apisource}</h6> {/* Display API source */}
                                    <p className="card-text">{newsItem.description || 'Description not available.'}</p>
                                    <p className="text-muted"><small>Published on: {new Date(newsItem.webPublicationDate).toLocaleDateString()}</small></p>
                                    <p className="text-muted"><small>Source URL: <a href={newsItem.webUrl} target="_blank" rel="noopener noreferrer">{newsItem.webUrl}</a></small></p>
                                    <button className="btn btn-primary" onClick={() => openModal(newsItem)}>Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button for specific source */}
                {selectedSource !== 'All' && (
                    <div className="text-center mt-4">
                        {displayNews.length === (showAll ? newsData[selectedSource].length : 3) && (
                            <button className="btn btn-secondary" onClick={loadMoreNews}>Load More</button>
                        )}
                    </div>
                )}

                {/* Load More Button for "All" */}
                {selectedSource === 'All' && !showAll && (
                    <div className="text-center mt-4">
                        <button className="btn btn-secondary" onClick={loadMoreNews}>Load More</button>
                    </div>
                )}

                {/* Modal for detailed news view */}
                {showModal && modalData && (
                    <DialogBox onClose={closeModal} newsData={modalData} />
                )}
            </div>
        </div>
    );
};

export default NewsCategory;
