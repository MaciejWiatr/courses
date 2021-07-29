import styles from "../styles/Home.module.css";

export default function Home({ snacks }) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Favorite snacks</h1>
				<ul className="snacks">
					{snacks.map((topping) => {
						return <li key={topping}>{topping}</li>;
					})}
				</ul>
			</main>
		</div>
	);
}

export async function getServerSideProps() {
	const snacks = ["Chips", "Popcorn", "M&Ms", "Rice Cakes", "Jerky"];

	return {
		props: {
			snacks,
		},
	};
}
