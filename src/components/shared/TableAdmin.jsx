import Button from "./Button";
const TableAdmin = (props) => {
    return (
        <div className="table-container">
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    {props.sector === 'admin' ? <th>Action</th> : null}
                </tr>
                
            </thead>
            <tbody>

                {props.data.length > 0 && props.data.map((employee, index) => {

                    return (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.position}</td>
                            { props.sector === 'admin' ? <td><Button id={employee.id} data={props.data} deleteEmployee={props.deleteEmployee}/></td> : null}
                        </tr>
                    );

                })}
            </tbody>

        </table>
        </div>
        
    );
}

export default TableAdmin;