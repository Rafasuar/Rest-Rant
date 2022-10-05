const React = require('react')
const Def = require('./default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot,c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++){
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className=' border-top col-sm-4'>
                    <h2 className='rant'>{c.rant ? 'Rant! 🤬' : 'Rave! 🤯'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>-{c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method='POST' action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                        <input type='submit' className='btn btn-danger' value='Delete Comment'/>
                    </form>
                </div>
            )
        })
    }
    return(
        <Def>
            <main>
                <div className='row'>
                    <div className='row col-sm-6 p-5'>
                        <img src={data.place.pic} alt={data.place.name}/>
                        <h3 className='p-3'>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className='col-sm-6'>
                        <h1 className='p-3 my-1'>
                            {data.place.name}
                        </h1>
                        <div className='row p-1'>
                        <h2>
                            Rating
                        </h2>
                        {rating}
                        </div>
                        <div className='row p-2 my-2'>
                        <h2>
                            Description
                        </h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisine}
                        </h4>
                        </div>
                         <a href={`/places/${data.id}/edit`} className= 'btn btn-warning m-1'>Edit</a>
                         <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger m-1'>Delete</button>
                         </form> 
                     </div>
                    <div>
                        <hr/>
                        <h2>
                            Comments:
                        </h2>
                        {comments}
                    </div>
                    <div>
                        <h2>Got your own rant or rave?</h2>
                    </div>
                    <div className='form-group mx-auto col-md-11'>
                        <label htmlFor='content'>Content</label>
                        <input className='form-control' id='content' name='content'/>
                    </div>
                    <div className='d-inline p-1 mx-5  col-sm-5 form-group'>
                        <label htmlFor='author'>Author</label>
                        <input className='form-control' id='author' name='author'></input>
                    </div>
                    <div className='d-inline p-1 mx-1 col-sm-4 form-group'>
                        <label htmlFor="customRange1" className="form-label">Star Rating</label>
                        <input type="range" className="form-range" name='stars' min='0' max='5' id="customRange1"/>
                    </div>
                    <div className='d-inline-block col-sm-1 pt-2 mx-2 form-check'>
                        <lable htmlFor='flexCheckDefault' className='form-check-label'>Rant?</lable>
                        <input className='form-check-input mx-2' name='rant' type='checkbox' value='' id='flexCheckDefault'/>
                    </div>
                    <div className='form-group m-2 p-3'>
                    <form method='POST' action='/comment'>
                        <input type='submit' className='btn btn-primary' value='Add Comment'/>
                    </form>
                    </div>
                </div>
            </main>
        </Def>
    )
}
module.exports = show