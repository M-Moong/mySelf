import SectionTitle from "./SectionTitle";

function Container({ headline }) {

	const colorName = [
		'bg-rose-500',
		'bg-sky-500',
		'bg-red-500',
		'bg-green-500',
		'bg-purple-500',
	];

	return (
		<>
			{colorName.map((item) => {
				return (
					<section key={item} className={`min-h-[30vh] ${item} p-5`} >
						<SectionTitle headline={headline} />
					</section>
				);
			})}
		</>

	);
}

export default Container;
