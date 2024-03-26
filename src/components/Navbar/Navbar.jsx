export default function Navbar() {
  return (
    <div className="w-100 h-fit grid-cols-4 md:grid-cols-12 gap-4">
      <span>
        Il prodotto moda artigianale sostenibile: dalle materie prime al
        prodotto finito con un focus sulla produzione territoriale.
      </span>
      <span>Bergamo, Italy</span>
      <div className="w-fit flex flex-col">
        <span>+39 555 555 5555</span>
        <span>sample@mail.com</span>
      </div>
    </div>
  );
}
