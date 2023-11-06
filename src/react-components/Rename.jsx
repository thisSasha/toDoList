import { useState } from "react";
import { changeWrapperStatus, renamedTaskText, wrapperStatus } from "../store";

export function closeRenameBlock(e) {
    if(e.target.classList.contains('wrapper')){
        changeWrapperStatus()
    } else if(e.target.id == 'saveRename'){

    }
};

function Rename(props) {
    const [text, setText] = useState(renamedTaskText);
    return (
        <div className={"wrapper " + wrapperStatus} onClick={closeRenameBlock}>
            <div className="renameBlock">
                <h3>Изменение</h3>
                <input type="text" value={text}/>
                <button onClick={closeRenameBlock} id="saveRename">Сохранить</button>
            </div>
        </div>
    );
}

export default Rename;