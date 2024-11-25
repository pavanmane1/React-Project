import React from "react";

const TailwindCSSScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Container */}
      <div className="container mx-auto scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Page */}
        <div className="snap-start h-screen flex flex-col items-center justify-center">
          {/* Keyband Section */}
          <div
            id="keyband"
            className="flex items-center justify-center p-2 space-x-5"
          >
            <input
              type="text"
              className="p-2 bg-gray-100 border border-gray-300 rounded"
              placeholder="Enter text"
            />
            <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Submit
            </button>
          </div>

          {/* Radio Sections */}
          <div className="flex space-x-5 mt-5">
            <div className="border border-gray-300 rounded-lg p-4 w-52">
              <p className="text-sm font-semibold">Customer Radio Section</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 w-52">
              <p className="text-sm font-semibold">Supplier Radio Section</p>
            </div>
          </div>

          {/* Test Form */}
          <form
            id="testform"
            className="max-w-4xl mt-5 p-5 bg-white border border-gray-200 rounded"
          >
            <div className="field-container flex items-center mb-4">
              <label className="mr-2 font-bold">Field:</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Submit
            </button>
          </form>

          {/* Details Section */}
          <div className="details max-w-4xl mt-5 p-5 bg-white border border-gray-200 rounded">
            <div className="detail-item mb-5">
              <span className="font-bold">Detail:</span>
              <span className="ml-2">Sample Text</span>
            </div>
            <div className="detailactionbutton flex justify-evenly">
              <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                Action 1
              </button>
              <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                Action 2
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div className="detailtable w-full max-w-6xl mt-5 bg-white border border-gray-200 rounded p-2 overflow-y-auto h-[60vh]">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="p-2 border">Header 1</th>
                  <th className="p-2 border">Header 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Row 1 Col 1</td>
                  <td className="p-2 border">Row 1 Col 2</td>
                </tr>
                <tr>
                  <td className="p-2 border">Row 2 Col 1</td>
                  <td className="p-2 border">Row 2 Col 2</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination Section */}
          <div
            id="paginationFirst"
            className="flex justify-center gap-2 mt-5 mb-10"
          >
            <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800">
              Prev
            </button>
            <button className="bg-gray-300 text-black p-2 rounded">1</button>
            <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindCSSScreen;
