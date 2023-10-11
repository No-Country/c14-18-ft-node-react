import Link from 'next/link'

export default function Home() {
  return (
    <main style={{height: '100vh', display: 'flex', flexDirection: 'column', placeItems: 'center'}}>
      <h1>Landing Page</h1>
      <Link href={'/sign-up'} style={{backgroundColor: '#4070f4', color: '#fff', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none'}}>
        Registrarse
      </Link>
    </main>
  )
}