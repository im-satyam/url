
const Footer = () => {
  return (
    <>
        <footer className="bg-gray-800 text-white py-4 text-center shadow-lg rounded-lg mt-8 bottom-0 w-full">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} URL Shortener. All rights reserved.
            </p>
            <p className="text-xs mt-2">
            Made with ❤️ by Satyam Kumar
            </p>
        </footer>
    </>
  )
}

export default Footer