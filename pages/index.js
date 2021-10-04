import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups}/>
    );
}

/**
 * If present, it's called Before the component page, in order to prepare the props for the page.
 * It can be async, so it will be executed only after the data is fetched from the server.
 * SEO will benefit from it.
 */
export async function getStaticProps() {
    // All the code in this functions is never executed on the client side, but only during the building process
    // You always need to return an object.
    return {
        props: { // this naming is crucial
            // This becomes the props available in this component after the building process
            meetups: DUMMY_MEETUPS
        }
    }
}

export default HomePage;