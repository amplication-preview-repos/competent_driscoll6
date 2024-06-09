import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AuthorInformationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Biography" multiline source="biography" />
        <div />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
