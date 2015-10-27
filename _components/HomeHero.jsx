/**
 * HomeHero Component
 * @desc Renders the hero for the home page.
 */

class HomeHero extends React.Component {
    render() {
        return <div className="home-hero">
            <img src={site.img_dir + '/logos/rovr-dark.png'} alt="rovr logo"/>
            <h1>A React + Markdown Static Site Generator</h1>
            <div className="npm-example-wrapper">
                <span className="npm-example"><span>$</span> npm install rovr -g</span>
            </div>
        </div>;
    }
}
