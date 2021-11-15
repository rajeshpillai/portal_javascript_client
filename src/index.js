
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

async function getNav(id) {
  try {

    let api = new PortalApi(`${END_POINT}`);
    let result = await api.getNavigation(id);
    console.log(result.data);
  }catch (e) {
    console.log(`Please check the resource ID to be accessed for navigation.`);
  }
}

async function getPage(id) {
  try {
    let api = new PortalApi(`${END_POINT}`);
    let result = await api.getPage(id);
    console.log(result.data);
  }
  catch (e) {
    console.log(`Please check the resource ID to be accessed for page.`);
  }
}

// TODO: Pass the ID below

getNav(4);
getPage(1);


