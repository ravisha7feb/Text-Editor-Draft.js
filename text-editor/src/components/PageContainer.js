import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

//render editor component within the PageContainer class
class PageContainer extends React.Component {
    render () {
        return (
            <div>
                <Editor/>
            </div>
            
        )
        
    }
}
