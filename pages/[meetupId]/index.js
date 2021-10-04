import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    return (
        <MeetupDetail
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
            title='A First Meetup'
            address='Some Street 10, Some City'
            description='The meetup description'
        />
    );
}

export default MeetupDetails;