import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Cheers! You must be 21 and over to use this
        website
      </p>
      <a href="https://github.com/giseleabzalov">GitHub</a>
    </footer>
  );
}
