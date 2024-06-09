import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EbookMarketingList } from "./ebookMarketing/EbookMarketingList";
import { EbookMarketingCreate } from "./ebookMarketing/EbookMarketingCreate";
import { EbookMarketingEdit } from "./ebookMarketing/EbookMarketingEdit";
import { EbookMarketingShow } from "./ebookMarketing/EbookMarketingShow";
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
        title={"Ebook"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EbookMarketing"
          list={EbookMarketingList}
          edit={EbookMarketingEdit}
          create={EbookMarketingCreate}
          show={EbookMarketingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
