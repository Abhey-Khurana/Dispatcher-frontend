export function PdfIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-md ${className}`}>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 48 48"
  >
    <path
      fill="#e53935"
      d="M40 45H8c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h24l11 11v28c0 1.657-1.343 3-3 3z"
    />
    <path fill="#b71c1c" d="M32 3v11h11z" />
    <path
      fill="#fff"
      d="M15 35h-2V20h6c1.657 0 3 1.343 3 3v2c0 1.657-1.343 3-3 3h-4zm0-9h4v-3h-4zm13 9h-7V20h7c1.657 0 3 1.343 3 3v9c0 1.657-1.343 3-3 3zm-5-2h5c.552 0 1-.448 1-1v-9c0-.552-.448-1-1-1h-5zm11 2V20h9v2h-7v4h6v2h-6v7z"
    />
  </svg>
    </div>
  );
}
