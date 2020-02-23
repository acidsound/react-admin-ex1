import React from 'react';
import { List, Datagrid, ReferenceField, TextField, SimpleForm, Edit, ReferenceInput, SelectInput, TextInput } from 'react-admin';

export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) =>
    <span>Post {record ? `${record.title}` : ''}</span>;

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);