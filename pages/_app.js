import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { store, persistor } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";
import Layout from "../src/components/layout/layout.component";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps}></Component>
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
