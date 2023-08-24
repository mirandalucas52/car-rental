import "./Book-Car.css";

function BookCar() {
    return (
        <section className="bookCarContainer">
            <div className="bookCarOverlay"></div>
            <div className="bookCar">
                <div className="bookCarText">
                    <p>Book a car by getting in touch with us</p>
                    <p>
                        <i class="fa-solid fa-phone"></i> (123) 456-7869
                    </p>
                </div>
            </div>
        </section>
    );
}

export default BookCar;
