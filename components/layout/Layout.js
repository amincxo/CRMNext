import Link from "next/link"

function Layout({children}) {
  return (
    <>
        <header className="header" >
            <h2>amin crm</h2>
            <Link href="add-customer" >Add Customer</Link>
        </header>
        <div className="main" >
            {children}
        </div>
        <footer className="footer" >
            <a href="aminborvayeh.ir" target="_blank" rel="noreferrer" >aminborvayeh</a> next js CRM &copy;
        </footer>
    </>
  )
}

export default Layout