import { Component } from 'react';
import Button from './components/Button';
class Header extends Component {
  render() {
    const {title} = this.props;
    return (
        <header className='header'>
            <div class="top">
                <div class="top_hello">
                    <a class="welcome" href="www.baidu.com">{title}</a>
                    <Button/>
                </div>
            </div>
        </header>
    )
}
}

export default Header;