/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer } from "react"
import EditContext, { internalState, widghet } from "./context";
import reducer from "./reducer";

interface IProps {
  children: React.ReactNode;
}

const EditContextProvider: React.FC<IProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, internalState);


  const addWidghets =  (data: widghet) => {

    dispatch({ type: "ADD", payload: { data } });
  };

  const deleteWidghets = (id: number) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  const editWidghets = (data: widghet) => {
    dispatch({ type: "EDIT", payload: { data } });
  };

  const savePage = (data: widghet[]) => {
    dispatch({ type: "SAVE", payload: { data } });

  };

  const getPge = () => {
    dispatch({ type: "GET" });
  };

  return (

    <EditContext.Provider
      value={{
        ...state,
        actions: { addWidghets, deleteWidghets, editWidghets, savePage, getPge },
      }}
    >
      {props.children}
    </EditContext.Provider>

  );
};

export default EditContextProvider;
