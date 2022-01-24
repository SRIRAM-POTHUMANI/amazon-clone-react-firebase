// http://localhost:5001/clone-6e19d/us-central1/api

import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-e-commerce-b99ca.cloudfunctions.net/api",
});

// const stripe = require("stripe")(
//   "sk_test_51KKokdSDuKOVlQiRC9VpOvVDLdK1fy6foBY5YGRtVcadISmJHgmrGM1Sbo7XhZTIRq9D9OE7gNfScQ05F022jg6g00L7pQ49IA"
// );

export default instance;
