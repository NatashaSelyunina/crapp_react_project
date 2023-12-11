import { useState } from "react";
import imagePic from ".././assets/img/coffee2.jpg";

export const Settings = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <div className="row bg-gray-400">
      <div className="col-md-6 text-lg py-16 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eum dolorum at nam vel fugit est ratione, minus hic non perspiciatis nemo magni culpa doloribus nulla, numquam illo enim quis.</div>
      <div className="col-md-6" style={{backgroundImage: `url(${imagePic})`}}>
      </div>
      <img src={imagePic} alt="" width="200px"/>
    </div>
    <div className="row mt-3">
      <p className="w-full p-8 border-red-700 border-2 text-2xl rounded-3xl">
        Количество кликов: {count}
        </p>
      <p className="w-full p-8 mt-5">
        <button className="border-2 p-2 text-xl rounded-xl border-green-500" 
        onClick={() => {
        setCount(count + 2)
      }}>Нажми</button></p>
    </div>
    </>
  )
};