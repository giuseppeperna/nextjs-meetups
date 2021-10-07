import classes from './MeetupList.module.scss';
import MeetupItem from './MeetupItem';
import PropTypes from 'prop-types';

function MeetupList(props) {
    return <ul className={classes.list}>
        {props.meetups.map(meetup =>
        <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
        />)}
    </ul>;
}

MeetupList.propTypes = {
    meetups: PropTypes.array.isRequired
}

export default MeetupList;