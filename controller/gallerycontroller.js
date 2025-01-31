const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');



exports.getgallery = async (req, res) => {
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/gallery/get-all-galleries/${websiteID}`);

    // Add postDate to each image (example: using current date for all images)
    if (data && data.length > 0) {
        data.forEach(post => {
            if (post.createdAt) {
                post.postDate = new Date(post.createdAt).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                });
            } else {
                post.postDate = "Date unavailable";
            }
        });
    }

    return data || null;
};



exports.getgalleryalbum = async (title) => {  
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/gallery/get-all-galleries/${websiteID}`);
    
    // Filter the galleries by the title
    const filteredAlbums = data.filter(album => album.title.toLowerCase() === title.toLowerCase());

    // Return the filtered albums as an array (or empty array if no match)
    return filteredAlbums.length > 0 ? filteredAlbums : [];
};

