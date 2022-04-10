import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Task Manager</title>
      </Head>
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
