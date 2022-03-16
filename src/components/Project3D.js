import "../App.css";

function Project3D() {
    return (
        <div className="Three-d">
            <h1>
                <span id="interpunct">&#183; Three.js &#183;</span>
            </h1>

            <p>
                Data visualization created with React and Three.js using a RIVM
                dataset{" "}
            </p>
            <small>Application is not optimized for mobile devices*</small>
            <a
                className="live-project"
                href="https://jortdus.github.io/frontend-application/"
            >
                Live project
            </a>
            <iframe
                className="iframe-3d"
                id="inlineFrameExample"
                title="RIVM data visualized in Three.js"
                width="100%"
                height="600"
                src="https://jortdus.github.io/frontend-application/"
                scrolling="no"
                frameBorder={"0"}
            ></iframe>
        </div>
    );
}

export default Project3D;
