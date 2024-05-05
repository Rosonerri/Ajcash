import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./global/store";
import { Provider } from "react-redux";

const persistore = persistStore(store);
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>
          <RouterProvider router={mainRoute} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
