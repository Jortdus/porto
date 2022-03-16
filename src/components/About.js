import "../App.css";

function About() {
    return (
        <div className="About">
            <h1>
                <span id="interpunct">&#183; About me &#183;</span>
            </h1>
            <div id="about-text-img">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras ligula quam, dignissim ut sodales vitae, tempor sit
                    amet augue. Pellentesque habitant morbi tristique senectus
                    et netus et malesuada fames ac turpis egestas. Duis
                    vestibulum nisl accumsan, aliquam sem vel, viverra tellus.
                    Cras ut arcu ornare augue semper tempor nec vel nisl.
                    Integer porta tellus ac elementum volutpat. Nunc porttitor
                    lectus a ante volutpat, vitae ultrices ipsum rhoncus.
                    Suspendisse congue dui ac sagittis cursus. Maecenas auctor
                    molestie neque a aliquam. Nullam molestie eleifend risus
                    varius rhoncus. Praesent dapibus lectus eu interdum
                    accumsan. Mauris id nunc vitae ipsum maximus tincidunt eget
                    eu orci. Vivamus et eros vitae orci congue dictum at non
                    nisi. Sed eget fringilla lectus. Aenean ultricies auctor
                    massa quis porta. Duis aliquam pellentesque tellus nec
                    semper. Cras venenatis sed massa at egestas.
                </p>

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
