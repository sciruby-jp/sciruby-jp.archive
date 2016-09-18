import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const authors = [
      { name: 'Yoshihiro Ashida', github_id: 'ash1day' },
      { name: 'Yusuke Sangenya',  github_id: 'genya0407' }
    ].map((author) => {
      return <a key={author.name} href={`https://github.com/${author.github_id}`} target="_blank">{ author.name }</a>
    }).reduce((accu, elem) => {
      return accu === null ? [elem] : [...accu, ', ', elem]
    }, null);

    return (
      <footer className="Footer">
        © 2016 { authors }
      </footer>
    );
  }
}

export default Footer;
