import NextImage from "next/image"

export default function Logo({
  width = 38,
  height = 38,
}: {
  width?: number
  height?: number
}) {
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5001 29.8333C23.8639 29.8333 29.8334 23.8638 29.8334 16.5C29.8334 9.13619 23.8639 3.16666 16.5001 3.16666C9.13628 3.16666 3.16675 9.13619 3.16675 16.5C3.16675 23.8638 9.13628 29.8333 16.5001 29.8333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.5801 11.1667L27.2334 24.42" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13.4199 11.1667H28.7266" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.3401 16.5L17.9934 3.24667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13.4199 21.8333L5.7666 8.57999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.5801 21.8333H4.27344" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22.6599 16.5L15.0066 29.7533" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
