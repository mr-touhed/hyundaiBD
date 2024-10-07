import Link from "next/link";

export const metadata = {
    title: "Hyundai | Bangladesh",
    description: "Hyundai Bangladesh | &raquo; Comments Feed",
  };


export default function RootAdminLayout({ children }) {
    return (
        <section className="grid grid-cols-[350px_1fr]  min-h-screen gap-4">
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav className=" mt-16 mx-1  ">
              
                 
                    <ul class=" list-inside w-full  flex flex-col gap-4">
                        <li class="list-group-item w-full flex ">
                            
                            <Link className="p-3 bg-primary text-[white]  w-full" href="/admin/create-news">Create News</Link>
                            </li>
                        <li class="list-group-item w-full flex ">
                            
                            <Link className="p-3 bg-primary text-[white]  w-full" href="/admin/test-drive-request">Test Drive Request</Link>
                            </li>
                        <li class="list-group-item w-full flex ">
                            
                            <Link className="p-3 bg-primary text-[white]  w-full" href="/admin/customers-query">Customer Query</Link>
                            </li>
                            <li class="list-group-item w-full flex ">
                            
                            <Link className="p-3 bg-primary text-[white]  w-full" href="/admin/create-news">Post News</Link>
                            </li>
                            
                        
                    </ul>
                    
                
        </nav>
   
            <div className="mr-4"> 
            {children}
            </div>
      </section>
    );
  }