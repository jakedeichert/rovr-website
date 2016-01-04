/**
 * HomeHero Component
 * @desc Renders the hero for the home page.
 */

let HomeHero = (props) => {
    return <div className="home-hero">
        <img src={site.img_dir + '/logos/rovr-dark.png'} alt="rovr logo"/>
        <h1>A React + Markdown Static Site Generator</h1>
        <div className="npm-example-wrapper">
            <span className="npm-example"><span>$</span> npm install rovr -g</span>
        </div>
    </div>;
};
