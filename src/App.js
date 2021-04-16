import React, {Fragment} from 'react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Sidebar from './components/shared/Sidebar';

function App () {
  return (
    <Fragment>
      <Header />
      <section className="grid con_1_4 mt-5 main_divider">
        <Sidebar />
        <main className="bg-g-1" />
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
