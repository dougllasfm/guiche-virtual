/* eslint-disable react/jsx-no-bind */
/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import { useState, useContext } from 'react'
import { Label } from './styles'
import { AcentContext } from '../../../contexts/AcentContext'

type Props = {
  number: string
  statusAcents: number
}

const Acent = function Acent({ number, statusAcents }: Props) {
  const { acents, addAcent, removeAcent, reserveds } = useContext(AcentContext)

  const [acent, setAcent] = useState(() => {
   if (reserveds.find(element => element === number) ) {
     return 2
   }
     return statusAcents
  })


  function SetAcent() {
    if (acents.length <= 3) {
      if (acent !== 2) {
        if (acent === 1) {
          setAcent(0)
          removeAcent(number)
        } else {
          setAcent(1)
          addAcent(number)
        }
      }
    } else if (acent === 1) {
      setAcent(0)
      removeAcent(number)
    } else alert('O limite de poltronas que vc pode comprar é 4!')
  }

  function classNameGeneration() {
    let name = 'not-reserved'
    if (acent === 1) {
      name = 'selected'
    }
    if (acent === 2) {
      name = 'reserved'
    }
    return name
  }

  return (
    <Label
      onClick={SetAcent}
      className={classNameGeneration()}
      htmlFor="x"
    >
      {number}
    </Label>
  )
}

export default Acent
