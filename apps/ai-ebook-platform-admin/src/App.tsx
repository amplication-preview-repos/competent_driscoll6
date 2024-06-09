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
import { EbookMarketingList } from "./ebookMarketing/EbookMarketingList";
import { EbookMarketingCreate } from "./ebookMarketing/EbookMarketingCreate";
import { EbookMarketingEdit } from "./ebookMarketing/EbookMarketingEdit";
import { EbookMarketingShow } from "./ebookMarketing/EbookMarketingShow";
import { PublisherInformationList } from "./publisherInformation/PublisherInformationList";
import { PublisherInformationCreate } from "./publisherInformation/PublisherInformationCreate";
import { PublisherInformationEdit } from "./publisherInformation/PublisherInformationEdit";
import { PublisherInformationShow } from "./publisherInformation/PublisherInformationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"AI_EbookPlatform"}
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
        <Resource
          name="EbookMarketing"
          list={EbookMarketingList}
          edit={EbookMarketingEdit}
          create={EbookMarketingCreate}
          show={EbookMarketingShow}
        />
        <Resource
          name="PublisherInformation"
          list={PublisherInformationList}
          edit={PublisherInformationEdit}
          create={PublisherInformationCreate}
          show={PublisherInformationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
