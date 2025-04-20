import { createContext } from "react"
import ScreenSize from "../../utils/ui/screen-size"

export type AppLoading = "languages" | "roles" | "permissions"

export type AppData = "languages" | "roles" | "permissions"

export type Themes = "dark" | "light"
export type sideBar ="open" | "close"
export interface IInternalState {
  loading: AppLoading[]
  screenSize: ScreenSize
  collapsed : sideBar
}

export const internalState: IInternalState = {
  loading: [],
  screenSize: "laptopOrDesktop",
  collapsed : "close"
}

export interface IExternalState extends IInternalState {
  actions: {
    changeCollapsed: (data: sideBar) => void;
  }
}

export const externalState: IExternalState = {
  ...internalState,
  actions: {
    changeCollapsed: () => null
  },
}

const AppContext = createContext(externalState)

export default AppContext
