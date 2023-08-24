import "./Download.css";
import DownloadGoogleImg from "../../assets/dl-googleplay.png";
import DownloadAppleImg from "../../assets/dl-appstore.png";

function Download() {
    return (
        <section className="downloadBackground">
            <div className="downloadContainer">
                <div className="downloadTxt">
                    <h5>Download our app to get most out of it</h5>
                    <p>
                        Thrown shy denote ten ladies though ask saw. Or by to he
                        going think order event music. Incommode so intention
                        defective at convinced. Led income months itself and
                        houses you.
                    </p>
                    <div className="downloadBtn">
                        <img
                            src={DownloadGoogleImg}
                            alt="Download Google Button"
                        />
                        <img
                            src={DownloadAppleImg}
                            alt="Download Apple Button"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Download;
