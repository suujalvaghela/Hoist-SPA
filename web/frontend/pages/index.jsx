import "./home.css";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Space from "../components/Space";
import Application from "../components/Application";
import Anniversary from "../components/Anniversary";
import BrandTicker from "../components/BrandTicker";
import Engineering from "../components/Engineering";

export default function HomePage() {

    return (
        <main className="min-h-screen overflow-hidden font-sans text-white">
            <section id="hero"><Hero /></section>
            <section id="space"><Space /></section>
            <section><BrandTicker /></section>
            <section id="product"><Products /></section>
            <section id="engineering"><Engineering /></section>
            <section id="categorie"><Categories /></section>
            <section><BrandTicker /></section>
            <section id="about"><Reviews /></section>
            <section id="anniversary"><Anniversary /></section>
            <section id="app"><Application /></section>
            <section id="footer"><Footer /></section>
        </main>
    );
}





