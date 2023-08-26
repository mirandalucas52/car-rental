import "./Contact.css";

function ContactComponent() {
    return (
        <div className="contactContainer">
            <div className="contactText">
                <h1>Need additional information?</h1>
                <p>
                    A multifaceted professional skilled in multiple fields of
                    research, development as well as a learning specialist. Over
                    15 years of experience.
                </p>
                <div className="contactInfos">
                    <a href="/">
                        <i class="fa-solid fa-phone"></i>
                        &nbsp; (123) 456-7869
                    </a>

                    <a href="/">
                        <i class="fa-solid fa-envelope"></i>
                        &nbsp; carrental@carmail.com
                    </a>
                    <a href="/">
                        <i class="fa-solid fa-location-dot"></i>
                        &nbsp; Paris, France
                    </a>
                </div>
            </div>
            <form>
                <label htmlFor="full name">
                    Full Name <b>*</b>
                </label>
                <input type="text" placeholder="First Last" />
                <label htmlFor="email">
                    Email <b>*</b>
                </label>
                <input type="text" placeholder="youremail@example.com" />
                <label htmlFor="write">
                    Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here..."></textarea>
                <button>
                    <i class="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                    Message
                </button>
            </form>
        </div>
    );
}

export default ContactComponent;
