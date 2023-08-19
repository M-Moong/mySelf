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



  return (
    <RootLayout >
      <Container headline={headline} />
    </RootLayout>
  );


}

export default App;
