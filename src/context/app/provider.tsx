/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer, useRef } from "react"
import AppContext, { AppData, internalState, sideBar, Themes } from "./context";
import reducer from "./reducer";
import ScreenSize from "../../utils/ui/screen-size";
import { IconContext } from "react-icons";
import { useMediaQuery } from "react-responsive";

interface IProps {
  children: React.ReactNode;
}
 
const AppContextProvider: React.FC<IProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, internalState);

  /**
   * Media queries
   */
  const isLaptopOrDesktop = useMediaQuery({
    minWidth: 992,
  });
  const isMobileOrTablet = useMediaQuery({
    maxWidth: 992,
  });
  useEffect(() => {
    let screenSize: ScreenSize;

    if (isLaptopOrDesktop) screenSize = "laptopOrDesktop";
    else screenSize = "mobileOrTablet";

    dispatch({
      type: "SET_SCREEN_SIZE",
      payload: { screenSize },
    });
  }, [isLaptopOrDesktop, isMobileOrTablet]);

  const changeTheme = (theme: Themes) => {
    dispatch({ type: "SET_THEME", payload: { theme } });
  };

  const changeCollapsed = (collapsed: sideBar) => {
    dispatch({ type: "SET_SIDE_BAR", payload: { collapsed } });
  };

  return (
    <IconContext.Provider value={{ className: "react-icons-class" }}>
      <AppContext.Provider
        value={{
          ...state,
          actions: {changeCollapsed},
        }}
      >
        {props.children}
      </AppContext.Provider>
    </IconContext.Provider>
  );
};

export default AppContextProvider;
