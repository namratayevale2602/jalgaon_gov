import { useState, useEffect } from "react";
import {
  FiSearch,
  FiDownload,
  FiChevronRight,
  FiCalendar,
} from "react-icons/fi";

const GRDirectory = () => {
  const [grs, setGrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    department: "",
    year: "",
    status: "active",
  });

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setGrs([
        {
          id: 1,
          grNumber: "GR/UD/2023/4567",
          title: "Jalgaon Water Supply Improvement Project",
          date: "2023-03-15",
          department: "Urban Development",
          status: "active",
          pdfUrl: "#",
        },
        {
          id: 2,
          grNumber: "GR/ED/2023/1234",
          title: "Primary School Infrastructure Upgrade",
          date: "2023-02-28",
          department: "Education",
          status: "active",
          pdfUrl: "#",
        },
        {
          id: 3,
          grNumber: "GR/TR/2022/7890",
          title: "District Road Maintenance Program",
          date: "2022-11-15",
          department: "Transport",
          status: "archived",
          pdfUrl: "#",
        },
        {
          id: 4,
          grNumber: "GR/HS/2023/3456",
          title: "Rural Health Center Expansion",
          date: "2023-01-10",
          department: "Health Services",
          status: "active",
          pdfUrl: "#",
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const filteredGRs = grs.filter((gr) => {
    const matchesSearch =
      gr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gr.grNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilters =
      (filters.department === "" || gr.department === filters.department) &&
      (filters.year === "" || gr.date.startsWith(filters.year)) &&
      (filters.status === "" || gr.status === filters.status);

    return matchesSearch && matchesFilters;
  });

  const departments = [...new Set(grs.map((gr) => gr.department))];
  const years = [...new Set(grs.map((gr) => gr.date.substring(0, 4)))];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Government Resolutions
        </h1>
        <p className="text-gray-600">
          Browse and search official government resolutions
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search GRs by title or number..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.department}
              onChange={(e) =>
                setFilters({ ...filters, department: e.target.value })
              }
            >
              <option value="">All Departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.year}
              onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            >
              <option value="">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            >
              <option value="active">Active</option>
              <option value="archived">Archived</option>
              <option value="">All Statuses</option>
            </select>
          </div>
        </div>
      </div>

      {/* GR List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 bg-gray-50 px-4 py-3 border-b border-gray-200 text-sm font-medium text-gray-500">
          <div className="col-span-3">GR Number</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-2">Department</div>
          <div className="col-span-2">Date</div>
        </div>

        {/* GR Items */}
        {filteredGRs.length > 0 ? (
          filteredGRs.map((gr) => (
            <div
              key={gr.id}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 px-4 py-3">
                <div className="col-span-3 mb-2 md:mb-0">
                  <p className="text-sm font-medium text-blue-600">
                    {gr.grNumber}
                  </p>
                  <div className="md:hidden flex items-center text-xs text-gray-500 mt-1">
                    <FiCalendar className="mr-1" />
                    {new Date(gr.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="col-span-5 mb-2 md:mb-0">
                  <p className="font-medium text-gray-800">{gr.title}</p>
                </div>
                <div className="col-span-2 mb-2 md:mb-0">
                  <p className="text-sm text-gray-600">{gr.department}</p>
                </div>
                <div className="col-span-2 flex justify-between items-center">
                  <div className="hidden md:block text-sm text-gray-500">
                    {new Date(gr.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="p-1 text-gray-400 hover:text-blue-600"
                      title="Download"
                    >
                      <FiDownload size={16} />
                    </button>
                    <button
                      className="p-1 text-gray-400 hover:text-blue-600"
                      title="View Details"
                    >
                      <FiChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            No GRs found matching your criteria
          </div>
        )}
      </div>

      {/* Pagination would go here */}
      <div className="mt-6 flex justify-center">
        <nav className="inline-flex rounded-md shadow-sm -space-x-px">
          <button className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-blue-600 hover:bg-blue-50">
            1
          </button>
          <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default GRDirectory;
