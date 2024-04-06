

function ProductThree() {
  return (
    <div className="grid items-center w-full px-2 py-10 mx-auto space-y-4 max-w-7xl md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="border rounded-md">
          <img
            src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">Nike Airmax v2</h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Sneakers
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Nike
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Airmax
              </span>
            </div>
            <div className="flex items-center mt-3 space-x-2">
              <span className="block text-sm font-semibold">Colors : </span>
              <span className="block w-4 h-4 bg-red-400 border-2 border-gray-300 rounded-full"></span>
              <span className="block w-4 h-4 bg-purple-400 border-2 border-gray-300 rounded-full"></span>
              <span className="block w-4 h-4 bg-orange-400 border-2 border-gray-300 rounded-full"></span>
            </div>
            <div className="flex items-center mt-5 space-x-2">
              <span className="block text-sm font-semibold">Size : </span>
              <span className="block p-1 px-2 text-xs font-medium border border-gray-300 rounded-md cursor-pointer">
                8 UK
              </span>
              <span className="block p-1 px-2 text-xs font-medium border border-gray-300 rounded-md cursor-pointer">
                9 UK
              </span>
              <span className="block p-1 px-2 text-xs font-medium border border-gray-300 rounded-md cursor-pointer">
                10 UK
              </span>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductThree
