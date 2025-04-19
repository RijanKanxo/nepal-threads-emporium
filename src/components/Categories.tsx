
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Mock category data
const categories = [
  {
    name: "Traditional",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: 48,
  },
  {
    name: "Contemporary",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: 63,
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: 37,
  },
  {
    name: "Fusion",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: 29,
  },
  {
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: 22,
  },
  {
    name: "Handmade",
    image: "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    count: 41,
  },
];

const Categories = () => {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Shop By Category</h2>
            <p className="text-muted-foreground">Browse our wide selection of Nepalese fashion categories</p>
          </div>
          <Link 
            to="/categories" 
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View All Categories
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 mt-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: {
    name: string;
    image: string;
    count: number;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/category/${category.name.toLowerCase()}`}>
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:border-primary">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors">
              <div className="text-center">
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
                <p className="text-sm text-white/80">{category.count} items</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Categories;
