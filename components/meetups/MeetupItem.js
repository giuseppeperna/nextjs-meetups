import { useRouter } from 'next/router';
import classes from './MeetupItem.module.scss';
import Card from '../ui/Card';
import PropTypes from 'prop-types';

function MeetupItem(props) {
    const router = useRouter();
    function showDetailsHandler() {
        router.push('/' + props.id);
    }
    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailsHandler}>
                        Show Details
                    </button>
                </div>
            </li>
        </Card>
    )
}

MeetupItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string
}

export default MeetupItem;