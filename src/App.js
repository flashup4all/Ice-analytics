import React, {createContext} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
// COMPONENTS
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Sidebar from './components/shared/Sidebar';
// PAGES
import ProspectivePage from './components/pages/ProspectivePage';
import ActiveSitepage from './components/pages/ActiveSitepage';
// HOOKs
import UseModal from './components/hooks/UseModal';

export const Appctx = createContext ();

function App () {
  const {close, isOpen, open} = UseModal (true);

  return (
    <Appctx.Provider
      value={{
        open,
        close,
        isOpen,
      }}
    >
      <Header />
      <section className="grid con_1_4 mt-5 main_divider">
        <Sidebar />
        <main className="bg-g-1">
          <Switch>
            <Route exact path="/prospective">
              <ProspectivePage />
            </Route>
            <Route exact path="/activesite">
              <ActiveSitepage />
            </Route>
            <Redirect to="/prospective" />
          </Switch>
        </main>
      </section>
      <Footer />
    </Appctx.Provider>
  );
}

export default App;
