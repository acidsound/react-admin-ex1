import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit } from './posts';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('//jsonplaceholder.typicode.com');

export default () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={EditGuesser} />
      <Resource name="posts" list={PostList} edit={PostEdit} />
  </Admin>
);