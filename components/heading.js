import Link from "next/link";
import css from "./heading.scss";

export default props => {
  return (
    <div className={css.heading}>
      <Link href="/">
        <a>
          <span className={css.branding}>quoke</span>
        </a>
      </Link>
      <img className={css.heart} src="/icons/favorite-8.svg" />
    </div>
  );
};

/**
 * BELOW HERE IS OLD CODE THAT MIGHT BE
 * USEFUL IN FUTURE
 */

// const Heading = props => {
//   const [username, setUsername] = useState();
//   const setGlobalUsername = useStoreActions(actions => actions.setUsername);

//   const user = useStoreState(state => state.username);

//   useEffect(() => {
//     axios.post("/api/is-authenticated", {}).then(
//       response => {
//         if (response.data.loggedIn === true) {
//           setGlobalUsername(response.data.payload.username);
//           setUsername(user);
//         }
//       },
//       { withCredentials: true }
//     );
//   });

//   return (
//     <header className={css.root}>
//       <h2>
//         <Link href="/">
//           <a>Quoke</a>
//         </Link>
//       </h2>
//       {/* <div>
//         <span className={css.branding}>
//           <Link href="/">
//             <a>Quoke</a>
//           </Link>
//         </span>
//       </div>
//       <div className={css.nav}>
//         {user ? (
//           <Link href={"/[username]"} as={"/" + user}>
//             <a>{user}</a>
//           </Link>
//         ) : (
//           <Link href="/login">
//             <a>Login</a>
//           </Link>
//         )}
//       </div> */}
//     </header>
//   );
// };
