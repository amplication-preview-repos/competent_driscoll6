import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AuthorInformationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Biography" multiline source="biography" />
        <div />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
