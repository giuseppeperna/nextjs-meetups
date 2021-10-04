import Link from 'next/link';

import classes from './MainNavigation.module.scss';
function MainNavigation() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
               <Link href="/">React Meetups</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link href='/new-meetup'>Add New Meetups</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;