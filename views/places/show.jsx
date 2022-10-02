const React = require('react')
const Def = require('./default')

function show (data) {
    return(
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6 p-5'>
                        <img src={data.place.pic} alt={data.place.name}/>
                        <h3 className='p-3'>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className='col-sm-6'>
                        <h1 className='p-1'>
                            {data.place.name}
                        </h1>
                        <div className='p-1'>
                        <h2>
                            Rating
                        </h2>
                        <h3>
                            Not Rated
                        </h3>
                        </div>
                        <div className='p-1'>
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
                            Comments
                        </h2>
                        <h3>
                            No comments yet
                        </h3>
                    </div>  
                </div>
            </main>
        </Def>
    )
}
module.exports = show