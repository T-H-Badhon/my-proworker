/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetAllJobsQuery } from "../redux/api/jobApi";

// Job data
const jobs = [
  {
    title: "First Job Post",
    description: "First Job Post description, update",
    created_by: 1,
    created_at: "2025-01-05T17:40:37.190392Z",
  },
  {
    title: "First Job Post",
    description: "First Job Post description",
    created_by: 1,
    created_at: "2025-01-05T17:41:40.200179Z",
  },
  {
    title: "3rd Job Post",
    description: "3rd Job Post description",
    created_by: 2,
    created_at: "2025-01-05T19:07:42.751902Z",
  },
  {
    title: "4th Job Post",
    description: "4th Job Post description",
    created_by: 1,
    created_at: "2025-01-05T19:08:56.681328Z",
  },
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const JobCard = ({ job }: { job: any }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Created by: User {job.created_by}</span>
        <span>{formatDate(job.created_at)}</span>
      </div>
    </div>
  </div>
);

const JobList = () => {

    const {data:jobData}= useGetAllJobsQuery({})
    console.log(jobData)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

const Header = () => (
  <header className="bg-blue-600 text-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">JobBoard</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              Post a Job
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-100 mt-12">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-gray-600">
            JobBoard is your go-to platform for finding and posting job
            opportunities across various industries.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-600">Email: info@jobboard.com</p>
          <p className="text-gray-600">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
        <p>&copy; 2025 JobBoard. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Homepage = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-grow">
      <JobList />
    </main>
    <Footer />
  </div>
);

export default Homepage;
