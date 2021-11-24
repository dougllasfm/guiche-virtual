import Acent from '../Acent'
import { Container } from './styles'

const Bus = function Bus() {
  return (
    <Container>
      <div className="acents">
        <div className="fileira1">
          <Acent number="03" statusAcents={0} />
          <Acent number="07" statusAcents={0} />
          <Acent number="11" statusAcents={0} />
          <Acent number="15" statusAcents={0} />
          <Acent number="19" statusAcents={0} />
          <Acent number="23" statusAcents={0} />
          <Acent number="27" statusAcents={0} />
          <Acent number="31" statusAcents={0} />
          <Acent number="35" statusAcents={0} />
          <Acent number="39" statusAcents={0} />
        </div>

        <div className="fileira2">
          <Acent number="04" statusAcents={0} />
          <Acent number="08" statusAcents={0} />
          <Acent number="12" statusAcents={0} />
          <Acent number="16" statusAcents={0} />
          <Acent number="20" statusAcents={0} />
          <Acent number="24" statusAcents={0} />
          <Acent number="28" statusAcents={0} />
          <Acent number="32" statusAcents={0} />
          <Acent number="36" statusAcents={0} />
          <Acent number="40" statusAcents={0} />
        </div>
        <div className="fileira3">
          <Acent number="02" statusAcents={0} />
          <Acent number="06" statusAcents={0} />
          <Acent number="10" statusAcents={0} />
          <Acent number="14" statusAcents={0} />
          <Acent number="18" statusAcents={0} />
          <Acent number="22" statusAcents={0} />
          <Acent number="26" statusAcents={0} />
          <Acent number="30" statusAcents={0} />
          <Acent number="34" statusAcents={0} />
          <Acent number="38" statusAcents={0} />
        </div>
        <div className="fileira4">
          <Acent number="01" statusAcents={0} />
          <Acent number="05" statusAcents={0} />
          <Acent number="09" statusAcents={0} />
          <Acent number="13" statusAcents={0} />
          <Acent number="17" statusAcents={0} />
          <Acent number="21" statusAcents={0} />
          <Acent number="25" statusAcents={0} />
          <Acent number="29" statusAcents={0} />
          <Acent number="33" statusAcents={0} />
          <Acent number="37" statusAcents={0} />
        </div>
      </div>
    </Container>
  )
}

export default Bus
