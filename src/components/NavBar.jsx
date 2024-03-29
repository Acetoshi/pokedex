import './NavBar.css'

function NavBar({ next, previous }) {

    return <>
        <nav>
            <button onClick={previous}>PREVIOUS</button>
            <button onClick={next}>NEXT</button>
        </nav>
    </>

}

export default NavBar