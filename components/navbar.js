// react standard component
// not a nextjs page
// exporting as default is not required

// useRouter for navigating between nextjs pages
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'


//react functional component
export const Navbar = () => {
	const router = useRouter();

	return(
		<div className={styles.navbar}>
			
			<div className="hzcontainer">
				<div className="hzrow">
					<div className={"hzcomlumn "+styles.brand}>
						<div className={styles.logo} >
							<img src="/hz-logo-blk.svg" alt="HZ logo" layout="fill"/>
						</div>
						{/*<span className={styles.logotext}>Apps</span>*/}
					</div>
					
					<Link href="/"><a  className={"hzcomlumn "+styles.navbtn} >Home</a></Link>
					<Link href="/"><a  className={"hzcomlumn "+styles.navbtn} >Apps</a></Link>
					<Link href="/"><a  className={"hzcomlumn "+styles.navbtn} >Portfolio</a></Link>
					
				</div>
			</div>
			
		</div>
	);
}