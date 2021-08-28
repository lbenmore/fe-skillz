import NavItem from './NavItem';
import Logo from './Logo';
import pages from '../pages.js';

export default function Header () {
  return (
    <div>
      <Logo style={{ width: '120px', height: '60px' }} />
      <ul>{ pages.map((page, i) => (
        <NavItem idx={ i } data={ page } key={ i } />
      )) }</ul>
    </div>
  )
}