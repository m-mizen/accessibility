import Head from "next/head";

import { Button, Slide, Column } from "../components";

export default function Intro() {
  return (
    <article className="container">
      <Head>
        <title>Intro</title>
      </Head>
      <header></header>
      <main>
        <Slide title="Slide 1">
          <Column>
            <div style={{ height: "300vh" }}>This is the content here...</div>
            End
          </Column>
        </Slide>
      </main>
      <footer>
        <Button>Previous</Button>
        <Button>Next</Button>
      </footer>
    </article>
  );
}
