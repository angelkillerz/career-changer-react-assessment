const SectorButton = ( props ) => {

    return (
        <>
        <div className="btn-container">
            <button onClick={() => props.handleSector('user')}>User Home Sector</button>
            <button onClick={() => props.handleSector('admin')}>Admin Home Sector</button>
        </div>
            
        </>
    );
}

export default SectorButton;