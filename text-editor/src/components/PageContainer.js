import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

class PageContainer extends React.Component {
    constructor(props) {
        super(props) //used to call the constructor of its parent class
        this.state = {
			editorState: EditorState.createEmpty() //sets its content to empty
		};
    }
    //pass this as prop in editor component
    render () {
        return (
            <div> 
                <p>Work in progress</p>
                <Editor editorState={this.state.editorState} /> 
            </div>
            
        );

    }
}
export default PageContainer;
