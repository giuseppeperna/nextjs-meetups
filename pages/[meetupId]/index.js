import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    );
}

// Nextjs needs to know for which id should pre-generate the page
export async function getStaticPaths() {
    return {
        // if false, pre-generate only pages in paths array
        // else try to pre-generate for every page-
        fallback: false,
        // Array of paths to be pre-generated
        paths: [
            {
                params: {
                meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
                title: 'A First Meetup',
                address: 'Some Street 10, Some City',
                description: 'The meetup description'
            },
            revalidate: 10
        }
    }
}

export default MeetupDetails;