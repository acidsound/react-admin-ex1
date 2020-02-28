import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { TodoList } from './todos';
import authProvider from './authProvider'
const dataProvider = jsonServerProvider('//jsonplaceholder.typicode.com');

export default () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="users" list={UserList}/>
      <Resource name="todos" list={TodoList}/>
  </Admin>
);