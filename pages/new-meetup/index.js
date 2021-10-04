import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage(props) {
    function addMeetupHandler(meetup) {
        console.log(meetup);
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    );
}

export default NewMeetupPage;