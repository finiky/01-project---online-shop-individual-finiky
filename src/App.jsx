import { useEffect, useState } from "react";
import "./App.css";

import CategoryFilter from "./components/FilterBy/FilterBy";
import Pagination from "./components/Pagination/Pagination";
import Products from "./components/Products/Products";
import Search from "./components/Search/Search";
import SortBy from "./components/SortBy/SortBy";

// Business logic from component folders
// Grouped to make it easier for students to focus on building one component and business logic
import { getPaginatedProducts } from "./components/Pagination/getPaginatedProducts";
import { getPaginationLinks } from "./components/Pagination/getPaginationLinks";
import { getProductsBySearch } from "./components/Search/getProductsBySearch";

// Business logic from util folder
import { getProducts } from "./services/getProducts";
import { getCategories } from "./utils/getCategories";
import { filterByCategory } from "./utils/filterByCategory";
import { sortProducts } from "./utils/sortProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationLimit] = useState(6);
  const [pageList, setPaginationNumbers] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchPrefix, setSearch] = useState("");

  const loadData = async () => {
    const products = await getProducts();
    setProducts(products);

    const categories = getCategories(products);
    console.log(categories);
    setCategories(categories);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filter / sort products
  useEffect(() => {
    const filtered = filterByCategory(products, category);
    const sorted = sortProducts(filtered, sortBy);
    const searched = getProductsBySearch(sorted, searchPrefix);
    setFilteredProducts(searched);
    setCurrentPage(1);
  }, [category, sortBy, products, searchPrefix]);

  // Paginate products
  useEffect(() => {
    const pageList = getPaginationLinks(filteredProducts, paginationLimit);
    setPaginationNumbers(pageList);
    const page = getPaginatedProducts(
      filteredProducts,
      paginationLimit,
      currentPage
    );
    setDisplayedProducts(page);
  }, [filteredProducts, currentPage, paginationLimit]);

  return (
    <div className="container">
      <h1>Sunglass Shop</h1>
      <div className="toolbar">
        <CategoryFilter setCategory={setCategory} categories={categories} />
        <SortBy setSortBy={setSortBy} />
        <Search setSearch={setSearch} />
      </div>
      <Products products={displayedProducts} />
      <Pagination pageList={pageList} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
