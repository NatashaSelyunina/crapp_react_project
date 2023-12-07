import styles from "./Profile.module.css"

export const Profile = (props) => {
  let user = props.function();

  return (
    <div className="row">
      <div className="col-md-4">
        <img src={user.avatar} alt="" width="100%" className={styles.image}/>
      </div>
      <div className="com-md-8">
        <h3 style={{backgroundColor: "green", padding: "0.5rem", borderRadius: "10px", color: "white"}}>
          Фамилия и имя: <span>{user.lastname} {user.name}</span></h3>
        <p className="h3">Email: <span className={styles.email}>{user.email}</span></p>
        <p className={styles.id}>ID: <span>{user.id}</span></p>
        <p>{user.about}</p>
      </div>
    </div>
  )
};