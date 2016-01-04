/**
 * Meta Component
 * @prop title The page title.
 * @prop desc The page description.
 * @desc Renders the page metadata inside the head tag.
 */

let Meta = (props) => {
    let desc;
    // If there's a page description, create the meta tag.
    if (props.desc) {
        desc = <meta name="description" content={ props.desc }/>;
    }

    return <div data-rovr-remove-wrapper="true">
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        { desc }
        <title>
            {/* If there's a page title, then include a dash. */}
            { (props.title ? props.title + ' - ' : '') + site.title }
        </title>
    </div>;
}

Meta.defaultProps = {
    title: '',
    desc: ''
};
