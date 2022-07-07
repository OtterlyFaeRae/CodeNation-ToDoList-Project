const Form = ({handleSubmit, input, setInput}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter a task:
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </label>
            <input id="submit" type="submit"/>
        </form>
    )
}

export default Form