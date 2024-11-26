interface  IProducts {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

function ProductCategoryRow({ category } : {category : string}) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product } : { product : IProducts}) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }: { products : Array<IProducts>}) {
  const rows : Array<JSX.Element> = [];
  let lastCategory : string = '';

  products.forEach((product : IProducts, k : number) => {
    if (product.category !== lastCategory) {
      console.log({c: product.category, lastCategory, k});
      
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products } : { products : Array<IProducts>} ) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS : Array<IProducts> = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "azzz", price: "$2", stocked: true, name: "aSpinach" },
  { category: "azzz", price: "$4", stocked: false, name: "aPumpkin" },
  { category: "azzz", price: "$1", stocked: true, name: "aPeas" },
  { category: "bzzz", price: "$2", stocked: true, name: "bSpinach" },
  { category: "bzzz", price: "$4", stocked: false, name: "bPumpkin" },
  { category: "bzzz", price: "$1", stocked: true, name: "bPeas" },
];

export default function Test() {
  return <FilterableProductTable products={PRODUCTS} />;
}
