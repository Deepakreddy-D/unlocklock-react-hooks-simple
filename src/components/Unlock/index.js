import {useState} from 'react'
import {Bg, Image, Para, Button} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const onClickButton = () => {
    setLock(prevState => !prevState)
  }

  const theImg = lock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png '
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = lock ? 'lock' : 'unlock'
  const textToDisplay = lock
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const buttonText = lock ? 'Unlock' : 'Lock'

  return (
    <>
      <Bg>
        <Image src={theImg} alt={altText} />
        <Para>{textToDisplay}</Para>
        <Button onClick={onClickButton}>{buttonText}</Button>
      </Bg>
    </>
  )
}
export default Unlock
