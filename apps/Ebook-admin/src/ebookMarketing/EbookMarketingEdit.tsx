import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EbookMarketingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <div />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Keywords" multiline source="keywords" />
        <NumberInput label="Pricing" source="pricing" />
        <TextInput label="Subtitle" source="subtitle" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
