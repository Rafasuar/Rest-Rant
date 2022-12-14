const React = require('react')
const Def = require('./default')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
            <div className='row'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input 
                        className='form-control' 
                        id='name'
                        name='name'
                        value={data.place.name} required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Picture</label>
                        <input 
                        className='form-control' 
                        id='pic' 
                        name='pic'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input 
                        className='form-control' 
                        id='city' 
                        name='city'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input 
                        className='form-control' 
                        id='state' 
                        name='state'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisine'>Cuisine</label>
                        <input 
                        className='form-control' 
                        id='cuisine' name='cuisine' 
                        required/>
                    </div>
                    <div>
                        <label htmlFor='founded'>Founded Year</label>
                        <input
                        type='number'
                        className='form-control'
                        id='founded'
                        name='founded'
                        value={new Date().getFullYear()}/>
                    </div>
                    <div>
                        <input className='btn btn-primary' type='submit' value='Add Place'/>
                    </div>
                 </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
