const ShoppingCard = ({ data }) => {
    if (!data || data.length === 0) {
      return (
        <div className="max-w-sm mx-auto p-4 text-center text-gray-500">
          Loading products...
        </div>
      );
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((datalist) => (
          <div
            key={datalist.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={datalist.image}
              alt={datalist.title}
              className="w-full h-56 object-contain p-4 bg-gray-50"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
                {datalist.title}
              </h2>
              <p className="text-gray-500 text-sm mt-1 line-clamp-3">
                {datalist.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-indigo-600">
                  ₹{Math.floor(datalist.price * 80)}
                </span>
                <div className="text-sm text-yellow-500">
                  ⭐ {datalist.rating?.rate}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ShoppingCard;
  



