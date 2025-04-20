import { createContext } from "react"

export interface widghet {
image?: string
title ? : string
description: string
id: number
locationX?: number
locationY?: number
}

export interface IInternalState {
  widghets: widghet[]
  page?: widghet[]
}

export const internalState: IInternalState = {
  widghets: [],
  page :[]
}

export interface IExternalState extends IInternalState {
  actions: {
    addWidghets: (data: widghet) => void;
    editWidghets: (data: widghet) => void;
    deleteWidghets: (id:number) => void;
    savePage : (data:widghet[])=> void;
    getPge: ()=> void;
  }
}

export const externalState: IExternalState = {
  ...internalState,
  actions: {
    addWidghets: () => null,
    editWidghets:() => null,
    deleteWidghets: () => null,
    savePage:() => null,
    getPge:() => null,
  },
}

const EditContext = createContext(externalState)

export default EditContext
