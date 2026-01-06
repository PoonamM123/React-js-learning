import type{ Blog } from "../../type";
import Articalcard from "./Articalcard";
import  {usseBlog}  from "./shared/Blogcontext";

interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}
const  Articallist=({onEdit}:ArticleListProps)=>{
    const { blogs, deleteBlog } = usseBlog();
    return<>
         <div className="ml-[5rem]">
      {blogs.map((blog) => (
        <Articalcard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={() => onEdit(blog)}
        />

      ))}
    </div>
    </>

}
export default Articallist