import Link from 'next/link';

const Nav = () => (
  <>
    <Link href="/">
      <a>🏠Home</a>
    </Link>
    <Link href="/admin">
      <a>⚙Admin</a>
    </Link>
  </>
);

export default Nav;
