import { useGetFeaturedProductsQuery } from "@/redux/features/product/product.api";
import Loader from "@/utils/Loader";
import ProductCard from "../product/ProductCard";
import SectionHeading from "../ui/sectionHeading";

const FeaturedProduct = () => {
  const { data, isLoading } = useGetFeaturedProductsQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="w-full mt-[50px]">
      <SectionHeading className="flex justify-center items-center text-green-600" text="Featured Product" />
      <div className="griProductResponsive gap-[20px]">
        {data?.data?.map((data, i) => (
          <ProductCard key={"prodcut" + i} product={data} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
