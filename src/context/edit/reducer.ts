import { IInternalState, widghet } from "./context"

type Action =
  { type: "ADD"; payload: { data: widghet } }
  | { type: "EDIT"; payload: { data: widghet } }
  | { type: "SAVE"; payload: { data: widghet[] } }
  | { type: "DELETE"; payload: { id: number } }
  | { type: "GET" }

const reducer = (state: IInternalState, action: Action): IInternalState => {
  switch (action.type) {
    case "ADD":
      return { ...state, widghets: [...state?.widghets, action?.payload?.data] }
    case "EDIT":
      return { ...state, widghets: [...state?.widghets.filter((el) => el?.id !== action?.payload?.data.id), action?.payload?.data] }
    case "DELETE":
      return { ...state, widghets: [...state?.widghets.filter((el) => el?.id !== action?.payload?.id)] }
    case "SAVE":
      localStorage.setItem("page", JSON.stringify(action?.payload?.data))
      return { ...state, page: action?.payload?.data }
    case "GET":
      const stored = localStorage.getItem("page");
      const initial = stored ? JSON.parse(stored) : null;
      return { ...state, page: initial }
    default:
      return state
  }
}

export default reducer
