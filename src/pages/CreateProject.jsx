export default function CreateProject() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary-light p-10">
      <div className="mb-6 flex w-full justify-start">
        <img src="/images/logo.png" alt="Logo" className="h-16 w-16" />
      </div>

      <h1 className="mb-2 text-center text-xl font-bold text-secondary">
        Create Project
      </h1>
      <p className="mb-6 text-center text-sm text-secondary">
        Connect your blog to get started
      </p>

      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <p className="mb-4 text-xs font-medium text-gray-700">
          Choose your blog platform
        </p>
        <div className="mb-6 flex gap-4">
          <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 p-3">
            <img
              src="/images/wordpress-logo.png"
              alt="WordPress"
              className="h-6 w-6"
            />
            <span className="text-sm font-medium text-gray-700">WordPress</span>
          </div>
          <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 p-3">
            <img
              src="/images/wordpress-logo.png"
              alt="WordPress"
              className="h-6 w-6"
            />
            <span className="text-sm font-medium text-gray-700">WordPress</span>
          </div>
        </div>

        <p className="mb-2 text-xs font-medium text-gray-700">
          Type your blog URL
        </p>
        <input
          type="text"
          placeholder="Enter your blog URL"
          className="mb-6 w-full rounded-lg border border-gray-300 p-3 text-xs shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />

        <div className="flex justify-between">
          <button
            type="button"
            className="rounded-lg bg-secondary px-4 py-2 text-white hover:bg-primary"
          >
            Skip
          </button>
          <button
            type="submit"
            className="rounded-lg bg-secondary px-4 py-2 text-white hover:bg-primary"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
