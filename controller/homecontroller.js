const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');

exports.getHomeDesktopBanner = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/banner/get-all-banners/${websiteID}?type=HOME_BANNER`);
     return data || null
     
};

exports.getAdBanner = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/banner/get-all-banners/${websiteID}?type=AD_BANNER`);
     return data || null
     
};

exports.getHomepopupBanner = async () => {
    try {
        const websiteID = await getWebsiteID();
        const data = await fetchData(`${API_BASE_URL}/website/banner/get-all-banners/${websiteID}?type=POPUP_BANNER`);

        if (data && Array.isArray(data) && data.length > 0) {
            return data; // Return banners
        } else {
            return []; // Return empty array if no banners
        }
    } catch (error) {
        
        return []; // Return empty array on error
    }
};



exports.gettestimonial = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/testimonial/get-all-testimonials/${websiteID}`);
     return data || null
};


exports.getclientle = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/association/get-all-associations/${websiteID}?type=CLIENT`);
     return data || null
};

exports.getjobs = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/job-listing/get-all-jobs/${websiteID}`);
     return data || null
};
exports.getjobdetails = async (slug) => {  
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/job-listing/get-all-jobs/${websiteID}`);

    if (data && Array.isArray(data)) {
        return data.find(job => job.seoDetails?.slug === slug) || null;
    }

    return null;
};


exports.getspecialization = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/specialization/get-all-specializations/${websiteID}`);
     return data || null
};


exports.getdoctors = async (req, res) => {  
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/doctor-management/get-all-doctors/${websiteID}`);

    if (data && Array.isArray(data)) {
        return data.reverse(); // Ensures LIFO order
    }

    return data || null;
};
exports.getdoctordetails = async (id) => {  
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/doctor-management/get-all-doctors/${websiteID}`);

    // If data exists, filter the doctor by the provided id
    if (data) {
        const doctor = data.find(item => item._id === id); // Assuming `_id` is the field you're comparing with
        return doctor || null; // Return the doctor or null if not found
    }
    
    return null; // Return null if no data is fetched
};
