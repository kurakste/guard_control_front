import { createStore } from 'effector';

import passport1 from 'assets/img/pass1.jpg';
import passport2 from 'assets/img/pass2.jpg';
import photo from 'assets/img/photo.jpg';

const defaultState = [
  {
    id: 1,
    user: {
      id: 1,
      firstName: 'Boby!)',
      lastName: 'Dylan',
      email: 'bob@gmail.com',
      tel: '+70172345678',
      active: true,
      role: Math.floor(Math.random() * 32) + 1,
      img: photo,
      pasImg1: passport1,
      pasImg2: passport2,
      password: null,
      notes: 'Anithing you want writ here',
      createdAt: '2019-08-25T20:01:41.296Z',
      updatedAt: '2019-08-26T06:04:27.526Z',
    },
    lat: 90,
    lon: 90,
    chops:
    [
      {
        name: 'Бэтмэн',
        phone: '12245',
        notes: 'Для вызова включите бэт-сигнал',
      },
    ],
  },
  {
    id: 2,
    user: {
      id: 2,
      firstName: 'Boby!)',
      lastName: 'Dylan',
      email: 'bob@gmail.com',
      tel: '+70172345678',
      active: true,
      role: Math.floor(Math.random() * 32) + 1,
      img: photo,
      pasImg1: passport1,
      pasImg2: passport2,
      password: null,
      notes: 'Anithing you want writ here',
      createdAt: '2019-08-25T20:01:41.296Z',
      updatedAt: '2019-08-26T06:04:27.526Z',
    },
    lat: 90,
    lon: 90,
    chops:
    [
      {
        name: 'Бэтмэн',
        phone: '12245',
        notes: 'Для вызова включите бэт-сигнал',
      },
    ],
  },
];

const alarms = createStore(defaultState);

export default alarms;
