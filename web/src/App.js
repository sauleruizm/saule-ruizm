import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './components/Layout';
import messages from './components/Message';
import './styles/App.css';

function App() {
  const [locale, setLocale] = useState('en');

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;
