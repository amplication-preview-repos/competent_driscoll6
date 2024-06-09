import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AuthorInformationList } from "./authorInformation/AuthorInformationList";
import { AuthorInformationCreate } from "./authorInformation/AuthorInformationCreate";
import { AuthorInformationEdit } from "./authorInformation/AuthorInformationEdit";
import { AuthorInformationShow } from "./authorInformation/AuthorInformationShow";
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
        title={"Author"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AuthorInformation"
          list={AuthorInformationList}
          edit={AuthorInformationEdit}
          create={AuthorInformationCreate}
          show={AuthorInformationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
