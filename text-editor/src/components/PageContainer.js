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
    //command is passed as an argument in handleKeyCommand which goes into RichUtils.handleKeyCommand and if an updated 
    //editorstate is returned to the newstate constant, we call the onChange method
    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    //pass these as props in editor component
    render () {
        return (
            <div className="editorContainer"> 
                <div className="editors">
                <Editor editorState = {this.state.editorState} 
                        handleKeyCommand = {this.handleKeyCommand}
                        onChange = {this.onChange} 
                        placeholder="Click here and start typing your text.."
                        /> 
                </div>
            </div>
            
        );

    }
}
export default PageContainer;