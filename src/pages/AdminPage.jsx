import InputForm from "../components/InputForm";
import TableAdmin from "../components/shared/TableAdmin";
const AdminPage = (props) => {
    return (
        <>
            <InputForm data={props.data} addEmployee={props.addEmployee}/>
            <TableAdmin id={props.id} data={props.data} sector={props.sector} deleteEmployee={props.deleteEmployee}/>
        </>
    );
}


export default AdminPage