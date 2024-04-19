

const Story = ({words}) => {
    return (
        <div className="Story">
            <h1 className="Story-title">What's That Smell?</h1>
            <p className="Story-text">
                There once was a {words.noun1} named {words.name}.
                {words.name} smelled like {words.adjective1} {words.noun2} and {words.noun3}.
                Everyone in town thought that {words.name} was {words.adjective2}, but really,
                {words.name} was {words.adjective3}. This made {words.name} {words.emotion}.
            </p>
        </div>
    )
}

export default Story