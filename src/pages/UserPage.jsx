import TableAdmin from "../components/shared/TableAdmin";

const UserPage = (props) => {
    return(
        <>
            <TableAdmin data={props.data} sector={props.sector}/>
        </>
        
    );
}

export default UserPage;