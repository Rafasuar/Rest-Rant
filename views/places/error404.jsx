const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404:PAGE NOT FOUND</h1>
                <p>This is not the page you are looking for.</p>
            </main>
        </Def>
    )
}

module.exports = error404