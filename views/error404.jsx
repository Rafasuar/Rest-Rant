const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main className='errorpge'>
                <h1>404:PAGE NOT FOUND</h1>
                <p className='errormsg'>This is not the page you are looking for.</p>
                <img className="jupiter" src='/images/angryjoopie.PNG'/>
            </main>
        </Def>
    )
}

module.exports = error404