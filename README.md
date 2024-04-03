# Bulk Email Tool Frontend

Welcome to the frontend code repository for the Bulk Email Tool. This repository contains the frontend implementation using React.js. Below is a comprehensive guide to understanding the functionalities, components, setup instructions, backend integration, deployment, and license information.

#### Functionality Overview:

1. **User Authentication:**
   - Enables user registration and login functionalities.
   - Implements robust form validation using Yup schema.
   - Supports forgot password and password reset features for enhanced security.

2. **Dashboard:**
   - Presents a user-friendly dashboard with options for daily and monthly email lists.
   - Utilizes React Router for seamless navigation between pages.

3. **Send Email:**
   - Empowers users to compose and send emails to multiple recipients effortlessly.
   - Integrates formik for efficient form management and validation.
   - Utilizes axios for making asynchronous API requests to the backend.

4. **Email Analytics:**
   - Provides insightful analytics on daily and monthly email counts for users.
   - Fetches data from the backend to display meaningful insights.

#### Components Overview:

- **RegisterPage:** Allows new users to register by providing necessary details.
- **LoginPage:** Facilitates existing users to log in securely with their credentials.
- **ForgotPassword:** Enables users to request a password reset link via email for account recovery.
- **ResetPassword:** Ensures users can securely reset their password to regain access to their accounts.
- **HomePage:** Provides a user-friendly interface for composing and sending emails efficiently.
- **Dashboard:** Offers a centralized hub for users to manage their email lists effectively.
- **Dailylist:** Displays the daily email list tailored to the current user's preferences.
- **MonthlyList:** Showcases the monthly email list customized to the user's requirements.
- **Navbar:** Enhances user experience by providing easy navigation between different sections of the application.

#### Setup Instructions:

1. **Clone Repository:**
   ```
   git clone <repository-url>
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

3. **Start Development Server:**
   ```
   npm start
   ```

4. **Access Application:**
   Open your web browser and navigate to [Bulk Email Tool Web](https://bulk-email-tool-web.netlify.app/).

#### Backend Integration:

- **Backend GitHub Repository:** [Bulk Email Tool Backend](https://github.com/YUSRIN20/Bulk-Email-Tool-Backend.git)

#### Deployment:

- **Netlify Deployment:** [Bulk Email Tool Frontend](https://bulk-email-tool-web.netlify.app/)

#### License:

This project is licensed under the [MIT License](LICENSE).
