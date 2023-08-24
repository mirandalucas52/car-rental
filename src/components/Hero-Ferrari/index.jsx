import "./Hero-Ferrari.css";

function HeroFerrari({ title, subtitle }) {
    return (
        <section className="heroFerrari">
            <div className="heroFerrariOverlay"></div>
            <div className="containerHero">
                <div className="heroFerrariText">
                    <h1>{title}</h1>
                    <p>
                        <a href="/">Home </a>/ {subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeroFerrari;
