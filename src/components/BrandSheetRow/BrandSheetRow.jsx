export default function BrandSheetRow({ title, children }) {
  return (
    <div className="grid grid-cols-12 border-b-2 border-mib-brown-dark gap-2 md:gap-4 py-4 md:py-3">
      <span className="h-fit col-span-12 md:col-span-6 text-lg text-mib-brown-dark font-semibold leading-none">
        {title}
      </span>
      <span className="h-fit col-span-12 md:col-span-6 text-md text-mib-brown-dark leading-tight">
        {children}
      </span>
    </div>
  );
}
