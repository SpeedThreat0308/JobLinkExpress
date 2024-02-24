import propTypes from 'prop-types'
import Nav from './Navbar';
import Footer from './Footer';
import HomePage from './Home'
const UserLayout = ({children}) => {
    return (
        <div>
            <nav>
                <Nav/>
            </nav>
            <main>
                {children}
                <HomePage/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

UserLayout.propTypes = {
    children : propTypes.node.isRequired
}

export default UserLayout