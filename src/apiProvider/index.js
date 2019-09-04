/* eslint-disable consistent-return */
import axios from 'axios';
import logger from 'logger';

const apiUrl = process.env.REACT_APP_URL;

const param = {

};
/* Универсальные методы работы с пользователями */

const declineUser = async (id, role) => {
  let api = '';
  switch (true) {
    case role > 19 && role <= 29:
      api = 'decline-cp-user';
      break;
    case role >= 30:
      api = 'decline-app-user';
      break;
    default:
      api = 'decline-app-user';
  }
  const url = `${apiUrl}users/${api}`;

  return new Promise((resolve, reject) => {
    axios.post(url, { id }, param)
      .then(response => {
        if (!response.data.success) {
          logger.log('error', response.statusText);
          reject(response.statusText);
        }
        console.log('Регистрация пользователя отменена');
        resolve(response.data.payload);
      })
      .catch(e => {
        logger.log('info', e.message);
        reject(e);
      });
  });
};

const verifyUser = async (id, role) => {
  let api = '';
  switch (true) {
    case role > 19 && role <= 29:
      api = 'verify-cp-user';
      break;
    case role >= 30:
      api = 'verify-app-user';
      break;
    default:
      api = 'verify-app-user';
  }
  const url = `${apiUrl}users/${api}`;

  return new Promise((resolve, reject) => {
    axios.post(url, { id }, param)
      .then(response => {
        if (!response.data.success) {
          logger.log('error', response.statusText);
          reject(response.statusText);
        }
        console.log('Регистрация пользователя подтверждена.');
        resolve(response.data.payload);
      })
      .catch(e => {
        logger.log('info', e.message);
        reject(e);
      });
  });
};

const addUser = async (formData, role) => {
  let api = '';
  switch (true) {
    case role > 19 && role <= 29:
      api = 'verify-cp-user';
      break;
    case role >= 30:
      api = 'verify-app-user';
      break;
    default:
      api = 'verify-app-user';
  }
  const url = `${apiUrl}users/${api}`;

  return new Promise((resolve, reject) => {
    axios.post(url, formData, param)
      .then(response => {
        if (!response.data.success) {
          logger.log('error', response.statusText);
          reject(response.statusText);
        }
        resolve(response.data.payload);
      })
      .catch(e => {
        logger.log('info', e.message);
        reject(e);
      });
  });
};

/* Методы работы с пользователями приложения */

const getAllAppUsers = async () => {
  const url = `${apiUrl}users/new-app-users`;

  return new Promise((resolve, reject) => {
    axios.get(url, param)
      .then(response => {
        if (!response.data.success) {
          logger.log('error', response.statusText);
          reject(response.statusText);
        }
        resolve(response.data.payload);
      })
      .catch(e => {
        logger.log('info', e.message);
        reject(e);
      });
  });
};

/* Методы работы с пользователями командной панели */

const getAllCpUsers = async () => {
  const url = `${apiUrl}users/new-cp-users`;

  return new Promise((resolve, reject) => {
    axios.get(url, param)
      .then(response => {
        if (!response.data.success) {
          logger.log('error', response.statusText);
          reject(response.statusText);
        }
        resolve(response.data.payload);
      })
      .catch(e => {
        logger.log('info', e.message);
        reject(e);
      });
  });
};

/* Дальше идут заглушки */
const getUser = async (id) => {
  const url = `${apiUrl}/users?id=${id}`;

  try {
    const response = await axios.get(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const getAllAlarms = async () => {
  const url = `${apiUrl}/alarms`;

  try {
    const response = await axios.get(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const getAlarmStatus = async (id) => {
  const url = `${apiUrl}/alarms?id=${id}`;

  try {
    const response = await axios.get(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const getSecurityCompanys = async () => {
  const url = `${apiUrl}/security`;

  try {
    const response = await axios.get(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const getSecurityCompanyInfo = async (id) => {
  const url = `${apiUrl}/security?id=${id}`;

  try {
    const response = await axios.get(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const changeRequestStatus = async (id, status) => {
  const url = `${apiUrl}/users?id=${id}`;

  try {
    const response = await axios.post(url, {
      ...param,
      ...status,
    });

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const changeAlarmStatus = async (id, status) => {
  const url = `${apiUrl}/alarms?id=${id}`;

  try {
    const response = await axios.post(url, {
      ...param,
      ...status,
    });

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

const deleteUser = async (id) => {
  const url = `${apiUrl}/users?id=${id}`;

  try {
    const response = await axios.delete(url, param);

    if (!response.success) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (e) {
    logger.log('info', e.message);
  }
};

export {
  getAllAppUsers,
  getAllCpUsers,
  declineUser,
  addUser,
  verifyUser,
  getUser,
  getAllAlarms,
  getAlarmStatus,
  getSecurityCompanys,
  changeRequestStatus,
  getSecurityCompanyInfo,
  changeAlarmStatus,
  deleteUser,
};
