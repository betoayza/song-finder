import React from 'react'

const Form = ({handleSearch}) => {
  return (
    <div>
        <h2>Find:</h2>
        <form>
            <div className="form-group w-25">                
                <input type="text" className="form-control mb-2" name="artist" placeholder='Artist...'/>
                <input type="text" className="form-control mb-2" name="song" placeholder='Song...' />
                <input type="submit" className="btn btn-success mb-2" value="Find!" />
            </div>
        </form>
    </div>
  )
}

export default Form;