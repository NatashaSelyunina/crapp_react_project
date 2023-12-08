import imagePic from ".././assets/img/coffee2.jpg";

export const Settings = () => {
  return (
    <div className="row bg-gray-400">
      <div className="col-md-6 text-lg py-16 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eum dolorum at nam vel fugit est ratione, minus hic non perspiciatis nemo magni culpa doloribus nulla, numquam illo enim quis.</div>
      <div className="col-md-6" style={{backgroundImage: `url(${imagePic})`}}>
      </div>
      <img src={imagePic} alt="" width="200px"/>
    </div>
  )
};