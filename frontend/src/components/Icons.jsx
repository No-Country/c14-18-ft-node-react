export const BackArrowIcon = () => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-first"><path d="m17 18-6-6 6-6"/><path d="M7 6v12"/></svg>
     );
}

export const OpenEyeIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
    )
}

export const ClosedEyeIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
    )
}

export const CrossIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cross"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>
    )
}

export const CalendarIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
    )
}

export const RightArrowIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
    )
}

export const SearchIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    )
}

export const CloseIcon = ({size = '24'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    )
}

export const RightChevronIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
    )
}

export const LeftChevronIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
    )
}

export const ClockIcon = ({size = "24"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    )
}

export const DoctorIcon = ({size = "24"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" version="1.0" viewBox="0 0 640 640"><path d="M282.6 75c-6.4 1.1-19.9 5.6-25.6 8.5-17.7 9.1-34.3 26.4-42.7 44.5-6.9 15-7.5 18.9-8 46.4l-.5 24.8-4.1 4.2c-2.2 2.2-4.8 5.9-5.8 8.2-2.8 6.2-4.2 17.7-3.5 28.4 1.3 20.9 8.1 35.4 19.6 41.8 4.2 2.3 4.9 3.3 7 9.1 3 8.5 6.8 16.2 14.2 28.5l6 9.8-.4 10.2c-.3 9.2-.6 10.7-3 14.3-1.5 2.3-4.3 5.3-6.1 6.7-2.1 1.6-19.4 8.3-44.2 17.2-22.5 8-43.9 16.1-47.7 18-26.1 13.2-47.3 37.8-56.8 66.1-2.9 8.7-15 74.6-15 81.7 0 7.9 5.6 16.7 13.4 20.9l4.1 2.2 233.5.3c156.8.2 235.1-.1 238.3-.8 7.3-1.5 13.1-6 16.3-12.5 3.4-7.2 3.2-10.5-3.6-49.5-6-34.9-7.6-41.2-14-54.6-8.1-17.2-17-28.6-31.8-40.7-14.7-12-19.8-14.3-73.2-33.2-23.8-8.4-36.6-13.5-39-15.3-1.9-1.5-4.7-5.2-6.2-8.2-2.4-4.6-2.8-6.5-2.8-14.1v-8.7l5.2-8.4c5.8-9.3 15.2-28.7 16.2-33.3.5-2.3 1.8-3.6 5.2-5.4 5.3-2.8 11.4-9.5 14.3-15.4 4.2-8.8 5.6-16.4 5.5-32.2 0-17.4-1.5-22.9-8.4-30.8l-4-4.5v-16.1c0-20.1-1.4-33.1-4.7-43.5-9.4-30-33.7-53.7-64.3-62.7-7-2.1-9.7-2.3-43-2.5-19.5-.1-37.7.1-40.4.6zM348 92c32 3.4 57.2 24.4 66.1 55.2 1.7 5.9 2.2 11.1 2.6 27.6.3 11.4.2 20.7-.3 21.1-.5.5-2.1 1.1-3.5 1.5-2.5.5-2.7.3-3.3-3.6-1.8-10.9-9-20-18.3-23.2-8.1-2.8-15.6-2.1-27.8 2.5-17.4 6.6-22.3 7.4-44.5 7.3-21.6-.1-26-.9-43.7-7.8-7.4-2.9-10.6-3.6-16-3.6-14.6.1-25.6 9.1-28.4 23.2-1.1 5.5-1.3 5.7-3.8 5.1-1.4-.3-2.9-.8-3.3-1-1.1-.6-.9-23.8.2-35.4 1.1-11.5 4.7-23.2 9.7-31.9 4.9-8.3 19-22.4 27.3-27.3 8.1-4.7 20.2-8.6 30-9.6 10.9-1.2 46-1.2 57-.1zm-81 96.6c4.1 2 17.8 6.2 26 7.9 10.5 2.3 31.4 3 43.7 1.6 11.8-1.4 25.4-4.8 33.9-8.6 6.2-2.8 12.8-3.4 16.3-1.6 5 2.7 6.8 12.8 7.5 43.3.3 10.1.9 18.5 1.5 19.7 2.4 4.3 9.2 5.5 13.1 2.3 2.7-2.2 3.8-8.3 3.9-22 .1-14 3-18.7 10.5-16.8 4.6 1.1 6.1 6.5 6.1 21.6-.1 20.2-3.1 27.1-13.9 32-6.8 3-6.6 2.8-10.6 15.1-6.2 19.4-30.8 56.5-44.3 66.7-12.2 9.2-25.4 13.5-41.2 13.4-22.3-.2-38.1-8.5-54.4-28.7-12.8-16-25.7-38.4-30.6-53.2-3.2-9.8-4.5-11.5-10.8-13.8-8.4-3-12.4-11.7-13.4-29.1-.9-15.4 2.2-24.4 8.4-24.4 6.5 0 7.9 3.2 8.8 21.5.9 16.6 2.3 19.4 9.6 19.5 2.6 0 4.2-.7 6-2.6 2.4-2.5 2.4-3 3.1-25.7.7-23.3 1.7-32.6 4.1-35.6 3.7-4.9 10.2-5.8 16.7-2.5zm4.5 177.2c3.3 2.4 7.7 5.3 9.7 6.3l3.7 1.9-3.2 6.1c-2.9 5.7-3.2 7-3.2 15.8 0 8.5.3 10.3 2.8 15.3 1.5 3.1 4.6 7.3 6.8 9.3l4.1 3.7-.7 15c-.4 8.3-1.1 14.4-1.5 13.7-.5-.8-8.7-22.6-18.4-48.6-15.3-40.8-17.5-47.5-16.6-49.8l1-2.7 4.8 4.8c2.6 2.6 7.4 6.8 10.7 9.2zM385.3 355c.6 2.9-.1 5.1-27.6 78.7-3.9 10.6-7.5 18.7-7.8 18-.4-.7-1-7.1-1.4-14.4l-.7-13.1 4.2-3.8c2.3-2.1 5.4-6.1 6.8-8.8 2.4-4.6 2.7-6.1 2.7-15.6 0-9.9-.2-10.8-3.1-16.2l-3.1-5.7 7.7-4.5c4.2-2.4 10.6-7.3 14.1-10.9 3.5-3.5 6.7-6.4 7-6.5.4-.1.9 1.1 1.2 2.8zm-142.7 22.2c.7 2.6 53.3 143.5 59.5 159.6 2.1 5.7 3.9 10.7 3.9 11.2 0 .6-40.5 1-108.8 1-119.5 0-113.2.3-113.2-5.9 0-5.1 11.9-70.6 13.9-76.3 7.8-22.4 25.9-43.6 46.5-54.5 6.3-3.3 55.6-21.6 56.3-20.9.2.1-.1 1.6-.6 3.2s-1.2 4-1.5 5.4c-.3 1.5-2.4 3.9-5.1 5.8-12.5 8.8-18.9 32-16.5 60.3 1.4 16.4 4.6 29.2 9.6 39 2.2 4.1 4 7.7 4.2 8.1.6 1.3-4.2.8-6.8-.7-3.5-2-16.2-2-20.1.1-3.9 2-7.3 9.2-6.4 13.4 1.6 7.2 7.4 11 16.8 11 5.1 0 7.1-.5 9.9-2.4 2-1.3 5.5-2.7 7.9-3.1 2.4-.4 6.7-1.6 9.6-2.6 5.1-1.7 5.5-1.7 10.6 0 2.8 1 6.9 2.1 9 2.5 2.1.4 5.4 1.8 7.4 3.2 2.9 2 4.8 2.4 10.5 2.4 8.1 0 12-1.7 14.8-6.3 3.8-6.2 1.3-15.2-5-18.4-3.5-1.8-15.8-1.6-19.4.2-1.5.8-3.9 1.5-5.2 1.5-2.3 0-2.3-.1 1.6-7.3 12.7-23.8 14.7-64.7 4.3-87.8-3-6.5-6.2-10.6-11.7-14.5l-2.9-2.1 2.6-5.8c4-8.6 9.1-15.1 13.5-16.8 2-.9 4.6-2.2 5.7-3.1 2.8-2.2 4.3-2 5.1.6zm164.7 1.7c4.5 2.1 13.9 5.8 20.9 8.2l12.8 4.4v3.8c0 5.4-3.5 15.3-8 22.2-2.1 3.3-4.8 8.4-5.9 11.3-2.3 5.7-4.1 19.6-3.4 25.2.5 3.5.4 3.6-5.2 5.9-6.8 2.8-14.5 10.1-18 17.2-5 9.7-4.9 23.2.1 33.1 11.3 22.3 40.9 27.2 58.6 9.7 13.5-13.4 14.8-34.5 3.1-49.4-3.3-4.3-13.1-11.1-17.2-12-2.6-.6-3-1.1-3.6-5.6-1-7.3 1.1-16.9 5.2-23.6 6.9-11.4 9.2-17.1 11.7-28.5l.6-2.7 12.8 4.4c29.7 10.4 46.8 22.6 59.9 42.7 8.4 12.9 12.1 23.9 16.3 47.9 1.7 10.1 4.2 24.4 5.6 31.8 2.8 15.8 3 19.8.7 22.3-1.5 1.7-6.3 1.8-111.1 1.8-103.8 0-109.4-.1-108.7-1.8.4-.9 2.4-6.4 4.5-12.2 2.1-5.8 14.1-38.2 26.8-72 12.6-33.8 25.1-67.5 27.8-74.7 2.7-7.3 5-13.3 5.2-13.3.2 0 4 1.7 8.5 3.9zm-67.1 6c3.2 2.9 3.3 3.1 3.3 11.1 0 7.9-.1 8.3-3.2 11-3.9 3.5-10.1 4.4-25.1 3.8-7.9-.3-11.4-.9-13.4-2.2-7.5-4.9-7.8-20.2-.4-24.7 2.7-1.7 5.1-1.9 19.3-1.9H337l3.2 2.9zm-128.8 37.2c1.4 1.7 3.6 6.3 4.8 10.2 2 6.2 2.3 9.4 2.3 23.2 0 9.5-.6 18.8-1.4 23-1.7 8.5-5.8 19.6-8.6 23.1l-2.1 2.7-2.3-3.8c-12-20.4-13.1-66.7-2-78.6 3.5-3.7 6.1-3.7 9.3.2zm119 12.1c1 10.6 3.6 52.3 3.6 57.8 0 4.1-1.5 9.4-6.7 23.2-3.6 9.8-6.9 17.8-7.2 17.8-.3 0-3.7-8.5-7.5-18.8l-6.9-18.7 1.7-26.5c.9-14.6 1.9-29.8 2.3-33.8l.6-7.2h19.5l.6 6.2zM441.2 476c1.5 0 8 6.4 9.5 9.4 2.6 5 2.2 12.4-1 17.8-5.2 9-14.5 11.9-24 7.5-16.2-7.4-14.2-30.8 3-35.2 2.9-.7 6-.9 8.3-.4 1.9.5 3.8.9 4.2.9z"/><path d="M426.2 486c-3.6 3.5-4.5 7.4-2.7 11.7 1.5 3.5 6.7 7.3 10.1 7.3 3.4 0 8.8-4.3 10-7.9 1.5-4.5.7-7.7-2.8-11.1-2.4-2.4-3.8-3-7.3-3s-4.9.6-7.3 3z"/></svg>
    )
}

export const LikeIcon = ({size = '24'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
    )
}

export const ToggleIcon = ({size = '24'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    )
}

export const GithubIcon = ({size = '24'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    )
}