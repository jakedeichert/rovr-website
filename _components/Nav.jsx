/**
 * Nav Component
 * @desc Renders the top navigation bar.
 */

let Nav = (props) => {
    return <nav className="nav">
        <div className="pages">
            <a href="/docs">Docs</a>
            <a href="/api">API</a>
        </div>
        <div className="social">
            <a href="https://github.com/rovrjs/rovr"><GitHubIcon width="25" height="25" color="#fff"/></a>
        </div>
    </nav>;
};
