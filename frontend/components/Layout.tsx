import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <header style={{ padding: "20px", background: "#2f3e2e", color: "white" }}>
        <h1>Old House Sibiel</h1>
        <p>Hotel montan • Tradiție și confort</p>
      </header>

      <main style={{ padding: "20px" }}>
        {children}
      </main>

      <footer style={{ padding: "20px", background: "#eee" }}>
        © Old House Sibiel
      </footer>
    </div>
  );
}
