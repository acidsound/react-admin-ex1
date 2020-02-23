import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users'
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('//jsonplaceholder.typicode.com');

export default () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
  </Admin>
);