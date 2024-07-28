import { getBrokers } from "./lib/data";

export default async function Home() {
  const brokers = await getBrokers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        brokers.map( ({id, name}) => (
          <section key={id}>
            <h1>{name}</h1>
            <p>Mejores brokers para invertir </p>
          </section>
        ))
      }
    </main>
  );
}
