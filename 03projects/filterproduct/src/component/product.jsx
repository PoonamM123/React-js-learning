const Product=({product})=>{
    const pro=product.map(({img,title,reviews,category,newPrice},index)=>(
         
        <div className="card" key={index}>
            <img src={img} alt="John" style={{width:100 }}/>
            <h1>{title}</h1>
            <p className="title"></p>
            <p>{category}</p>
            <div style={{margin: 24}}>
                <span>{newPrice}</span>
                <span>{reviews}</span>
            </div>
        </div>
            
    ))
    return<>
        <div className="maindiv">
            {pro}
        </div>
    </> 
}
export default Product


