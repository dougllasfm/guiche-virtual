/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
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

import { useState, useContext, useEffect } from 'react'
import { Label } from './styles'
import { AcentContext } from '../../../contexts/AcentContext'

type Props = {
  number: string
}

const Acent = function Acent({ number }: Props) {
  const { acents, addAcent, removeAcent } = useContext(AcentContext)
  const [statusAcents, setStatusAcents] = useState(() => {
    if (acents.length === 3) {
      return 2
    }
  })

  function SetAcent() {
    if (acents.length <= 3) {
      if (statusAcents !== 2) {
        if (statusAcents === 1) {
          setStatusAcents(0)
          removeAcent(number)
        } else {
          setStatusAcents(1)
          addAcent(number)
        }
      }
    } else if (statusAcents === 1) {
      setStatusAcents(0)
      removeAcent(number)
    } else alert('O limite de poltronas que vc pode comprar é 4!')
  }

  function classNameGeneration() {
    let name = 'not-reserved'
    if (statusAcents === 1) {
      name = 'selected'
    }
    if (statusAcents === 2) {
      name = 'reserved'
    }
    return name
  }

  return (
    <Label onClick={SetAcent} className={classNameGeneration()} htmlFor="x">
      {number}
    </Label>
  )
}

export default Acent
