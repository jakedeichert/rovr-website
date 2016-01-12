/**
 * Nav Component
 * @desc Renders the top navigation bar.
 */

let Nav = (props) => {
    return <nav className="nav">
        <div className="pages">
            <a href="/rovr-website">Home</a>
            <a href="/rovr-website/docs">Docs</a>
            <a href="/rovr-website/api">API</a>
        </div>
        <div className="social">
            <a href="https://github.com/jakedeichert/rovr"><GitHubIcon width="25" height="25" color="#fff"/></a>
        </div>
    </nav>;
};
