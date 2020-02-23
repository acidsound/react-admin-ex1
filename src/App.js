import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit } from './posts';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import theme from './themes/Paperbase';
import dashboard from './dashboard';

const dataProvider = jsonServerProvider('//jsonplaceholder.typicode.com');

export default () => (
  <Admin theme={theme} dataProvider={dataProvider} authProvider={authProvider} dashboard={dashboard}>
      <Resource name="users" list={UserList} edit={EditGuesser} />
      <Resource name="posts" list={PostList} edit={PostEdit} />
  </Admin>
);