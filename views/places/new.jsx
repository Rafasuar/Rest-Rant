const React = require('react')
const Def = require('./default')

function new_form (data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className='alert-danger text-dark bg-danger'>
                {data.message}
            </h4>
        )
    }
    return (
        <Def>
            <main>
                <h1>Add a new place</h1>
                {message}
                <form method='POST' action="/places">
                 <div className='row m-1'>
                    <div className='form-group col-sm-6 p-1'>
                        <label htmlFor='name'>Name</label>
                        <input 
                        className='form-control' 
                        id='name'
                        name='name' required/>
                    </div>
                    <div className='form-group col-sm-6 p-1'>
                        <label htmlFor='pic'>Picture</label>
                        <input 
                        className='form-control' 
                        id='pic' 
                        name='pic'/>
                    </div>
                    <div className='form-group col-sm-4 p-2'>
                        <label htmlFor='city'>City</label>
                        <input 
                        className='form-control' 
                        id='city' 
                        name='city'/>
                    </div>
                    <div className='form-group col-sm-4 p-2'>
                        <label htmlFor='state'>State</label>
                        <input 
                        className='form-control' 
                        id='state' 
                        name='state'/>
                    </div>
                    <div className='form-group col-sm-2 p-2'>
                        <label htmlFor='cuisine'>Cuisine</label>
                        <input 
                        className='form-control' 
                        id='cuisine' name='cuisine' 
                        required/>
                    </div>
                    <div className='form-group col-sm-2 p-2'>
                        <label htmlFor='founded'>Founded Year</label>
                        <input
                        type='number'
                        className='form-control'
                        id='founded'
                        name='founded'
                        value={new Date().getFullYear()}/>
                    </div>
                    <div className='form-group m-2 p-3'>
                        <input className='btn btn-primary' type='submit' value='Add Place'/>
                    </div>
                 </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form