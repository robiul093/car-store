import { BsChevronLeft, BsChevronRight, BsSearch } from "react-icons/bs";
import FeaturedCard from "../../components/FeaturedCard";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useGetAllCarsQuery } from "../../redux/features/product/productApi";
// import { CiCircleRemove } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AllProductsPage() {
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(3);
  // Get query parameters with defaults
  const searchParams = new URLSearchParams(window.location.search);
  const page = Number(searchParams.get("page") || "1");
  const searchQuery = searchParams.get("search") || "";
  const brand = searchParams.get("brand") || "";
  const category = searchParams.get("category") || "";

  const [selectedBrand, setSelectedBrand] = useState(brand);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const { data, isLoading } = useGetAllCarsQuery(undefined);
  const products = data?.data;
  const condition = searchParams.get("condition") || "";
  const minPrice = Number(searchParams.get("price[gte]") || "0");
  const maxPrice = Number(searchParams.get("price[lte]") || "10000");
  const sortBy = searchParams.get("sortBy") || "createdAt";
  const sortOrder = searchParams.get("sortOrder") || "desc";

  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPrice,
    maxPrice,
  ]);
  const [searchInputValue, setSearchInputValue] = useState(searchQuery);
  const PRODUCTS_PER_PAGE = 12;

  // Update URL with filters
  const updateFilters = (
    newFilters: Record<string, string | number | null>
  ) => {
    const params = new URLSearchParams();

    // Add current params
    if (page > 1) params.set("page", page.toString());
    params.set("limit", PRODUCTS_PER_PAGE.toString());
    if (searchQuery) params.set("search", searchQuery);
    if (brand) params.set("brand", brand);
    if (category) params.set("category", category);
    if (condition) params.set("condition", condition);
    if (minPrice > 0) params.set("price[gte]", minPrice.toString());
    if (maxPrice < 10000) params.set("price[lte]", maxPrice.toString());
    if (sortBy) params.set("sortBy", sortBy);
    if (sortOrder) params.set("sortOrder", sortOrder);

    // Update with new filters
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value.toString());
      }
    });

    // Reset to page 1 when filters change
    if (Object.keys(newFilters).some((key) => key !== "page")) {
      params.set("page", "1");
    }

    navigate(`?${params.toString()}`);
  };

  useEffect(() => {
    // Update products when filters change
    const params = new URLSearchParams();
    if (searchInputValue) params.set("search", searchInputValue);
    if (priceRange[0] > 0) params.set("price[gte]", priceRange[0].toString());
    if (priceRange[1] < 10000)
      params.set("price[lte]", priceRange[1].toString());
    navigate(`?${params.toString()}`);
  }, [searchInputValue, priceRange]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    params.set("search", searchInputValue);
    navigate(`?${params.toString()}`);
  };

  const handlePriceApply = () => {
    const params = new URLSearchParams(window.location.search);
    params.set("price[gte]", priceRange[0].toString());
    params.set("price[lte]", priceRange[1].toString());
    navigate(`?${params.toString()}`);
  };

  const handlePriceReset = () => {
    setPriceRange([0, 10000]);
    const params = new URLSearchParams(window.location.search);
    params.delete("price[gte]");
    params.delete("price[lte]");
    navigate(`?${params.toString()}`);
  };

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    updateFilters({ brand });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    updateFilters({ category });
  };

  const getActiveFilters = () => {
    const filters = [];
    if (searchQuery) filters.push({ type: "search", value: searchQuery });
    if (selectedBrand) filters.push({ type: "brand", value: selectedBrand });
    if (selectedCategory)
      filters.push({ type: "category", value: selectedCategory });
    if (priceRange[0] > 0 || priceRange[1] < 10000) {
      filters.push({
        type: "price",
        value: `$${priceRange[0]} - $${priceRange[1]}`,
      });
    }
    return filters;
  };

  const removeFilter = (type: string) => {
    const filtersToUpdate: Record<string, null> = {};
    switch (type) {
      case "search":
        setSearchInputValue("");
        filtersToUpdate.search = null;
        break;
      case "brand":
        setSelectedBrand("");
        filtersToUpdate.brand = null;
        break;
      case "category":
        setSelectedCategory("");
        filtersToUpdate.category = null;
        break;
      case "price":
        setPriceRange([0, 10000]);
        filtersToUpdate["price[gte]"] = null;
        filtersToUpdate["price[lte]"] = null;
        break;
    }
    updateFilters(filtersToUpdate);
  };

  const clearAllFilters = () => {
    setSearchInputValue("");
    setSelectedBrand("");
    setSelectedCategory("");
    setPriceRange([0, 10000]);
    updateFilters({
      search: null,
      brand: null,
      category: null,
      "price[gte]": null,
      "price[lte]": null,
    });
  };

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="w-[90%] mx-auto pt-1 pb-10">
        <div>
          <h2 className="text-2xl text-start font-bold mb-6">All Products</h2>
          <div>
            {/* Search Bar */}
            <form className="mb-6 flex items-center" onSubmit={handleSearch}>
              <div className="relative w-full md:w-1/2 lg:w-1/3">
                <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchInputValue}
                  onChange={(e) => setSearchInputValue(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-[#03995B] text-white rounded-md hover:bg-[#028a4fd0]"
              >
                Search
              </button>
            </form>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-5 mb-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl">Found: {products?.length} items</h2>
                </div>
                <div className="flex items-center gap-2">
                  {/* Display Active Filters */}
                  {getActiveFilters().map((filter, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-300 text-black px-3 py-1 rounded-md"
                    >
                      <span className="mr-2">{filter.value}</span>
                      <button
                        onClick={() => removeFilter(filter.type)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {/* Clear All Button */}
                  {getActiveFilters().length > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-blue-500 underline hover:text-blue-700"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm font-medium">
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="border bg-black rounded-md px-2 py-1"
                  value={sortBy}
                  onChange={(e) => updateFilters({ sortBy: e.target.value })}
                >
                  <option value="createdAt">Newest</option>
                  <option value="price">Price: Low to High</option>
                  <option value="-price">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="-name">Name: Z to A</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[25%] h-full">
            <div className="flex flex-col items-center justify-center border-gray-300 border p-4 rounded-lg shadow-md mb-4 w-full max-w-sm overflow-hidden">
              <h2 className="text-xl font-semibold text-start mb-4 w-full">
                Price Range
              </h2>
              <div className="flex flex-col items-start space-y-2 w-full">
                <form className="flex items-center mb-2 w-full">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-1/2 border rounded-md px-2 py-1"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-1/2 border rounded-md px-2 py-1 ml-2"
                  />
                </form>
                <button
                  onClick={handlePriceApply}
                  className="px-4 py-2 bg-[#03995B] text-white rounded-md hover:bg-[#028a4fd0] w-full"
                >
                  Apply
                </button>
                <button
                  onClick={handlePriceReset}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 w-full"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-gray-300 border p-4 rounded-lg shadow-md mb-4 w-full max-w-sm overflow-hidden">
              <h2 className="text-xl font-semibold text-start mb-4 w-full">
                Brands
              </h2>
              <ul className="space-y-2 text-start w-full">
                {["Brand 1", "Brand 2", "Brand 3", "Brand 4"].map((brand) => (
                  <li
                    key={brand}
                    className={`hover:bg-white hover:text-black pl-5 rounded py-2 ${
                      selectedBrand === brand ? "bg-gray-200 text-black" : ""
                    }`}
                    onClick={() => handleBrandSelect(brand)}
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center border-gray-300 border p-4 rounded-lg shadow-md mb-4 w-full max-w-sm overflow-hidden">
              <h2 className="text-xl font-semibold text-start mb-4 w-full">
                Categories
              </h2>
              <ul className="space-y-2 text-start w-full">
                {["Category 1", "Category 2", "Category 3", "Category 4"].map(
                  (category) => (
                    <li
                      key={category}
                      className={`hover:bg-white hover:text-black pl-5 rounded py-2 ${
                        selectedCategory === category
                          ? "bg-gray-200 text-black"
                          : ""
                      }`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="w-[75%] h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products?.map((product: any, index: number) => (
                <FeaturedCard key={index} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-10 gap-2">
                <button
                  // variant="outline"
                  // size="icon"
                  onClick={() => updateFilters({ page: Math.max(1, page - 1) })}
                  disabled={page === 1}
                  className="h-8 w-8"
                >
                  <BsChevronLeft className="h-4 w-4" />
                </button>

                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  const shouldShow =
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= page - 1 && pageNumber <= page + 1);

                  if (!shouldShow) {
                    if (pageNumber === 2 || pageNumber === totalPages - 1) {
                      return (
                        <span key={pageNumber} className="mx-1">
                          ...
                        </span>
                      );
                    }
                    return null;
                  }

                  return (
                    <button
                      key={pageNumber}
                      className={`h-8 w-8 ${
                        page === pageNumber ? "bg-[#333D4C]" : "border"
                      }`}
                      onClick={() => updateFilters({ page: pageNumber })}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  // variant="outline"
                  // size="icon"
                  onClick={() =>
                    updateFilters({ page: Math.min(totalPages, page + 1) })
                  }
                  disabled={page === totalPages}
                  className="h-8 w-8"
                >
                  <BsChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProductsPage;
