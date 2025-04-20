import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider, Spin } from "antd";
import AppContextProvider from "./context/app/provider";
import { BrowserRouter } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EditContextProvider from "./context/edit/provider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const LazyComponent = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <EditContextProvider>
        <AppContextProvider>
          <ConfigProvider
            theme={{
              components: {
                DatePicker: {
                  colorLink: "#F5DEB4",
                  colorLinkHover: "#7E4F25",
                },
              },
              token: {
                colorPrimary: "#F8B01C",
                colorSuccess: " #273369",
                colorTextSecondary: "#17427A",
                fontFamily: "Cairo",
              },
            }}
          >
            <Suspense
              fallback={
                <div className="spinner-container">
                  <Spin size="default" />
                </div>
              }
            >
              <LazyComponent />
            </Suspense>
          </ConfigProvider>
        </AppContextProvider>
      </EditContextProvider>
    </DndProvider>
  </BrowserRouter>
);
