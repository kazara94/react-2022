import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  let params = useParams();

  useEffect(() => {
    fetch("https://lindagiorgadze.github.io/FakeServer/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.Products));
  }, []);

  console.log(params);

  return (
    <section>
      <h2>Product Page</h2>

      {products
        .filter((item) => item.id === parseInt(params.id))
        .map((product) => {
          return (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img
                src={product.img}
                alt={product.title}
                style={{
                  width: "100vw"
                }}
              />
            </div>
          );
        })}
    </section>
  );
}
