import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li><Link href="/register"><a>Register</a></Link></li>
      <li><Link href="/login"><a>Login</a></Link></li>
    </ul>

    <style jsx>{`
      
      nav {
        text-align: left;
      }
      ul {
        display: flex;
        /* justify-content: space-between; */
        margin: 0;
        padding: 0;
      }
      nav > ul {
        padding: 2px 2px;
      }
      li {
        display: flex;
        padding: 0px 5px;
      }
      /* a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      } */
    `}</style>
  </nav>
)

export default Nav
