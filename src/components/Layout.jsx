import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Task Manager</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Task Manager</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
