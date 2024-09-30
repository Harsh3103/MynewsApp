// MainNews.js
import React, { useState, useEffect } from 'react'; 
import latestNewsImage from '../assests/images/latest-news.jpg';
import DialogBox from '../components/DialogBox'; // Import the DialogBox component

import { fetchLatestNews } from '../assests/Js/Master'; 

const countries = [
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'CN', name: 'China' },
    // Add more countries as needed
];

const MainNews = () => {
    const [newsData, setNewsData] = useState([]);
    const [displayedNews, setDisplayedNews] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedNews, setSelectedNews] = useState(null);
    const [newsLimit, setNewsLimit] = useState(4);
    const [selectedCountry, setSelectedCountry] = useState('IN'); // Default to India

    useEffect(() => {
        const getNewsData = async () => {
            const data = await fetchLatestNews(selectedCountry);
            setNewsData(data);
            setDisplayedNews(data.slice(0, newsLimit));
        };
        getNewsData();
    }, [selectedCountry, newsLimit]);

    const handleTitleClick = (news) => {
        setSelectedNews(news);
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
        setSelectedNews(null);
    };

    const loadMoreNews = () => {
        setNewsLimit((prevLimit) => prevLimit + 4);
        setDisplayedNews(newsData.slice(0, newsLimit + 4));
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value); // Update the country
        setNewsLimit(4); // Reset the limit to show only the initial 4 news
    };

    return (
        <div className="main-news">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2><i className="fas fa-align-justify"></i> Latest News</h2>
                            <div className="form-group">
                                <label htmlFor="country-select">Select Country:</label>
                                <select 
                                    id="country-select" 
                                    className="form-control" 
                                    value={selectedCountry} 
                                    onChange={handleCountryChange}
                                >
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            {displayedNews.map((news) => (
                                <div className="col-lg-6" key={news.id}>
                                    <div className="mn-list">
                                        <div className="mn-img">
                                            <img src={news.image !== 'None' ? news.image : latestNewsImage} alt={news.title} />
                                        </div>
                                        <div className="mn-content">
                                            <a 
                                                className="mn-title" 
                                                href="#" 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleTitleClick(news);
                                                }}
                                            >
                                                {news.title}
                                            </a>
                                            <p>{news.description}</p>
                                            <p><small><i className="far fa-clock"></i> {new Date(news.published).toLocaleDateString()}</small></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {displayedNews.length < newsData.length && (
                            <div className="text-right mt-3">
                                <button className="btn btn-primary" onClick={loadMoreNews}>
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="col-md-4">
                        <div className="sidebar">
                            <div className="sidebar-widget">
                                <h2><i className="fas fa-align-justify"></i> Category</h2>
                                <div className="category">
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="far fa-arrow-alt-circle-right"></i></span><a href="">National</a></li>
                                        <li><span className="fa-li"><i className="far fa-arrow-alt-circle-right"></i></span><a href="">International</a></li>
                                        <li><span className="fa-li"><i className="far fa-arrow-alt-circle-right"></i></span><a href="">Economics</a></li>
                                        <li><span className="fa-li"><i className="far fa-arrow-alt-circle-right"></i></span><a href="">Politics</a></li>
                                        <li><span className="fa-li"><i className="far fa-arrow-alt-circle-right"></i></span><a href="">Lifestyle</a></li>
                                        <li><span className="fa-li"><i className="far fa-arrow-alt-circle-right"></i></span><a href="">Technology</a></li>
                                        <li><span className="fa-li"><i className="far fa-arrow-alt-circle-right"></i></span><a href="">Trades</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="sidebar-widget">
                                <h2><i className="fas fa-align-justify"></i> Tags</h2>
                                <div className="tags">
                                    <a href="">National</a>
                                    <a href="">International</a>
                                    <a href="">Economics</a>
                                    <a href="">Politics</a>
                                    <a href="">Lifestyle</a>
                                    <a href="">Technology</a>
                                    <a href="">Trades</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DialogBox 
                show={showDialog} 
                onClose={handleCloseDialog} 
                title={selectedNews?.title} 
                description={selectedNews?.description} 
                image={selectedNews?.image || latestNewsImage} 
            />
        </div>
    );
};

export default MainNews;
