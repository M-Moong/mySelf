import "@/styles/App.module.css";
import RootLayout from "@/layout/RootLayout";
import ContainerFirst from "./sections/ContainerFirst";
import ContainerSecond from "./sections/ContainerSecond";
import ContainerThird from "./sections/ContainerThird";
import ContainerForth from "./sections/ContainerForth";
import ContainerFifth from "./sections/ContainerFifth";

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

  return (
    <RootLayout >
      <ContainerFirst className={colorName[0]} headline={headline[0]}/>
      <ContainerSecond className={colorName[1]} headline={headline[1]}/>
      <ContainerThird className={colorName[2]} headline={headline[2]}/>
      <ContainerForth className={colorName[3]} headline={headline[3]}/>
      <ContainerFifth className={colorName[4]} headline={headline[4]}/>
    </RootLayout>
  );


}

export default App;
