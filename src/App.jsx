import Container from "@/components/Container";
import RootLayout from "@/layout/RootLayout";

function App() {

  return (
    <RootLayout>
      <Container headline="장미 Container" colorClassName="bg-rose-500" />
      <Container headline="스카이 Container" colorClassName="bg-sky-500" />
      <Container headline="보라 Container" colorClassName="bg-purple-500" />
    </RootLayout>
  );
}

export default App;
