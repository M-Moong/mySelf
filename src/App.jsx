import Container from "@/components/Container";
import RootLayout from "@/layout/RootLayout";

function App() {

  const headline = [
    "8월 10일",
    "8월 11일",
    "8월 14일",
    "8월 16일",
    "8월 17일",
  ];

  const colorName = [ 
		'bg-rose-500',
		'bg-sky-500',
		'bg-red-500',
		'bg-green-500',
		'bg-purple-500',
	];

  const list = colorName.map((className, index)=> 
    <Container key={className} className={className} headline={headline[index]} />
    )

  return (
    <RootLayout >
      {list}
    </RootLayout>
  );


}

export default App;
