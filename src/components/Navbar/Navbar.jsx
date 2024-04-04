export default function Navbar() {
  return (
    <nav className="h-fit p-4 pt-8 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 text-xs font-semibold">
      <span className="col-span-4 md:col-span-3">
        Il prodotto moda artigianale sostenibile: dalle materie prime al
        prodotto finito con un focus sulla produzione territoriale.
      </span>
      <span className="col-span-4 my-8 md:my-0 md:col-start-10 md:col-span-1">Bergamo, Italy</span>
      <div className="col-span-4 md:col-start-11 md:col-span-2 flex flex-col md:items-end">
        <span className="w-fit text-end">+39 555 555 5555</span>
        <span className="w-fit">sample@mail.com</span>
      </div>
    </nav>
  );
}
