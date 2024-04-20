import './Story.css'

const Story = ({words}) => {
    return (
        <div className="Story">
            <h1 className="Story-title">What's That Smell?</h1>
            <p className="Story-text">
                There once was a <span className='Story-words'>{words.noun1}</span> named <span className='Story-words'>{words.name}</span>.
            </p>
            <p className="Story-text">
            <span className='Story-words'>{words.name}</span> smelled like <span className='Story-words'>{words.adjective1} {words.noun2}</span> and <span className='Story-words'>{words.noun3}</span>.
            </p>
            <p className="Story-text">
                Everyone in town thought that <span className='Story-words'>{words.name}</span> was <span className='Story-words'>{words.adjective2}</span>, but really, <span className='Story-words'>{words.name}</span> was <span className='Story-words'>{words.adjective3}</span>.
            </p>
            <p className="Story-text">
                This made <span className='Story-words'>{words.name} {words.emotion}</span>.
            </p>
        </div>
    )
}

export default Story