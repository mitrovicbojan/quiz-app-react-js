import React, {useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import '../App.css'
import {Questions} from '../Helpers/QuestionBank'

const EndScreen = () => {

    const { score, setScore, setGameState } = useContext(QuizContext)

    const restartQuiz = () => {
        setScore(0)
        setGameState('menu')
    }
    return (
        <div className='EndScreen'>
            <h1>Finished</h1>
            <h3>You got {score} out of {Questions.length} questions correct.</h3>
            <button onClick={restartQuiz}>Try Again</button>
        </div>
    )
}

export default EndScreen
