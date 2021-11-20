import Acent from '../Acent'
import { Container } from './styles'

const Bus = function Bus() {
  return (
    <Container>
      <div className="acents">
        <div className="fileira1">
          <Acent number="03" />
          <Acent number="07" />
          <Acent number="11" />
          <Acent number="15" />
          <Acent number="19" />
          <Acent number="23" />
          <Acent number="27" />
          <Acent number="31" />
          <Acent number="35" />
          <Acent number="39" />
        </div>

        <div className="fileira2">
          <Acent number="04" />
          <Acent number="08" />
          <Acent number="12" />
          <Acent number="16" />
          <Acent number="20" />
          <Acent number="24" />
          <Acent number="28" />
          <Acent number="32" />
          <Acent number="36" />
          <Acent number="40" />
        </div>
        <div className="fileira3">
          <Acent number="02" />
          <Acent number="06" />
          <Acent number="10" />
          <Acent number="14" />
          <Acent number="18" />
          <Acent number="22" />
          <Acent number="26" />
          <Acent number="30" />
          <Acent number="34" />
          <Acent number="38" />
        </div>
        <div className="fileira4">
          <Acent number="01" />
          <Acent number="05" />
          <Acent number="09" />
          <Acent number="13" />
          <Acent number="17" />
          <Acent number="21" />
          <Acent number="25" />
          <Acent number="29" />
          <Acent number="33" />
          <Acent number="37" />
        </div>
      </div>
    </Container>
  )
}

export default Bus
