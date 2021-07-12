import './ToolBox.scss';
const ToolBox = ({setContentEditable, contentEditableStatus, deleteHandler, editHandler, returnStateHandler, validdation, comments, editStateOnSave}) => {
    return (
        <div className="toolbox">
            {(contentEditableStatus) ? comments ? 
            (<>
            <i className="bi bi-backspace" onClick={() => {
            returnStateHandler();
            setContentEditable(false);
            }}></i>
            <i className="bi bi-save" 
            onClick={() => {
            editHandler();
            editStateOnSave();
            setContentEditable(false);
            }}></i>
            </>) : <i className="bi bi-save" 
            onClick={() => {
                editHandler();
                setContentEditable(false);
            }}></i> 
            : <i className="bi bi-pencil" onClick={() => {
            setContentEditable(true)
            }}></i>}
            <i className="bi bi-trash" onClick={deleteHandler}></i>
        </div>
    )
}

export { ToolBox };