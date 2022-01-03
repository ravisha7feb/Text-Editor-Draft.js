import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

class PageContainer extends React.Component {
    constructor(props) {
        super(props) //used to call the constructor of its parent class
        this.state = {
			editorState: EditorState.createEmpty() //sets its content to empty
		};
    }
    //create onChange function and pass this also as a prop in editor
    onChange = editorState => {
		this.setState({
			editorState
		});
	};
    //pass these as props in editor component
    render () {
        return (
            <div> 
                <p>Work in progress</p>
                <Editor editorState={this.state.editorState} 
                        onChange = {this.onChange} /> 

            </div>
            
        );

    }
}
export default PageContainer;
