 import './qlsp.css';
 import { Link } from 'react-router-dom';
 import Routers from './Routers';
 function Header () {
    return (
        <header>
            <div class="header">
        <nav class="navbar navbar-expand">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        {
                            Routers.map(routers => {
                                return (<li class="nav-item" key={routers.path}>
                                        <Link className='nav-link' to={routers.path}>{routers.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </div>
        </header>
    )
}

export default Header;