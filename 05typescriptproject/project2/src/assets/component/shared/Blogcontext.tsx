import { createContext,useContext, useState, type ReactNode } from "react";
import type { Blog }  from "../../../type";
type BlogcontextType={
    blogs: Blog[];
    addBlog: (blog: Blog) => void;
    updateBlog: (blog: Blog) => void;
    deleteBlog: (id: number) => void;
}
export type childrentype={
    children:ReactNode;
}
export const BLogcontext=createContext<BlogcontextType | undefined>(undefined)

export const BlogcontextProvider=({children}:childrentype)=>{
    const[blogs,setBlogs]=useState<Blog[]>([]);
    const addBlog=(blog:Blog)=>{
        setBlogs([...blogs,blog]);
    }
    const updateBlog=(updatedBlog: Blog)=>{
        setBlogs(blogs.map((blog)=>(updatedBlog.id===blog.id? updatedBlog : blog)));
    }
    const deleteBlog=(id: number)=>{
        setBlogs(blogs.filter((blog)=>(blog.id !== id)))
    }
    return<>
        <BLogcontext.Provider value={{blogs,addBlog,updateBlog,deleteBlog}}>
            {children}
        </BLogcontext.Provider>
    </>
}

export const usseBlog=()=>{
    const context = useContext(BLogcontext);
    if(!context){
        throw new Error("Use proivder within blog provider");
    }
    return context;
}