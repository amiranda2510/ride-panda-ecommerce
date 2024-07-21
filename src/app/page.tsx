import ProductList from "./components/ProductList";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (

    <main className="flex-1 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <ProductList query={query} currentPage={currentPage} />
      </div>
    </main>
  );
}
