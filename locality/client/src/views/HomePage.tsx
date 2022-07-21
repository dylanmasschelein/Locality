const Home = () => {
	return (
		<section>
			<h1>You are on home page!</h1>
			<div>
				{/* When a business is clicked, collapse the list down to the bottom of the screen */}
				<div>This is the list of the businesses</div>
				{/* Business Profile and allow for swipe up to get the list back */}
				{/* This means ill have to create a swipeable drawer, similar to the one in ModelReno actually */}
				{/* Take some inspiration from this! */}
				{/* the swipeable drawer will be a seperate "Layout" component, only attatched to certain pages */}
			</div>
		</section>
	);
};

export default Home;
