import Header from "@/components/templates/Header";
// import { styled } from "@nextui-org/react";
import { Container } from "@material-ui/core";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container maxWidth="xl" style={{ height: "100vh", padding: 0 }}>
      <Header></Header>
      {children}
    </Container>
  );
}
