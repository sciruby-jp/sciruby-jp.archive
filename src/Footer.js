import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const authers = [
      { name: 'Kozo Nishida',     github_id: 'kozo2' },
      { name: 'Yoshihiro Ashida', github_id: 'ash1day' },
      { name: 'Yusuke Sangenya',  github_id: 'genya0407' }
    ].map((auther) => {
      return <a key={auther.name} href={`https://github.com/${auther.github_id}`} target="_blank">{ auther.name }</a>
    }).reduce((accu, elem) => {
      return accu === null ? [elem] : [...accu, ', ', elem]
    }, null);

    return (
      <footer className="Footer">
        © 2016 { authers }
      </footer>
    );
  }
}

export default Footer;
