/** Next.js configuration.
 * allowedDevOrigins silences cross-origin warnings for dev asset requests.
 */
const nextConfig = {
  allowedDevOrigins: [
    "localhost:3000",
    "127.0.0.1:3000",
    "192.168.68.52:3000",
  ],
};

export default nextConfig;
