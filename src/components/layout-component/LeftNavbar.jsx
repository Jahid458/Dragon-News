import { useEffect, useState } from "react";

const LeftNavbar = () => {

  // {
  //   "category_id": "01",
  //   "category_name": "Breaking News"
  //   }

   const [categories,seCategories] = useState([]);
   useEffect(()=>{
      fetch("https://openapi.programming-hero.com/api/news/categories")
      .then(res=>res.json())
      .then(data => seCategories(data.data.news_category))
   },[])
  return <div>
    <h2 className="font-semibold mb-2">All Caterogy ({categories.length})</h2>
    <div className="flex flex-col gap-2">
      {
        categories.map(category => <button className="btn" key={category.category_id}>
          {category.category_name}
        </button>)
      }
    </div>
  </div>;
};

export default LeftNavbar;
