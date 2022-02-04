import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p>© <span>{new Date().getFullYear()}</span> All right reserved</p>
                <p>Powered by: <a href="#">Ikhlas Aralbaev</a></p>
            </footer>
        );
    }
}

export default Footer;