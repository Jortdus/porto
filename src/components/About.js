import "../App.css";

function About() {
    return (
        <div className="About">
            <h1>
                <span id="interpunct">&#183; About me &#183;</span>
            </h1>
            <div id="Wrapper">
                <div id="about-text-img">
                    <p>
                        Hi! My name is Jort, a 21-year-old student from Leiden
                        studying Communication &amp; Multi-media Design. <br />I
                        am currently studying at the Hogeschool van Amsterdam in
                        my third year. <br /> <br />
                        Prior to this I finished my MBO-4 Media development at
                        the Mediacollege in Amsterdam. A study mainly focused
                        around front-end webdevelopment. <br />
                        My current study is a mix between webdesign and
                        webdevelopment and I quickly noticed my preference laid
                        in the latter.
                        <br />
                        My current focus is on development using frameworks like
                        React in combination with libraries and other add-ons.
                        <br />I work well in a team and appreciate a good sense
                        of structure.
                    </p>

                    <h2>Proficiencies:</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Adobe XD</li>
                        <li>Illustrator/Sketch</li>
                    </ul>

                    <h2>Basic knowledige in:</h2>
                    <ul>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Python</li>
                    </ul>

                    <h2>libraries and packages I have worked with</h2>
                    <ul>
                        <li>Three.js</li>
                        <li>react-three-fiber</li>
                        <li>D3.js</li>
                        <li>Node.js</li>
                        <li>P5.js</li>
                        <li>NPM</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
                <img
                    id="about-img"
                    alt="stock"
                    src={require("../img/stock.jpg")}
                ></img>
            </div>
        </div>
    );
}

export default About;
