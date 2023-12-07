export const Messages = (props) => {
  let users = props.function();
  console.log(users);
  return (
    <div className="row mt-5">
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Фамилия</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <th>Mark</th>
              <th>Otto</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};