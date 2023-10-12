import {useState} from 'react'
import ChildComp from '../ChildComp'
import './index.css'

const ParentArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ChildArray = []

const ParentComp = () => {
  const [curVal, setVal] = useState()

  const [curPar, setCur] = useState()

  const onclickParentButton = () => {
    if (ChildArray.length + 1 <= 10) {
      const lastItem = ParentArray.pop()
      setVal(lastItem)
      ChildArray.push(lastItem)
    }
  }

  const ParentVal = val => {
    if (val !== undefined) {
      ParentArray.push(val)
      setCur(val)
    }
  }

  return (
    <div>
      <h1 className="childVal">
        Parent Value : <span className="val">{curPar}</span>
      </h1>
      <button
        className="childButton"
        type="button"
        onClick={onclickParentButton}
      >
        Parent button
      </button>
      <ChildComp
        currentVal={curVal}
        childListItem={ChildArray}
        currentParentVal={ParentVal}
      />
    </div>
  )
}

export default ParentComp
