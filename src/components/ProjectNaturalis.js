import "../App.css";

function ProjectNaturalis() {
    return (
        <div className="Naturalis">
            <h1>
                <span id="interpunct">
                    &#183; Naturalis, verlies jezelf in de natuur &#183;
                </span>
            </h1>

            <p>
                Project where two students and I created a new concept for
                Naturalis using a GBIF dataset
            </p>
            <small>Application is not optimized for mobile devices*</small>
            <a
                className="live-project"
                href="https://project-naturalis-q42-1cj6-qfiqvl6rn-steinberg99.vercel.app/"
            >
                Live project
            </a>
            <iframe
                className="iframe-3d"
                id="inlineFrameExample"
                title="Assignment for biological museum Naturalis, focus on losing yourself in the data"
                width="100%"
                height="600"
                src="https://project-naturalis-q42-1cj6-qfiqvl6rn-steinberg99.vercel.app/"
                scrolling="no"
                frameBorder={"0"}
            ></iframe>
        </div>
    );
}

export default ProjectNaturalis;
