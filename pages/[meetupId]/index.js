import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { Fragment } from 'react';
import Head from 'next/head';

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                    name='description'
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}

// Nextjs needs to know for which id should pre-generate the page
export async function getStaticPaths() {
    //MongoDB
    const urlConnection = process.env.MongoDB;
    const client = await MongoClient.connect(urlConnection);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    // Fetch only the IDs
    const meetups = await meetupsCollection.find({}, {_id: 1 }).toArray();
    client.close();

    return {
        // if false, pre-generate only pages in paths array
        // else try to pre-generate for every page.
        // Blocking indicates that this list of id might not be exhaustive,
        // so, it will not respond with a 404 error, because it pre-generates the page
        // before showing it in the client.
        fallback: 'blocking',
        // Array of paths to be pre-generated
        paths: meetups.map(meetup => (
            {
                params: { meetupId : meetup._id.toString() }
            })
        )
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    //MongoDB
    const urlConnection = process.env.MongoDB;
    const client = await MongoClient.connect(urlConnection);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    // Fetch only the IDs
    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            }
        }
    }
}

export default MeetupDetails;