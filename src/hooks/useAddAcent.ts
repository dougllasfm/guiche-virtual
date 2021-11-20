/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

const useAddAcent = function useAddAcent() {
  const [acents, setAcents] = useState('')
  const ArrayAcents: string[] = []
  function addAcent(newAcent: string) {
    setAcents(newAcent)
    ArrayAcents.push(newAcent)
  }

  return { ArrayAcents, addAcent }
}

export default useAddAcent
