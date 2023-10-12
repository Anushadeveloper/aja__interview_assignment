import './index.css'

const ChildComp = props => {
  const {currentVal, childListItem, currentParentVal} = props

  const onclickChildButton = () => {
    const lastnum = childListItem.pop()

    currentParentVal(lastnum)
  }

  return (
    <>
      <h1 className="childVal">
        Child Value : <span className="val">{currentVal}</span>
      </h1>
      <button
        type="button"
        className="childButton"
        onClick={onclickChildButton}
      >
        Child button
      </button>
    </>
  )
}

export default ChildComp
