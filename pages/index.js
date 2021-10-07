import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

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

    // Connection to MongoDB
    const urlConnection = process.env.MongoDB
    const client = await MongoClient.connect(urlConnection);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: { // this naming is crucial
            // This becomes the props available in this component after the building process.
            meetups: meetups.map(meetup => ({
                id: meetup._id.toString(),
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
            }))
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