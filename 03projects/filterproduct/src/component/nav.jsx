const Nav=({data,setProduct})=>{
    const filterdata=(e)=>{
        const category=e.target.value;
        const copy=data.filter((fil)=> fil.category===category)
        setProduct(copy)
    }
    return<>
    <div className="yes">
        <button onClick={()=>{setProduct(data)}}>All</button>
        <button value="sneakers" onClick={filterdata}>sneakers</button>
        <button value="flats" onClick={filterdata}>flats</button>
        <button value="sandals" onClick={filterdata}>sandals</button>
        <button value="heels" onClick={filterdata}>heels</button>
    </div>
    </>
}
export default Nav