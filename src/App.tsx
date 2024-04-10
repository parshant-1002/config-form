import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";
import { Suspense } from "react";
import { store, persistor } from "./Store";
import RootRouter from "./Routes/RootRouter";
import "./App.css";
import "./i18n/config";

const baseName = import.meta.env.VITE_BASE_NAME;

function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <Suspense fallback="...Loading">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HelmetProvider>
            <BrowserRouter basename={baseName}>
              <RootRouter />
            </BrowserRouter>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default App;
