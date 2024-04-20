import { useState } from "react"
import { v4 as uuid } from "uuid"
import WordForm from "./WordForm"
import Story from "./Story"
import './Madlib.css'

const Madlib = () => {
    const INITIAL_STATE = []

    const [story, setStory] = useState(INITIAL_STATE)

    const createStory = (words) => {
        setStory({words, id: uuid()})
    }

    return (
        <div className="Madlib">
            <h1 className="Madlib-title">🤪Madlibs!🤪</h1>
            {story.length === 0 && (
                <div className="Madlib-form">
                    <WordForm createStory={createStory} />
                </div>
            )}
            {story.length !== 0 && (
                <div className="Madlib-story">
                    <Story key={story.id} words={story.words} />
                </div>
            )}
        </div>
    )
}

export default Madlib