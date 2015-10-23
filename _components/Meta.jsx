/**
 * Meta Component
 * @prop title The page title.
 * @prop desc The page description.
 * @desc Renders the page metadata inside the head tag.
 */

class Meta extends React.Component {
    render() {
        let desc;
        // If there's a page description, create the meta tag.
        if (this.props.desc) {
            desc = <meta name="description" content={ this.props.desc }/>;
        }

        return <div data-rovr-remove-wrapper="true">
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            { desc }
            <title>
                {/* If there's a page title, then include a dash. */}
                { (this.props.title ? this.props.title + ' - ' : '') + site.title }
            </title>
        </div>;
    }
}

Meta.defaultProps = {
    title: '',
    desc: ''
};
