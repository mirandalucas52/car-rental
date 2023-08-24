import "./Client-Testimonials.css";

function ClientTestimonials() {
    return (
        <section className="testimonialsBackground">
            <div className="testimonialsSection">
                <div className="testimonialsIntro">
                    <h1>Reviewed by People</h1>
                    <h2>Client's Testimonials</h2>
                    <p>
                        Discover the positive impact we've made on the our
                        clients by reading through their testimonials. Our
                        clients have experienced our service and results, and
                        they're eager to share their positive experiences with
                        you.
                    </p>
                </div>
                <div className="clientsTestimonials">
                    <div className="testimonial">
                        <span class="quotes-icon">
                            <i class="fa-solid fa-quote-right"></i>
                        </span>

                        <p>
                            "We rented a car from this website and had an
                            amazing experience! The booking was easy and the
                            rental rates were very affordable. "
                        </p>
                        <div className="testimonialPerson">
                            <div className="testimg">
                                <img
                                    src="https://fr.web.img6.acsta.net/pictures/15/10/14/11/30/335169.jpg"
                                    alt=""
                                />
                            </div>
                            <span>
                                <h3>Vin Diesel</h3>
                                <h4>Marseille</h4>
                            </span>
                        </div>
                    </div>
                    <div className="testimonial">
                        <span class="quotes-icon">
                            <i class="fa-solid fa-quote-right"></i>
                        </span>

                        <p>
                            "The car was in great condition and made our trip
                            even better. Highly recommend for this car rental
                            website!"
                        </p>
                        <div className="testimonialPerson">
                            <div className="testimg">
                                <img
                                    src="https://d28ku8nzmkcjr6.cloudfront.net/cache/0b/fd/0bfd65562010b5fdbb1fd34c7fbf9ac5.webp"
                                    alt=""
                                />
                            </div>
                            <span>
                                <h3>Dwayne Johnson</h3>
                                <h4>Paris</h4>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientTestimonials;
