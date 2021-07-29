import styles from "../styles/Home.module.css";

export default function Home({ toppings }) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Favorite pizza toppings</h1>
				<ul className={"toppings"}>
					{toppings.map((topping) => {
						return <li key={topping}>{topping}</li>;
					})}
				</ul>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const pizzaToppings = [
		"Pineapple",
		"Ham",
		"Pepperoni",
		"Jalapeno",
		"Green Peppers",
	];

	return {
		props: {
			toppings: pizzaToppings,
		},
	};
}
