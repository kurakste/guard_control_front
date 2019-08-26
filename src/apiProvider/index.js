import axios from 'axios';
import { async } from 'q';
const api_url = process.env.REACT_APP_API_URL;

const param = {

};

const getAllUsers = async () => {
  const url = `${api_url}/users`;

  try {
    const response = await axios.get(url, param)

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response
  } catch (e) {

  }
}

const getUser = async (id) => {
  const url = `${api_url}/users?id=${id}`;

  try {
    const response = await axios.get(url, param)

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response
  } catch (e) {

  }
}

const getAllAlarms = async () => {
  const url = `${api_url}/alarms`;

  try {
    const response = await axios.get(url, param)

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response
  } catch (e) {

  }
}

const getAlarmStatus = async (id) => {
  const url = `${api_url}/alarms?id=${id}`;

  try {
    const response = await axios.get(url, param)

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response
  } catch (e) {

  }
}

const getSecurityCompanys = async () => {
  const url = `${api_url}/security`;

  try {
    const response = await axios.get(url, param)

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response
  } catch (e) {

  }
}

const getSecurityCompanyInfo = async (id) => {
  const url = `${api_url}/security?id=${id}`;

  try {
    const response = await axios.get(url, param)

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response
  } catch (e) {

  }
}

const changeRequestStatus = async (id, status) => {
  const url = `${api_url}/users?id=${id}`;

  try {
    const response = await axios.post(url, {
      ...param,
      ...status
    })

    /*Думаю, что это должен быть объект с несколькими полями, например, решение и текст */

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response
  } catch (e) {

  }
}

const changeAlarmStatus = async (id, status) => {
  const url = `${api_url}/alarms?id=${id}`;

  try {
    const response = await axios.post(url, {
      ...param,
      ...status
    })

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response
  } catch (e) {

  }
}

const deleteUser = async (id) => {
  const url = `${api_url}/users?id=${id}`;

  try {
    const response = await axios.delete(url, param)

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response
  } catch (e) {

  }
}