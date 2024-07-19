import Image from "next/image";
import ProductList from "./components/product_list";
import {Button} from "@nextui-org/button";

export default function Home() {
  return (

    <main className="flex-1 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <ProductList />
      </div>
    </main>
  );
}
