import ScreenSize from "../../utils/ui/screen-size"
import { AppLoading, IInternalState, sideBar, Themes } from "./context"

type Action =
  | { type: "SET_SCREEN_SIZE"; payload: { screenSize: ScreenSize } }
  | { type: "SET_LOCALE"; payload: { locale: any } }
  | { type: "SET_THEME"; payload: { theme: Themes } }
  | { type: "SET_SIDE_BAR"; payload: { collapsed: sideBar } }
  | { type: "LOADING"; payload: { loading: AppLoading[] | AppLoading } }


const reducer = (state: IInternalState, action: Action): IInternalState => {
  switch (action.type) {
    case "SET_SCREEN_SIZE":
      return { ...state, screenSize: action.payload.screenSize }

    case "LOADING":
      return {
        ...state,
      }
      case "SET_SIDE_BAR":
        return { ...state, collapsed: action.payload.collapsed }

    default:
      return state
  }
}

export default reducer
