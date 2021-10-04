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
            // This becomes the props available in this component after the building process.
            meetups: DUMMY_MEETUPS
        },
        // Incremental Static Generation. Number of seconds before the page is regenerated on the server,
        // at least if there are requests on this page.
        revalidate: 1
    }
}

/**
 * Page is pre-generated server side for each incoming requests.
 * Access to the incoming requests.
 * Useful if data change often or you need access to requests (e.g. check login session and auth).
 */
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage;