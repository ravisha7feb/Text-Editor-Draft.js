import React from "react";
import { EditorState, RichUtils } from "draft-js";
import 'draft-js/dist/Draft.css'
import Editor from 'draft-js-plugins-editor';
import createHighlightPlugin from './plugins/highlightPlugin'
import '../App.css'
import BlockStyleToolbar, { getBlockStyle } from "./blockStyles/BlockStyleToolbar";

const highlightPlugin = createHighlightPlugin();

class PageContainer extends React.Component {
    constructor(props) {
        super(props) //used to call the constructor of its parent class
        this.state = {
			editorState: EditorState.createEmpty() //sets its content to empty
		};
        this.plugins = [
            highlightPlugin
        ];
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

    
    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
    }
    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }
    onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
    }
    onStrikeThroughClick = () => {
    this.onChange(
        RichUtils.toggleInlineStyle(this.state.editorState, "STRIKETHROUGH")
    );
    };

    onHighlight = () => {
    this.onChange(
        RichUtils.toggleInlineStyle(this.state.editorState, "HIGHLIGHT")
    );
    };
    //pass these as props in editor component
    
    toggleBlockType = blockType => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
    };

    render () {
        return (
           
            <div className="editorContainer"> 

                <div className="PageName" > Text Editor using <a href="https://github.com/facebook/draft-js">Draft.js</a> </div>

                <BlockStyleToolbar
            editorState={this.state.editorState}
            onToggle={this.toggleBlockType}
          />
                
                <button onClick={this.onBoldClick}><b>B</b></button>
                <button onClick={this.onUnderlineClick}><u>U</u></button>
                <button onClick={this.onItalicClick}><em>I</em></button>
                <button className="strikethrough" onClick={this.onStrikeThroughClick}>abc</button>

                <button className="highlight-button" onClick={this.onHighlight} style={{background:"yellow"}}>
                H
                </button>
                
                <div className="editors">
                <Editor editorState = {this.state.editorState} 
                        handleKeyCommand = {this.handleKeyCommand}
                        onChange = {this.onChange} 
                        placeholder="Click here and start typing your text.."
                        plugins={this.plugins}
                        blockStyleFn={getBlockStyle}
                        /> 
                </div>
                <div className="save-file"> <button> Save File </button> </div>
            </div>
            
        );

    }
}
export default PageContainer;