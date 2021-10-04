import classes from './NewMeetupForm.module.scss';
import Card from '../ui/Card';
import { useRef } from 'react';

function NewMeetupForm(props) {
    // Use Ref to catch inputs data
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        // Prevent default form submit
        event.preventDefault();

        // Save data input from the user
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        // Create new object with form's data
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        // Call a function passed as prop by parent component
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        id="description"
                        required
                        rows='5'
                        ref={descriptionInputRef}
                    >
                    </textarea>
                    <div className={classes.actions}>
                        <button>Add Meetup</button>
                    </div>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;