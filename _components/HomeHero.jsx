/**
 * HomeHero Component
 * @desc Renders the hero for the home page.
 */

class HomeHero extends React.Component {
    constructor(props) {
        super(props);
    }

    getStyles() {
        return {
            wrapper: {
            	height: '400px',
            	background: '#fff',
            	textAlign: 'center',
            	color: '#fff'
            },
            logo: {
            	maxWidth: '350px',
                padding: '134px 0 10px',
                margin: '0 auto'
            },
            title: {
                fontFamily: 'Oswald, Arial, serif',
            	color: '#1f1f1f',
            	height: '40px',
            	lineHeight: '40px',
            	fontSize: '20px'
            }
        };
    }

    render() {
        let styles = this.getStyles();
        return <div style={styles.wrapper}>
            <img style={styles.logo} src={site.img_dir + '/logos/rovr-dark-small.png'} alt="rovr logo"/>
            <h1 style={styles.title}>A React + Markdown Static Site Generator</h1>
        </div>;
    }
}
