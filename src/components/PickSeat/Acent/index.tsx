/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import useAddAcent from '../../../hooks/useAddAcent'
import { Label } from './styles'

type Props = {
  number: string
}

const Acent = function Acent({ number }: Props) {
  const [statusAcents, setStatusAcents] = useState(0)
  const { ArrayAcents, addAcent } = useAddAcent()

  function SetAcent() {
    if (statusAcents !== 2) {
      if (statusAcents === 1) {
        setStatusAcents(0)
      } else {
        setStatusAcents(1)
        addAcent(number)
      }
    }
  }

  return (
    <Label
      onClick={SetAcent}
      className={`${
        statusAcents ? 'selected' : !statusAcents ? 'not-reserved' : 'reserved'
      }`}
      htmlFor="x"
    >
      {number}
    </Label>
  )
}

export default Acent
