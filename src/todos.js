import React from 'react';
import { TextField, List, Datagrid, ReferenceField, BooleanField } from 'react-admin';

export const TodoList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
              <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <BooleanField source="completed" />
        </Datagrid>
    </List>
);