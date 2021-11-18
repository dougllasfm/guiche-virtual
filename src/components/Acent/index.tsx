const Acent = function Acent() {
  return (
    <label
      onClick={() => {
        if (statusAcents !== 2) {
          if (statusAcents === 1) setStatusAcents(0)
          else setStatusAcents(1)
        }
      }}
      className={() => {
        let name
        if (statusAcents === 1) {
          name = 'selected'
        } else if (!statusAcents) {
          name = 'not-reserved'
        } else {
          name = 'reserved'
        }
      }}
      htmlFor="x"
      onKeyDown={handleKeyDown}
      aria-hidden="true"
    >
      3
    </label>
  )
}

export default Acent
