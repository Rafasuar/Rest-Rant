const React = require('react')
const Def = require('./default')

function home () {
    return (
        <def>
            <main>
                <h1>Home</h1>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>

            </main>
        </def>
    )
}

module.exports = home