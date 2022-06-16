import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch("https://lindagiorgadze.github.io/FakeServer/products.json")
      .then((response) => response.json())
      .then((data) => setFetchedData(data.Products));
  }, []);

  return (
    <section>
      <h3>Products</h3>
      <div className="grid">
        {fetchedData.map((item) => {
          return (<div key={item.id} className="ProductBox">
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <Link to={`${item.id}`} >Visit Product</Link>
            </div>);
        })}
      </div>
    </section>
  );
}
