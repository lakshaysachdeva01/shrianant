const API_BASE_URL = process.env.API_BASE_URL; 
const WEBSITE_UID = process.env.WEBSITE_UID;
const S3_BASE_URL = process.env.S3_BASE_URL;
const WEBSITE_ID_KEY = "websiteProjectId";

const BANNER_TYPES = {
    HOME_BANNER: "HOME_BANNER",
    POPUP_BANNER: "POPUP_BANNER",
    AD_BANNER: "AD_BANNER",
  };

  const FETCH_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  };
  
  const CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS={
    name : "strings.stringOne",
    city:"strings.stringThree",
    phone : "strings.stringTwo",
    email: "email",
    remarks: "remarks",
   };

   const WIZARDFORM_ENQUIRY_DYNAMIC_FIELDS_KEYS={
    name : "fullName",
    age:"age",
    gender:"gender",
    phone:"contactNo",
    email: "email",
    city:"city",
    address:"address",
    remarks: "remarks",
    department:"departmentId",
    doctor:"doctorId",
    date:"prefDate",
    time:"prefTime",
   };

module.exports={
  API_BASE_URL,
    WEBSITE_UID,
    S3_BASE_URL,
    BANNER_TYPES,
    FETCH_METHODS,
    WEBSITE_ID_KEY,
    CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    WIZARDFORM_ENQUIRY_DYNAMIC_FIELDS_KEYS,
};
