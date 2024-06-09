import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EbookMarketingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <div />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Keywords" multiline source="keywords" />
        <NumberInput label="Pricing" source="pricing" />
        <TextInput label="Subtitle" source="subtitle" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
