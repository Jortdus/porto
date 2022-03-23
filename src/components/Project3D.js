import "../App.css";

function Project3D() {
    return (
        <div className="Three-d">
            <h1>
                <span id="interpunct">&#183; Three.js &#183;</span>
            </h1>

            <p>
                Data visualization created with React and Three.js using a RIVM
                dataset . During this assignment we were challenged to create a
                visualization based on a large dataset. I decided to make use of
                React and Three.js and challenge myself to a libary that I had
                never used before.
            </p>
            <small>
                Application is not optimized for mobile devices and might not
                work optimally*
            </small>
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
