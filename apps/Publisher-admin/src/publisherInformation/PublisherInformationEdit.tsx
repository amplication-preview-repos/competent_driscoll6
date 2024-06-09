import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PublisherInformationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="About" multiline source="about" />
        <div />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
