const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a new place</h1>
                <form method='POST' action="/places">
                 <div className='row'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input 
                        className='form-control' 
                        id='name'
                        name='name' required/>
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
                        <input className='btn btn-primary' type='submit' value='Add Place'/>
                    </div>
                 </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form