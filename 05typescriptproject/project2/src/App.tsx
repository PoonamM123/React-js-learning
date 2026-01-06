
import { useState } from 'react'
import Navigation from './assets/component/Navigation'
import Pepoletofollow from './assets/component/Peopletofollow'
import Toptopic from './assets/component/Toptopic'
import Trenlist from './assets/component/Trendlist'
import type { Blog } from './type'
import { BlogcontextProvider } from './assets/component/shared/Blogcontext'
import {IoMdAddCircle} from "react-icons/io"
import Modal from './assets/component/Modal'
import Blogform from './assets/component/Blogform'
import Articallist from './assets/component/Articallist'
function App() {
  const [modelopen,setModelopen]=useState(false);
  const [editingBlog,setEditingBlog]=useState<Blog | null>(null)

  const newBlogmake=()=>{
    setModelopen(true);
    setEditingBlog(null);
  }
  const editblogfun=(blog:Blog)=>{
    setModelopen(true);
    setEditingBlog(blog);
  }
  const onClose=()=>{
    setModelopen(false)
  }
  return (
    <>
      <BlogcontextProvider>
        <Navigation/>
        <div className='flex justify-center'>
          <div  className="mx-auto p-6">
             <button
                onClick={newBlogmake}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
              </button>

              <Articallist onEdit={editblogfun}/>
              {modelopen && 
                <Modal onClose={onClose}>
                    <Blogform 
                    existingBlog={editingBlog}
                    onClose={onClose}/>
                </Modal>}
          </div>
          <div className='w-[30%]'>
            <Pepoletofollow/>
            <Trenlist/>
            <Toptopic/> 
          </div>
        </div>
      </BlogcontextProvider>
    </>
  )
}

export default App
