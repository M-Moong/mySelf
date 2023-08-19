import SectionTitle from "./SectionTitle";

function Container({className, headline }) {


	
	return (
		<>
			<section className={className}>
				<SectionTitle headline={headline} />
			</section>
		</>
	);
}

export default Container;
