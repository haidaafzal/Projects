import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { islamabad, karachi, lahore } from "./Data/listings";

export default function App() {
  return (
    <>
   

      {/* NAVBAR */}
      <Navbar />

      {/* SECTIONS */}
      <Section title="Popular homes in Lahore" data={lahore} />
      <Section title="Available next month in Islamabad" data={islamabad} />
      <Section title="Stay in Karachi" data={karachi} />
    </>
  );
}
