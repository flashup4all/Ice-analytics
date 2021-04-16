import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router';
// COMPONENTS
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Sidebar from './components/shared/Sidebar';
// PAGES
import ProspectivePage from './components/shared/pages/ProspectivePage';
import ActiveSitepage from './components/shared/pages/ActiveSitepage';

function App () {
  return (
    <Fragment>
      <Header />
      <section className="grid con_1_4 mt-5 main_divider">
        <Sidebar />
        <main className="bg-g-1">
          <Switch>
            <Route exact path="/">
              <ProspectivePage />
            </Route>
            <Route path="/activesite">
              <ActiveSitepage />
            </Route>
          </Switch>
        </main>
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
