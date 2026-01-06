import { useEffect, useState } from "react"

const Mealapi=()=>{
    const [data, setData] =useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res=>res.json())
            .then(jsonData=>setData(jsonData.meals))
            .catch(error => console.error('Error:', error))
    },[])
    const items=data.map(({idMeal,strMealThumb,strMeal})=>{
        return (
            <div key={Math.random()} style={{width:450}}>
                <section style={{display:"flex"}} className="itemSection">
                    <img style={{width:250, height:250}} src={strMealThumb} alt={idMeal} />
                    <ul>
                        <li>{idMeal}</li>
                        <li>{strMeal}</li>
                    </ul>
                </section>
            </div>
        )
    })
    return <>
    <div  style={{display:"flex" ,gap:25 ,flexWrap:"wrap"}}>
        {items}
    </div>
    </>
}
export default Mealapi