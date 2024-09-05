import { del, get, patch, post, put } from "./http-provider";

const SERVICE_URLS = {

    // Common Management
    uploadImage: "upload",

    // Auth Management
    login: "auth/login",
    googleLogin: "auth/google",
    appleLogin: "auth/AppleGoogleLogin",
    signup: "auth/signup",
    getUser: "main_user/",

    //Member Management
    getMembers: "main_user/members?limit=20&page=1",
    addMember: "main_user/add_member",
    editMember: "member/",
    deleteMember: "member/",

    //Transaction Management
    getTransactions: "transaction?limit=10&page=1&to=",
    transferFunds: "wallet/transfer",
    topupWallet: "wallet",
};

// Common Managemnt
const uploadImage = (data) => post(SERVICE_URLS.uploadImage, data, true);

//Auth Management
const login = data => post(SERVICE_URLS.login, data);
const googleLogin = data => post(SERVICE_URLS.googleLogin, data);
const appleLogin = data => post(SERVICE_URLS.appleLogin, data);
const register = data => post(SERVICE_URLS.signup, data);
const getUser = params => get(SERVICE_URLS.getUser + params);

//Member Management
const getMembers = () => get(SERVICE_URLS.getMembers);
const addMember = data => post(SERVICE_URLS.addMember, data);
const editMember = (params, data) => patch(SERVICE_URLS.editMember + params, data);
const deleteMember = params => del(SERVICE_URLS.deleteMember + params);


//Transaction Management
const getTransactions = (params) => get(SERVICE_URLS.getTransactions + params);
const transferFunds = (data) => post(SERVICE_URLS.transferFunds, data);
const topupWallet = (data) => post(SERVICE_URLS.topupWallet, data);





const apiServices = {

    //Common Management
    uploadImage,

    // Auth Management
    login,
    googleLogin,
    appleLogin,
    register,
    getUser,

    //Member Management
    getMembers,
    addMember,
    editMember,
    deleteMember,


    // Transaction Management
    getTransactions,
    transferFunds,
    topupWallet


};

export default apiServices;
