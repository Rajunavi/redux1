import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {  useNavigate } from "react-router-dom";
import produtAction from "../redux/action/productAction";

function Home() {
//   const [data, setData] = useState([]);
  const nav = useNavigate();
  const dispatch = useDispatch()
  const proData = useSelector((s)=>s.productR)


  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const d = await res.json();
    dispatch(produtAction(d.products))

    // setData(d.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(proData);

  return (
    <div className="container">
      {proData.map((x) => (
        <div key={x.id}>
          
          <img height={300} width={400}
            src={x.thumbnail}
            alt=""
            onClick={() => nav("product", { state: x })}
            
          />
          <h2>{x.title}</h2>
          <h3>$.{x.price}</h3>
          {/* {x.images.map((y)=><img key={y} src={y} onClick={()=>nav("product",{state:x})}/>)} */}
        </div>
      ))}
    </div>
  );
}

export default Home;
