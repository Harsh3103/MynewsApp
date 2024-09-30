import React from 'react';

const DialogBox = ({ onClose, newsData }) => {
    return (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{newsData.title}</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img 
                            src={newsData.urlToImage || 'https://via.placeholder.com/300.png?text=No+Image'} 
                            alt={newsData.title} 
                            style={{ width: '100%' }} 
                        />
                        <p><strong>Source:</strong> {newsData.source?.name}</p> {/* Display the source */}
                        <p>{newsData.description}</p>
                        <a 
                            href={newsData.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-info"
                        >
                            Read Full Article
                        </a>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DialogBox;
