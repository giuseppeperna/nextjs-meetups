import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.scss';
function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);
    const totalFavorites = favoritesCtx.totalFavorites;
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
               <Link to="/">React Meetups</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link className={classes.link} to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link className={classes.link} to='/new-meetup'>Add New Meetups</Link>
                    </li>
                    <li>
                        <Link className={classes.link} to='/favorites'>My Favorites</Link>
                        <span className={classes.badge}>
                            {totalFavorites}
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;