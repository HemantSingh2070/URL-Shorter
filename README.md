# URL-Shortner

URL-Shortner is a web application designed to shorten long URLs, making them easier to share and manage. It takes a long URL as input and returns a shortened version that redirects to the original URL.

## Project Setup

### 1. Clone the repository

Clone this repository to your local machine using:

```bash
git clone <repository_url>
```
# URL-Shortner - Dependencies and Future Enhancements

## Dependencies

This project uses the following dependencies:

- **cookie-parser**: For parsing cookies to manage user sessions.
- **dotenv**: For managing environment variables such as database URIs and JWT secrets.
- **ejs**: For rendering dynamic HTML templates in the web application.
- **jsonwebtoken**: For secure user authentication through JSON Web Tokens (JWT).
- **mongoose**: For interacting with MongoDB, used to store and retrieve data.
- **nodemon**: For automatically restarting the server during development when changes are made.
- **short-id**: For generating unique and short IDs that act as shortened versions of long URLs.

## Future Enhancements

Here are some planned features to improve the URL-Shortner:

- **Allow users to customize the shortened URL**: Enable users to create custom shortened URLs instead of automatically generated ones.
- **Implement an analytics feature**: Track the number of clicks on each shortened URL to provide analytics on URL usage.
- **Add a user authentication system**: Allow users to sign in and manage their shortened URLs with personalized accounts.

Feel free to contribute to the project, explore the code, or suggest new features! 🚀
