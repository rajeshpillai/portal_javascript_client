
///http://localhost:4000/api/navigations/:nav_id"
import axios from 'axios';

export class PortalApi {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getNavigation(id) {
    const data  = await axios.get(`${END_POINT}/navigations/${id}`);
    return data;
  }

  async getPage(id) {
    const data  = await axios.get(`${END_POINT}/page/${id}`);
    return data;
  }
}

const END_POINT = "http://localhost:4000/api";

async function getNav() {
  let api = new PortalApi(`${END_POINT}`);
  let result = await api.getNavigation(1);
  console.log(result.data);
}

async function getPage(id) {
  let api = new PortalApi(`${END_POINT}`);
  let result = await api.getPage(id);
  console.log(result.data);
}


getNav();
getPage(1);


