import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PublisherInformationList } from "./publisherInformation/PublisherInformationList";
import { PublisherInformationCreate } from "./publisherInformation/PublisherInformationCreate";
import { PublisherInformationEdit } from "./publisherInformation/PublisherInformationEdit";
import { PublisherInformationShow } from "./publisherInformation/PublisherInformationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Publisher"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PublisherInformation"
          list={PublisherInformationList}
          edit={PublisherInformationEdit}
          create={PublisherInformationCreate}
          show={PublisherInformationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
