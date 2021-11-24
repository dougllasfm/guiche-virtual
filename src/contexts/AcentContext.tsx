/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useState } from 'react'

type AcentProps = {
  acents: string[]
  reserveds: string[]
  addAcent: (newAcent: string) => void
  removeAcent: (remove: string) => void
  listReserveds: (acent: string) => void
}

type AcentContextProviderProps = {
  children: ReactNode
}

export const AcentContext = createContext({} as AcentProps)

export const AcentContextProvider = function AcentContextProvider(
  props: AcentContextProviderProps
) {
  const [acents, setAcents] = useState<string[]>([])
  const reserveds: string[] = []

  function addAcent(newAcent: string) {
    if (acents.length <= 3) {
      setAcents([...acents, newAcent])
    }
  }

  function removeAcent(remove: string) {
    for (let index = 0; index < acents.length; index += 1) {
      if (acents[index] === remove) {
        acents.splice(index, 1)
        setAcents([...acents])
      }
    }
  }

  function listReserveds(acent: string) {
    console.log(acent)
    reserveds.push(acent)
    console.log(reserveds)
  }

  return (
    <AcentContext.Provider
      value={{ acents, addAcent, removeAcent, reserveds, listReserveds }}
    >
      {props.children}
    </AcentContext.Provider>
  )
}
