import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.css';
import './style/main.css';

import Catalog from './page/Catalog';
import VerifiableCredential from './page/VerifiableCredential';
import PageNotFound from './page/PageNotFound';
import Dashboard from './page/Dashboard';
import AddService from './component/Dashboard/DashboardAddService';
import Service from './page/Service';
import MentionsFr from './page/MentionsFr';
import MentionsEn from './page/MentionsEn';
import Home from './page/Home';
import Main from './page/Main';
import DashboardCatalog from './component/Dashboard/DashboardCatalog';
import DashboardMyOffer from './component/Dashboard/DashboardMyOffer';
import DashboardSurvey from './component/Dashboard/DashboardSurvey';
import DashboardConfirm from './component/Dashboard/DashboardConfirm';
import DashboardProfile from './component/Dashboard/DashboardProfile';

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <Routes>
        <Route element={<Main t={t} i18n={i18n} />} >
          <Route path="/community" element={() => { window.location.href = "https://prometheus-x.org" }} />
          <Route path="/mentionsFr" element={<MentionsFr />} />
          <Route path="/mentionsEn" element={<MentionsEn />} />      
          <Route path="/" element={<Home t={t} />} />
          <Route path="/catalogue" element={<Catalog t={t} />} />
          <Route path="/service/:id" element={<Service dashboard="false" t={t} />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard t={t} i18n={i18n} />} >
          <Route path="/dashboard/profile" element={<DashboardProfile t={t} i18n={i18n} />} />
          <Route path="/dashboard/add" element={<AddService t={t}/>} />
          <Route path="/dashboard/myoffer" element={<DashboardMyOffer t={t} />} />
          <Route path="/dashboard/catalog" element={<DashboardCatalog t={t} />} />
          <Route path="/dashboard/survey" element={<DashboardSurvey t={t} />} />
          <Route path="/dashboard/confirm" element={<DashboardConfirm />} />
          <Route path="/dashboard/service/:id" element={<Service dashboard="true" t={t} />} />
          <Route path="/dashboard/vc" element={<VerifiableCredential t={t} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;



