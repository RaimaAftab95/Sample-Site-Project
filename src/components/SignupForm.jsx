import PropTypes from 'prop-types';
import SocialSignupButtons from './SocialSignupButtons';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';
import toast from 'react-hot-toast';

export default function SignupForm({ formData, handleChange }) {
  const { firstName, lastName, email, password } = formData;
  const { register, isLoading, error } = useRegister();
  const navigate = useNavigate();

  /**
   * Handle form submission
   * @param {import('react').SyntheticEvent} e Event object
   * @returns {void}
   */
  async function handleFormSubmit(e) {
    e.preventDefault();

    await toast.promise(
      register({
        firstName,
        lastName,
        email,
        password
      }),
      {
        loading: 'Creating account...',
        success: 'Account created successfully!',
        error: 'Failed to create account. Please try again!'
      }
    );

    navigate('/create-project');
  }

  return (
    <div className="w-full max-w-sm flex-1 rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-xl font-semibold text-primary hover:text-primary-dark">
        Sign Up
      </h2>
      <h6 className="text-center text-sm">Time to automate your SEO with AI</h6>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4 mt-5">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName || ''}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-xs"
            placeholder="First Name"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName || ''}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-xs"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4 mt-5">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-xs"
            placeholder="Email"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password || ''}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-xs"
            placeholder="Password must NOT have fewer than 8 characters"
          />
        </div>

        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="agreedToTerms"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="mr-2 text-xs"
          />
          <label htmlFor="agreedToTerms" className="text-xs text-gray-700">
            I agree to the{' '}
            <a
              href="/terms"
              className="text-xs text-primary hover:text-primary-dark hover:underline"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy-policy"
              className="text-xs text-primary hover:text-primary-dark hover:underline"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="hover:bg-darkestbrown w-full rounded-md bg-primary py-2 text-xs text-white hover:bg-primary-dark"
          disabled={!formData.agreedToTerms}
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>

        {/* Error Message */}
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

        <div className="mt-6">
          <SocialSignupButtons />
        </div>
      </form>
    </div>
  );
}

// Define propTypes for validation
SignupForm.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    agreedToTerms: PropTypes.bool.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
