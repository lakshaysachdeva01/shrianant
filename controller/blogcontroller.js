const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');

exports.getBlog = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
   
     const data = await fetchData(`${API_BASE_URL}/website/post/get-all-posts/${websiteID}`);
     const filteredBlogs = data.filter(blog => blog.category == "BLOG");

    // Add formatted postDate to each blog item
    filteredBlogs.forEach(blog => {
        if (blog.createdAt) {
            try {
                blog.postDate = new Date(blog.createdAt).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                });
            } catch (error) {
                console.error(`Error formatting date for blog with ID ${blog._id}:`, error);
                blog.postDate = "Invalid date format";
            }
        } else {
            blog.postDate = "Date unavailable";
        }
    });

    return filteredBlogs;
};

exports.getevents = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
   
     const data = await fetchData(`${API_BASE_URL}/website/post/get-all-posts/${websiteID}`);
     const filteredevents = data.filter(event => event.category == "EVENT");

    // Add formatted postDate to each blog item
    filteredevents.forEach(event => {
        if (event.createdAt) {
            try {
                event.postDate = new Date(event.createdAt).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                });
            } catch (error) {
                console.error(`Error formatting date for blog with ID ${event._id}:`, error);
                event.postDate = "Invalid date format";
            }
        } else {
            event.postDate = "Date unavailable";
        }
    });

    return filteredevents;
};

exports.getcasestudy = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
   
     const data = await fetchData(`${API_BASE_URL}/website/post/get-all-posts/${websiteID}`);
     const casestudies = data.filter(casestudy => casestudy.category == "NEWS_FEED");

    // Add formatted postDate to each blog item
    casestudies.forEach(casestudy => {
        if (casestudy.createdAt) {
            try {
                casestudy.postDate = new Date(casestudy.createdAt).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                });
            } catch (error) {
                console.error(`Error formatting date for blog with ID ${casestudy._id}:`, error);
                casestudy.postDate = "Invalid date format";
            }
        } else {
            casestudy.postDate = "Date unavailable";
        }
    });
 
    return casestudies;
};


exports.getBlogfull = async(slug) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/post/get-post-by-slug/${websiteID}?slug=${slug}`);

     if (data && data.createdAt) {
        // Format the createdAt date as postDate
        data.postDate = new Date(data.createdAt).toLocaleDateString('en-GB', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
        });
    } else {
        data.postDate = "Date unavailable";
    }
     return data || null
};

exports.getlatestblogs = async (slug) => {  
    const websiteID = await getWebsiteID();
    const data = await fetchData(`${API_BASE_URL}/website/post/get-all-posts/${websiteID}`);

    if (!data || data.length === 0) {
        return []; // Return an empty array if no data is found
    }

    // Filter blogs with category 'BLOG' and exclude the one matching the provided slug
    const filteredBlogs = data.filter(blog => blog.category === "BLOG" && blog.seoDetails.slug !== slug);

    // Add formatted postDate to each blog item
    filteredBlogs.forEach(blog => {
        if (blog.createdAt) {
            try {
                blog.postDate = new Date(blog.createdAt).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                });
            } catch (error) {
                console.error(`Error formatting date for blog with ID ${blog._id}:`, error);
                blog.postDate = "Invalid date format";
            }
        } else {
            blog.postDate = "Date unavailable";
        }
    });

    return filteredBlogs;
};


exports.getlatestevents = async (slug) => {  
    const websiteID = await getWebsiteID();
    const data = await fetchData(`${API_BASE_URL}/website/post/get-all-posts/${websiteID}`);

    if (!data || data.length === 0) {
        return []; // Return an empty array if no data is found
    }

    // Filter events with category 'EVENT' and exclude the one matching the provided slug
    const filteredEvents = data.filter(event => event.category === "EVENT" && event.seoDetails.slug !== slug);

    // Add formatted postDate to each event item
    filteredEvents.forEach(event => {
        if (event.createdAt) {
            try {
                event.postDate = new Date(event.createdAt).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                });
            } catch (error) {
                console.error(`Error formatting date for event with ID ${event._id}:`, error);
                event.postDate = "Invalid date format";
            }
        } else {
            event.postDate = "Date unavailable";
        }
    });

    return filteredEvents;
};

exports.getposts = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
   
     const data = await fetchData(`${API_BASE_URL}/website/post/get-all-posts/${websiteID}`);
     if (data && data.length > 0) {
        // Add formatted postDate to each blog item
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
     return data || null
};


exports.getlatestcasestudy = async (slug) => {
    const websiteID = await getWebsiteID();
    const data = await fetchData(`${API_BASE_URL}/website/post/get-all-posts/${websiteID}`);

    if (!data || data.length === 0) {
        return []; // Return an empty array if no data is found
    }

    // Filter case studies with category 'NEWS_FEED' and exclude the one matching the provided slug
    const filteredCaseStudies = data.filter(casestudy => 
        casestudy.category === "NEWS_FEED" && casestudy.seoDetails.slug !== slug
    );

    // If there are no case studies after filtering (i.e., only one case study exists and it is excluded), return an empty array
    if (filteredCaseStudies.length === 0) {
        return []; // No latest case studies available
    }

    // Add formatted postDate to each case study item
    filteredCaseStudies.forEach(casestudy => {
        if (casestudy.createdAt) {
            try {
                casestudy.postDate = new Date(casestudy.createdAt).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                });
            } catch (error) {
                console.error(`Error formatting date for case study with ID ${casestudy._id}:`, error);
                casestudy.postDate = "Invalid date format";
            }
        } else {
            casestudy.postDate = "Date unavailable";
        }
    });

    return filteredCaseStudies;
};
