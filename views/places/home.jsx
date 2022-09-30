const React = require('react')
const Def = require('../default')

function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src='/images/tacoPlate.jpg' alt='Carne Asada Taco Plate' width='200px' height='200px'/>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home