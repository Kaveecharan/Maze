import './letterAnimation.scss'

const LetterAnimation = ({letterClass, word, delay}) => {
  return (
    <span>
        {word.map((letter, i)=>(
        <span key={letter + i} className={`${letterClass} _${i+delay}`}>
            {letter}
        </span> 
        ))}
    </span>
  )
}

export default LetterAnimation