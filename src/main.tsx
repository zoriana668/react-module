import { Provider } from "react-redux";
import { store } from "./redux/store";
import {createRoot} from "react-dom/client";
import {MainLayout} from "./layouts/MainLayout";


createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <MainLayout/>
    </Provider>
);


