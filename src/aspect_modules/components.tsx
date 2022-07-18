import * as React from "react";
import './components.css';

function removeUndefinedProperties(obj: any = {}) {
const newObj: any = {};
Object.keys(obj).forEach(key => {
if (obj[key] !== undefined) {
newObj[key] = obj[key];
}
});
return newObj;
}

export class AddCustomCodeView extends React.Component<
AddCustomCodeView.Props,
AddCustomCodeView.State
> {
_isMounted = false;
get customState() {
if (this.props.hasError === true) {
return 'error';
}
return 'default';
}

constructor(props: AddCustomCodeView.Props) {
super(props);
this.state = new AddCustomCodeView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'error':
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Add HTML" style={{
fontSize: 15,
fontWeight: 600
}} />
<span className="aspect-span" children={this.props.errorMessage} style={{
color: 'red',
fontSize: 13
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 4,
justifyContent: 'flex-start',
padding: '0 4px 16px'
}} />
<div className="aspect-div" children={
<><textarea className="aspect-textarea" autoFocus={true}
name="textarea"
placeholder="Insert html code" style={{
backgroundColor: '#f5f5f5',
border: 'none',
fontSize: 13,
height: 140,
minWidth: 200,
outline: 'none',
padding: 12,
width: 400
}} />
<VisualEditorCallToActionButton text="Add" /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
gap: 12
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
alignItems: 'flex-start',
boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
display: 'grid',
padding: '26px 32px 32px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Add HTML" style={{
fontSize: 15,
fontWeight: 600
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
padding: '0 4px 16px'
}} />
<div className="aspect-div" children={
<><textarea className="aspect-textarea" autoFocus={true}
name="textarea"
placeholder="Insert html code" style={{
backgroundColor: '#f5f5f5',
border: 'none',
fontSize: 13,
height: 140,
minWidth: 200,
outline: 'none',
padding: 12,
width: 400
}} />
<VisualEditorCallToActionButton text="Add" /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
gap: 12
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
alignItems: 'flex-start',
boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
display: 'grid',
padding: '26px 32px 32px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace AddCustomCodeView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
onSubmit?: (e: any) => any;
errorMessage?: string;
hasError?: boolean;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class AspectLogotype extends React.Component<
AspectLogotype.Props,
AspectLogotype.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: AspectLogotype.Props) {
super(props);
this.state = new AspectLogotype.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<svg className="aspect-svg" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><g children={
<><path d="m54.5 30.667 1.617-5.241h7.592l1.617 5.24h4.762L62.57 9.06h-5.316l-7.502 21.608H54.5Zm8.16-8.625h-5.495l2.71-8.79h.09l2.695 8.79Zm14.841 8.954c4.133 0 7.023-2.066 7.023-5.21v-.016c0-2.366-1.377-3.683-4.731-4.387l-2.726-.584c-1.617-.345-2.171-.884-2.171-1.707v-.015c0-1.033.943-1.707 2.456-1.707 1.617 0 2.56.868 2.71 2.021l.015.12h4.028v-.15c-.105-2.815-2.486-5.076-6.753-5.076-4.088 0-6.724 1.977-6.724 5.032v.014c0 2.396 1.573 3.954 4.687 4.612l2.726.57c1.572.344 2.11.838 2.11 1.691v.015c0 1.034-1.002 1.678-2.65 1.678-1.752 0-2.695-.734-2.98-1.992l-.03-.135h-4.267l.015.135c.344 3.04 2.815 5.091 7.262 5.091Zm12.685 4.912v-7.982h.09c.869 1.902 2.68 3.07 4.972 3.07 4.012 0 6.498-3.144 6.498-8.355v-.015c0-5.226-2.486-8.34-6.558-8.34-2.276 0-4.028 1.182-4.897 3.129h-.105v-2.8h-4.372v21.293h4.372Zm3.564-8.536c-2.126 0-3.579-1.826-3.579-4.716v-.015c0-2.905 1.453-4.732 3.58-4.732 2.17 0 3.548 1.782 3.548 4.717v.015c0 2.92-1.378 4.732-3.549 4.732Zm16.698 3.624c4.582 0 6.798-2.71 7.292-5.076l.045-.165h-4.013l-.03.09c-.314.899-1.407 1.887-3.204 1.887-2.231 0-3.624-1.497-3.669-4.058h11.051v-1.348c0-4.851-2.95-8.04-7.652-8.04s-7.711 3.264-7.711 8.37v.015c0 5.136 2.979 8.325 7.891 8.325Zm3.279-10.077h-6.813c.284-2.172 1.632-3.37 3.429-3.37 1.812 0 3.115 1.154 3.384 3.37Zm12.91 10.077c4.282 0 7.052-2.665 7.262-6.17v-.089h-4.073l-.015.135c-.299 1.617-1.393 2.695-3.145 2.695-2.156 0-3.503-1.782-3.503-4.926v-.015c0-3.07 1.347-4.912 3.488-4.912 1.812 0 2.875 1.168 3.145 2.696l.03.134h4.058v-.105c-.165-3.473-2.935-6.154-7.292-6.154-4.807 0-7.877 3.19-7.877 8.326v.015c0 5.18 3.025 8.37 7.922 8.37Zm14.885 0c.914 0 1.618-.09 2.112-.165v-3.204c-.27.03-.554.075-.944.075-1.317 0-1.991-.51-1.991-2.007V17.91h2.935v-3.294h-2.935V10.69h-4.417v3.924h-2.232v3.294h2.232v8.266c0 3.444 1.677 4.821 5.24 4.821Z" />
<path d="m9.67 26.897 17.334-16.792 2.783 2.873L12.454 29.77l-2.783-2.873Zm-1.918-8.176 10.3-10.304 2.83 2.828-10.3 10.304-2.83-2.828Z" style={{
clipRule: 'evenodd',
fillRule: 'evenodd'
}} />
<path d="M26.229 29.792a3.563 3.563 0 1 0 0-7.125 3.563 3.563 0 0 0 0 7.125Z" />
<path d="M6.863 6.794C5.131 8.518 4.021 11.93 4 19.96c-.02 8.029 1.07 11.446 2.794 13.179 1.723 1.731 5.134 2.84 13.163 2.861 8.028.021 11.447-1.07 13.18-2.794C34.87 31.482 35.979 28.07 36 20.042c.021-8.029-1.07-11.446-2.794-13.179C31.483 5.131 28.07 4.021 20.042 4 12.013 3.98 8.596 5.07 6.863 6.794ZM0 19.948C.042 3.948 4.052-.042 20.052 0c16 .042 19.99 4.052 19.948 20.052-.042 16-4.054 19.99-20.054 19.948C3.946 39.958-.042 35.948 0 19.948Z" style={{
clipRule: 'evenodd',
fillRule: 'evenodd'
}} /></>
} style={{
clipPath: 'url("#a")'
}} />
<defs  /></>
} fill="currentColor"
viewBox="0 0 144 40"
xmlns="http://www.w3.org/2000/svg" style={{
height: '32px',
overflowX: 'hidden',
overflowY: 'hidden'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace AspectLogotype {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class CardView extends React.Component<
CardView.Props,
CardView.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: CardView.Props) {
super(props);
this.state = new CardView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" style={{
alignItems: 'flex-start',
backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/metacode-ddd03.appspot.com/o/examples%2Fdune.jpg?alt=media&token=a748b31a-3866-4b17-baff-013921ea0cd9)',
display: 'flex',
flexDirection: 'column',
justifyContent: 'flex-end',
minHeight: 300,
width: 200
}} />
<div className="aspect-div" children={
<><h2 className="aspect-h2" children={this.props.title} />
<span className="aspect-span" children={this.props.detail} style={{
color: 'gray'
}} /></>
} style={{
alignItems: 'flex-start',
display: 'flex',
flexDirection: 'column',
padding: '0 8px'
}} /></>
} style={{
alignItems: 'flex-start',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
display: 'flex',
flexDirection: 'column',
gap: 12,
minHeight: 255,
padding: 16
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace CardView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
detail?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class CommandView extends React.Component<
CommandView.Props,
CommandView.State
> {
_isMounted = false;
get customState() {
if (this.props.viewId === 'viewer') {
return 'with viewer';
} else if (this.props.viewId === 'viewer+tabs') {
return 'with viewer and tabs';
}
return 'default';
}

constructor(props: CommandView.Props) {
super(props);
this.state = new CommandView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'with viewer':
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><input className="aspect-input" onChange={this.props.inputOnChange?.bind(this)}
placeholder={this.props.placeholder}
defaultValue={this.props.defaultValue} autoComplete="off"
autoFocus={true}
role="presentation"
spellCheck={false}
type="text" style={{
backgroundColor: 'transparent',
border: 'none',
fontSize: 13,
fontWeight: 500,
height: 48,
letterSpacing: '-0.02px',
outline: 'none',
padding: '0 24px'
}} />
<div className="aspect-div" children={this.props.accessoryView} style={{
alignItems: 'center',
display: 'flex',
height: '100%'
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
flexDirection: 'column',
gridTemplateColumns: '1fr auto'
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.1)',
height: 1
}} />
<div className="aspect-div" children={
<><ScrollView children={this.props.children} style={{
cursor: 'default',
height: '100%',
paddingBottom: 4,
width: '100%'
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.1)',
height: '100%',
width: 1
}} />
<div className="aspect-div" children={this.props.preview} style={{
height: '100%'
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
gridAutoFlow: 'column',
gridTemplateColumns: '240px auto 1fr',
height: '100%',
overflow: 'hidden'
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
backdropFilter: 'blur(5px)',
backgroundColor: 'rgba(255,255,255,0.7)',
borderRadius: 8,
boxShadow: '0 0 0 1px rgba(0,0,0,0.1), 0 0 40px 1px rgba(0,0,0,0.12)',
display: 'grid',
gridTemplateRows: 'auto auto 1fr',
height: 280,
overflow: 'hidden',
width: 560
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'with viewer and tabs':
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><input className="aspect-input" onChange={this.props.inputOnChange?.bind(this)}
placeholder={this.props.placeholder}
defaultValue={this.props.defaultValue} autoComplete="off"
autoFocus={true}
role="presentation"
spellCheck={false}
type="text" style={{
backgroundColor: 'transparent',
border: 'none',
fontSize: 13,
fontWeight: 500,
height: 48,
letterSpacing: '-0.02px',
outline: 'none',
padding: '0 24px'
}} />
<div className="aspect-div" children={this.props.accessoryView} style={{
alignItems: 'center',
display: 'flex',
height: '100%'
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
flexDirection: 'column',
gridTemplateColumns: '1fr auto'
}} />
<div className="aspect-div" children={
<><ScrollView children={
<><CommandViewTabItem text="text" /></>
} direction="horizontal" style={{
height: '100%',
width: '100%'
}} /></>
} style={{
height: 32
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.1)',
height: 1,
margin: 0
}} />
<div className="aspect-div" children={
<><ScrollView children={this.props.children} style={{
cursor: 'default',
height: '100%',
paddingBottom: 4,
width: '100%'
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.1)',
height: '100%',
width: 1
}} />
<div className="aspect-div" children={this.props.preview} style={{
height: '100%'
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
gridAutoFlow: 'column',
gridTemplateColumns: '240px auto 1fr',
height: '100%',
overflow: 'hidden'
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
backdropFilter: 'blur(5px)',
backgroundColor: 'rgba(255,255,255,0.7)',
borderRadius: 8,
boxShadow: '0 0 0 1px rgba(0,0,0,0.1), 0 0 40px 1px rgba(0,0,0,0.12)',
display: 'grid',
gridAutoFlow: 'row',
height: 280,
overflow: 'hidden',
width: 560
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><input className="aspect-input" onChange={this.props.inputOnChange?.bind(this)}
placeholder={this.props.placeholder}
defaultValue={this.props.defaultValue} autoComplete="off"
autoFocus={true}
role="presentation"
spellCheck={false}
type="text" style={{
backgroundColor: 'transparent',
border: 'none',
fontSize: 13,
fontWeight: 500,
height: 48,
letterSpacing: '-0.02px',
outline: 'none',
padding: '0 24px'
}} />
<div className="aspect-div" children={this.props.accessoryView} style={{
alignItems: 'center',
display: 'flex',
height: '100%'
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
flexDirection: 'column',
gridTemplateColumns: '1fr auto'
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.1)',
height: 1,
margin: '0 4px'
}} />
<ScrollView children={this.props.children} style={{
cursor: 'default',
height: '100%',
padding: '4px 0'
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
alignItems: 'flex-start',
backdropFilter: 'blur(5px)',
backgroundColor: 'rgba(255,255,255,0.7)',
borderRadius: 8,
boxShadow: '0 0 0 1px rgba(0,0,0,0.1), 0 0 40px 1px rgba(0,0,0,0.12)',
display: 'grid',
gridTemplateRows: 'auto auto 1fr',
height: 280,
overflow: 'hidden',
width: 440
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace CommandView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
children?: React.ReactNode;
defaultValue?: string;
inputOnChange?: (e: any) => any;
placeholder?: string;
accessoryView?: React.ReactNode;
onSubmit?: (e: any) => any;
viewId?: string;
preview?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class CommandViewCustomItem extends React.Component<
CommandViewCustomItem.Props,
CommandViewCustomItem.State
> {
_isMounted = false;
get customState() {
if (this.props.isSelected === true) {
return 'selected';
} else if (this.state.isPressed === true) {
return 'pressed';
}
return 'default';
}

constructor(props: CommandViewCustomItem.Props) {
super(props);
this.state = new CommandViewCustomItem.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'selected':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignItems: 'center',
backgroundColor: '#06f',
color: '#fff',
display: 'flex',
fontSize: 13,
gap: 40,
height: 40,
justifyContent: 'space-between',
padding: '0 24px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'pressed':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignItems: 'center',
backgroundColor: '#06f',
color: '#fff',
display: 'flex',
fontSize: 13,
gap: 40,
height: 40,
justifyContent: 'space-between',
padding: '0 24px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignItems: 'center',
display: 'flex',
fontSize: 13,
gap: 40,
height: 40,
justifyContent: 'space-between',
padding: '0 24px',
userSelect: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace CommandViewCustomItem {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
isSelected?: boolean;
children?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class CommandViewItem extends React.Component<
CommandViewItem.Props,
CommandViewItem.State
> {
_isMounted = false;
get customState() {
if (this.props.isSelected === true) {
return 'selected';
} else if (this.state.isPressed === true) {
return 'pressed';
}
return 'default';
}

constructor(props: CommandViewItem.Props) {
super(props);
this.state = new CommandViewItem.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'selected':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
color: '#fff',
fontSize: 13,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} />
<div className="aspect-div" children={this.props.accessoryView} /></>
} style={{
alignItems: 'center',
backgroundColor: '#06f',
display: 'flex',
gap: 40,
height: 40,
justifyContent: 'space-between',
padding: '0 24px',
userSelect: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'pressed':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
color: '#fff',
fontSize: 13,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} />
<div className="aspect-div" children={this.props.accessoryView} /></>
} style={{
alignItems: 'center',
backgroundColor: '#06f',
display: 'flex',
gap: 40,
height: 40,
justifyContent: 'space-between',
padding: '0 24px',
userSelect: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
fontSize: 13,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} />
<div className="aspect-div" children={this.props.accessoryView} /></>
} style={{
alignItems: 'center',
display: 'flex',
gap: 40,
height: 40,
justifyContent: 'space-between',
padding: '0 24px',
userSelect: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace CommandViewItem {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
isSelected?: boolean;
accessoryView?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class CommandViewTabItem extends React.Component<
CommandViewTabItem.Props,
CommandViewTabItem.State
> {
_isMounted = false;
get customState() {
if (this.props.isSelected === true) {
return 'selected';
}
return 'default';
}

constructor(props: CommandViewTabItem.Props) {
super(props);
this.state = new CommandViewTabItem.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'selected':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: '#06f',
borderRadius: 8,
boxSizing: 'border-box',
color: 'white',
cursor: 'pointer',
display: 'grid',
fontSize: 14,
fontWeight: 500,
gap: '8px',
gridAutoFlow: 'column',
height: 28,
justifyContent: 'flex-start',
overflow: 'hidden',
padding: '0 12px',
userSelect: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(0,0,0,0.1)',
borderRadius: 8,
boxSizing: 'border-box',
cursor: 'pointer',
display: 'grid',
fontSize: 14,
fontWeight: 500,
gap: '8px',
gridAutoFlow: 'column',
height: 28,
justifyContent: 'flex-start',
overflow: 'hidden',
padding: '0 12px',
userSelect: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace CommandViewTabItem {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
isSelected?: boolean;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class CssInspectorSidebar extends React.Component<
CssInspectorSidebar.Props,
CssInspectorSidebar.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: CssInspectorSidebar.Props) {
super(props);
this.state = new CssInspectorSidebar.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children="INSPECTOR" style={{
color: 'rgba(0,0,0,1)',
fontSize: 10,
opacity: 1
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(221,221,221,1)',
minHeight: 58,
opacity: 1,
width: 6
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="background color" style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
opacity: 1
}} /></>
} style={{
alignItems: 'center',
background: 'rgba(245,245,245,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 30,
opacity: 1,
width: 195
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="color" style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
opacity: 1
}} /></>
} style={{
alignItems: 'center',
background: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 30,
opacity: 1,
width: 195
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="font" style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
opacity: 1
}} /></>
} style={{
alignItems: 'center',
background: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 30,
opacity: 1,
width: 195
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="font size" style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
opacity: 1
}} /></>
} style={{
alignItems: 'center',
background: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 30,
opacity: 1,
width: 201
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="display" style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
opacity: 1
}} /></>
} style={{
alignItems: 'center',
background: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 30,
opacity: 1,
width: 201
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
justifyItems: 'flex-start',
opacity: 1,
width: 201
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="flex-direction" style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
opacity: 1
}} /></>
} style={{
alignItems: 'center',
background: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 30,
opacity: 1,
width: 201
}} /></>
} style={{
alignContent: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gap: 13.82421875,
justifyItems: 'flex-end',
minHeight: 240,
opacity: 1,
paddingBottom: 0,
paddingLeft: 0,
paddingRight: 0,
paddingTop: 0,
width: 227
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace CssInspectorSidebar {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class DeveloperProjectNavigatorView extends React.Component<
DeveloperProjectNavigatorView.Props,
DeveloperProjectNavigatorView.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: DeveloperProjectNavigatorView.Props) {
super(props);
this.state = new DeveloperProjectNavigatorView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><input className="aspect-input" autoFocus={true}
name="uid"
placeholder="uid" style={{
height: 32,
outline: 'none',
padding: '0 12px'
}} />
<div className="aspect-div" children={
<><TextButton text="Load User Project" /></>
} style={{
alignItems: 'flex-start',
display: 'flex',
justifyContent: 'flex-end'
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
alignItems: 'flex-start',
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
display: 'grid',
gap: 10,
minHeight: 112,
padding: 32,
width: 320
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace DeveloperProjectNavigatorView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
onSubmit?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class DiagonalArrowIcon extends React.Component<
DiagonalArrowIcon.Props,
DiagonalArrowIcon.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: DiagonalArrowIcon.Props) {
super(props);
this.state = new DiagonalArrowIcon.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<svg className="aspect-svg" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><defs  />
<polygon points="3 0 3 1 7.29 1 0.15 8.15 0.85 8.85 8 1.71 8 6 9 6 9 0 3 0" /></>
} viewBox="0 0 9 9"
xmlns="http://www.w3.org/2000/svg" style={{
width: 9
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace DiagonalArrowIcon {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ElementListFloatingView extends React.Component<
ElementListFloatingView.Props,
ElementListFloatingView.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: ElementListFloatingView.Props) {
super(props);
this.state = new ElementListFloatingView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
bottom: -1,
height: 1,
left: 8,
position: 'absolute',
right: 8
}} /></>
} style={{
gap: 14,
gridTemplateColumns: '1fr',
height: 32,
minHeight: 36,
padding: '0 8px 0 16px',
position: 'relative',
width: '100%',
zIndex: 1
}} />
<ScrollView children={this.props.children} style={{
backgroundColor: '#fff',
height: '100%',
minHeight: '',
padding: 8,
position: 'relative',
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
gap: 0,
gridTemplateRows: 'auto 1fr',
overflow: 'hidden',
paddingBottom: 12,
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ElementListFloatingView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
children?: React.ReactNode;
title?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ElementListItem extends React.Component<
ElementListItem.Props,
ElementListItem.State
> {
_isMounted = false;
get customState() {
if (this.props.isSelected === true&&this.state.isHovered === true) {
return 'selected+hover';
} else if (this.props.isSelected === true) {
return 'selected';
} else if (this.state.isHovered === true) {
return 'hovered';
}
return 'default';
}

constructor(props: ElementListItem.Props) {
super(props);
this.state = new ElementListItem.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'selected':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 11,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
backgroundColor: '#007cf8',
color: 'white',
height: 30,
justifyContent: 'space-between',
minWidth: 160,
paddingLeft: 10,
paddingRight: 10,
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'hovered':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 11,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} />
<SimpleButton onClick={this.props.onAccessoryButtonClick?.bind(this)}
children={this.props.accessoryButtonImage} style={{
height: '100%',
justifyContent: 'center',
minHeight: '',
width: 28
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '',
gridTemplateColumns: '1fr auto',
height: 30,
justifyContent: 'space-between',
minWidth: 160,
paddingLeft: 10,
paddingRight: '',
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'selected+hover':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 11,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} />
<SimpleButton onClick={this.props.onAccessoryButtonClick?.bind(this)}
children={this.props.accessoryButtonImage} style={{
height: '100%',
justifyContent: 'center',
minHeight: '',
width: 28
}} /></>
} style={{
backgroundColor: '#007cf8',
color: 'white',
height: 30,
justifyContent: 'space-between',
minWidth: 160,
paddingLeft: 10,
paddingRight: '',
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 11,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '',
height: 30,
justifyContent: 'space-between',
minWidth: 160,
overflow: 'hidden',
paddingLeft: 10,
paddingRight: 10,
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ElementListItem {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
accessoryButtonImage?: React.ReactNode;
onAccessoryButtonClick?: (e: any) => any;
isSelected?: boolean;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class EmptyCompositionView extends React.Component<
EmptyCompositionView.Props,
EmptyCompositionView.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: EmptyCompositionView.Props) {
super(props);
this.state = new EmptyCompositionView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children="To add an element, click insert then select an element" style={{
color: '#888',
fontSize: 16,
lineHeight: 1.4,
textAlign: 'center',
width: 280
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: '#ddd',
height: 1
}} />
<span className="aspect-span" children="OR" style={{
color: '#666',
fontSize: 12,
fontWeight: 500,
textAlign: 'center'
}} />
<div className="aspect-div" style={{
backgroundColor: '#ddd',
height: 1
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gap: 8,
gridTemplateColumns: '1fr auto 1fr',
width: '100%'
}} />
<div className="aspect-div" children={
<><VisualEditorCallToActionButton onClick={this.props.copyCodeOnClick?.bind(this)} text="Copy UI code from any website" style={{
backgroundColor: '#fff',
border: '1px solid #ddd',
color: 'inherit'
}} />
<VisualEditorCallToActionButton onClick={this.props.importDesignOnClick?.bind(this)} text="Import Figma design" style={{
backgroundColor: '#fff',
border: '1px solid #ddd',
color: 'inherit'
}} />
<VisualEditorCallToActionButton onClick={this.props.insertHTMLOnClick?.bind(this)} text="Insert HTML code" style={{
backgroundColor: '#fff',
border: '1px solid #ddd',
color: 'inherit'
}} /></>
} style={{
display: 'grid',
gap: 12,
width: 320
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
gap: 20,
justifyItems: 'center',
lineHeight: 1.2,
padding: 20,
width: 400
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace EmptyCompositionView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
copyCodeOnClick?: (e: any) => any;
importDesignOnClick?: (e: any) => any;
insertHTMLOnClick?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class FigmaAuthView extends React.Component<
FigmaAuthView.Props,
FigmaAuthView.State
> {
_isMounted = false;
get customState() {
if (this.props.isLoading === true) {
return 'loading';
}
return 'default';
}

constructor(props: FigmaAuthView.Props) {
super(props);
this.state = new FigmaAuthView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'loading':
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={this.props.logoView} />
<span className="aspect-span" children={this.props.message} style={{
fontSize: 15
}} /></>
} style={{
alignContent: 'center',
height: '100%',
justifyItems: 'center',
padding: 24,
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.message} style={{
fontSize: 15
}} />
<div className="aspect-div" children={
<><SimpleButton onClick={this.props.doneButtonOnClick?.bind(this)}
children={
<><span className="aspect-span" children={this.props.callToAction} style={{
color: 'white',
fontSize: 14,
fontWeight: 500
}} /></>
} style={{
height: 36,
justifyContent: 'center',
padding: '0 20px'
}} /></>
} style={{
backgroundColor: '#06f'
}} /></>
} style={{
alignContent: 'center',
height: '100%',
justifyItems: 'center',
padding: 24,
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace FigmaAuthView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
message?: string;
doneButtonOnClick?: (e: any) => any;
logoView?: React.ReactNode;
isLoading?: boolean;
callToAction?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class FigmaExportButton extends React.Component<
FigmaExportButton.Props,
FigmaExportButton.State
> {
_isMounted = false;
get customState() {
if (this.props.disabled === true) {
return 'disabled';
}
return 'default';
}

constructor(props: FigmaExportButton.Props) {
super(props);
this.state = new FigmaExportButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'disabled':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.text} style={{
color: 'white',
fontSize: 12,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'right'
}} /></>
} style={{
cursor: 'default',
minHeight: 28,
padding: '0 12px'
}} /></>
} style={{
backgroundColor: '#ccc',
pointerEvents: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.text} /></>
} style={{
cursor: 'default',
height: '100%',
padding: '0 12px',
width: '100%'
}} /></>
} style={{
backgroundColor: '#06f',
color: '#fff',
fontSize: 12,
fontWeight: 500,
height: 28
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace FigmaExportButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
disabled?: boolean;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class FigmaExportView extends React.Component<
FigmaExportView.Props,
FigmaExportView.State
> {
_isMounted = false;
get customState() {
if (this.props.isExporting === true) {
return 'exporting';
} else if (this.props.isEmpty === true) {
return 'empty';
} else if (this.props.hasExported === true) {
return 'exported';
}
return 'default';
}

constructor(props: FigmaExportView.Props) {
super(props);
this.state = new FigmaExportView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'exporting':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 10,
fontWeight: 600,
letterSpacing: 0,
textAlign: 'right'
}} />
<FigmaExportButton onClick={this.props.signOutOnClick?.bind(this)} text="Sign Out" style={{
backgroundColor: '#fff',
color: '#000'
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'space-between',
padding: '2px 0',
paddingLeft: 12,
paddingRight: 2,
width: '100%',
zIndex: 1
}} />
<ScrollView children={this.props.itemsView} style={{
opacity: 0.5,
pointerEvents: 'none',
position: 'relative',
width: '100%'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><SimpleButton onClick={this.props.callToActionOnClick?.bind(this)}
children={
<><span className="aspect-span" children={this.props.callToAction} style={{
color: 'white',
fontSize: 12,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'right'
}} /></>
} disabled={true} style={{
cursor: 'default',
minHeight: 28,
padding: '0 12px'
}} /></>
} style={{
backgroundColor: '#06f'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
boxShadow: '0 -1px 0 0 rgba(0,0,0,0.1)',
display: 'grid',
gap: 8,
gridAutoFlow: 'column',
justifyContent: 'flex-end',
padding: '6px 12px 7px',
width: '100%',
zIndex: 1
}} /></>
} style={{
alignContent: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridTemplateRows: 'auto 1fr auto',
height: 240,
justifyItems: 'flex-start',
userSelect: 'none',
width: 306
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'empty':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 10,
fontWeight: 600,
letterSpacing: 0,
textAlign: 'right'
}} />
<FigmaExportButton onClick={this.props.signOutOnClick?.bind(this)} text="Sign Out" style={{
backgroundColor: '#fff',
color: '#000'
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'space-between',
padding: '2px 0',
paddingLeft: 12,
paddingRight: 2,
width: '100%',
zIndex: 1
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="1. Select the frames you want to export" style={{
color: '#888',
fontSize: 14,
lineHeight: 1.4,
textAlign: 'center'
}} />
<span className="aspect-span" children="2. Click &quot;Add selected frames&quot;" style={{
color: '#888',
fontSize: 14,
lineHeight: 1.4,
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
flexDirection: 'column',
height: '100%',
justifyContent: 'center',
width: '100%'
}} />
<div className="aspect-div" children={
<><FigmaExportButton onClick={this.props.secondaryActionOnClick?.bind(this)}
text={this.props.secondaryActionTitle} style={{
backgroundColor: '#fff',
border: '1px solid #ddd',
color: '#000'
}} />
<FigmaExportButton onClick={this.props.callToActionOnClick?.bind(this)}
text={this.props.callToAction} disabled={true} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
boxShadow: '0 -1px 0 0 rgba(0,0,0,0.1)',
display: 'grid',
gap: 8,
gridAutoFlow: 'column',
justifyContent: 'flex-end',
padding: '6px 12px 7px',
width: '100%',
zIndex: 1
}} /></>
} style={{
alignContent: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridTemplateRows: 'auto 1fr auto',
height: 240,
justifyItems: 'flex-start',
userSelect: 'none',
width: 306
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'exported':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 10,
fontWeight: 600,
letterSpacing: 0,
textAlign: 'right'
}} />
<FigmaExportButton onClick={this.props.signOutOnClick?.bind(this)} text="Sign Out" style={{
backgroundColor: '#fff',
color: '#000'
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'space-between',
padding: '2px 0',
paddingLeft: 12,
paddingRight: 2,
width: '100%',
zIndex: 1
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children={this.props.exportedMessage} style={{
color: '#888',
fontSize: 14,
lineHeight: 1.4,
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
flexDirection: 'column',
height: '100%',
justifyContent: 'center',
width: '100%'
}} />
<div className="aspect-div" children={
<><FigmaExportButton onClick={this.props.exportDoneOnClick?.bind(this)} text="Done" style={{
backgroundColor: '#fff',
border: '1px solid #ddd',
color: '#000'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
boxShadow: '0 -1px 0 0 rgba(0,0,0,0.1)',
display: 'grid',
gap: 8,
gridAutoFlow: 'column',
justifyContent: 'flex-end',
padding: '6px 12px 7px',
width: '100%',
zIndex: 1
}} /></>
} style={{
alignContent: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridTemplateRows: 'auto 1fr auto',
height: 240,
justifyItems: 'flex-start',
userSelect: 'none',
width: 306
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 10,
fontWeight: 600,
letterSpacing: 0,
textAlign: 'right'
}} />
<FigmaExportButton onClick={this.props.signOutOnClick?.bind(this)} text="Sign Out" style={{
backgroundColor: '#fff',
color: '#000'
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'space-between',
padding: '2px 0',
paddingLeft: 12,
paddingRight: 2,
width: '100%',
zIndex: 1
}} />
<ScrollView children={this.props.itemsView} style={{
position: 'relative',
width: '100%'
}} />
<div className="aspect-div" children={
<><FigmaExportButton onClick={this.props.secondaryActionOnClick?.bind(this)}
text={this.props.secondaryActionTitle} style={{
backgroundColor: '#fff',
border: '1px solid #ddd',
color: '#000'
}} />
<FigmaExportButton onClick={this.props.callToActionOnClick?.bind(this)}
text={this.props.callToAction} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
boxShadow: '0 -1px 0 0 rgba(0,0,0,0.1)',
display: 'grid',
gap: 8,
gridAutoFlow: 'column',
justifyContent: 'flex-end',
padding: '6px 12px 7px',
width: '100%',
zIndex: 1
}} /></>
} style={{
alignContent: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridTemplateRows: 'auto 1fr auto',
height: 240,
justifyItems: 'flex-start',
userSelect: 'none',
width: 306
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace FigmaExportView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
itemsView?: React.ReactNode;
title?: string;
callToActionOnClick?: (e: any) => any;
callToAction?: string;
secondaryActionTitle?: string;
secondaryActionOnClick?: (e: any) => any;
signOutOnClick?: (e: any) => any;
isExporting?: boolean;
isEmpty?: boolean;
exportedMessage?: string;
exportDoneOnClick?: (e: any) => any;
hasExported?: boolean;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class FigmaFileSyncItem extends React.Component<
FigmaFileSyncItem.Props,
FigmaFileSyncItem.State
> {
_isMounted = false;
get customState() {
if (this.props.isSelected === true) {
return 'selected';
}
return 'default';
}

constructor(props: FigmaFileSyncItem.Props) {
super(props);
this.state = new FigmaFileSyncItem.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'selected':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'white',
fontSize: 11,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
alignItems: 'center',
background: 'rgba(255,255,255,1)',
backgroundColor: '#007cf8',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 30,
padding: '0 10px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
alignItems: 'center',
background: 'rgba(255,255,255,1)',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 36,
padding: '0 10px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace FigmaFileSyncItem {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
isSelected?: boolean;
title?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class FigmaPluginFrameItemView extends React.Component<
FigmaPluginFrameItemView.Props,
FigmaPluginFrameItemView.State
> {
_isMounted = false;
get customState() {
if (this.props.isSelected === true&&this.state.isHovered === true) {
return 'selected+hovered';
} else if (this.props.isSelected === true) {
return 'selected';
} else if (this.state.isHovered === true) {
return 'hovered';
}
return 'default';
}

constructor(props: FigmaPluginFrameItemView.Props) {
super(props);
this.state = new FigmaPluginFrameItemView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'hovered':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 12,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} />
<span className="aspect-span" children={this.props.detail} style={{
color: 'rgba(151,151,151,1)',
fontSize: 11,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 2,
justifyItems: 'flex-start'
}} />
<HStack children={
<><span className="aspect-span" children={this.props.accessoryText} style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} />
<SimpleButton onClick={this.props.accessoryIconOnClick?.bind(this)}
children={this.props.accessoryIcon} style={{
height: 28,
justifyContent: 'center',
width: 28
}} /></>
} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gap: 16,
gridAutoFlow: 'column',
justifyContent: 'space-between',
minHeight: 50,
padding: '0 12px 0 20px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'selected':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'white',
fontSize: 12,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'left'
}} />
<span className="aspect-span" children={this.props.detail} style={{
color: 'white',
fontSize: 11,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 2,
justifyItems: 'flex-start'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: '#06f',
display: 'grid',
gap: 16,
gridAutoFlow: 'column',
justifyContent: 'space-between',
minHeight: 50,
padding: '0 20px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'selected+hovered':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'white',
fontSize: 12,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'left'
}} />
<span className="aspect-span" children={this.props.detail} style={{
color: 'white',
fontSize: 11,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 2,
justifyItems: 'flex-start'
}} />
<HStack children={
<><span className="aspect-span" children={this.props.accessoryText} style={{
color: 'white',
fontSize: 11,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} />
<SimpleButton onClick={this.props.accessoryIconOnClick?.bind(this)}
children={this.props.accessoryIcon} style={{
height: 28,
justifyContent: 'center',
width: 28
}} /></>
} /></>
} style={{
alignItems: 'center',
backgroundColor: '#06f',
display: 'grid',
gap: 16,
gridAutoFlow: 'column',
justifyContent: 'space-between',
minHeight: 50,
padding: '0 12px 0 20px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 12,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} />
<span className="aspect-span" children={this.props.detail} style={{
color: 'rgba(151,151,151,1)',
fontSize: 11,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 2,
justifyItems: 'flex-start'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gap: 16,
gridAutoFlow: 'column',
justifyContent: 'space-between',
minHeight: 50,
padding: '0 20px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace FigmaPluginFrameItemView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
detail?: string;
accessoryIcon?: React.ReactNode;
accessoryIconOnClick?: (e: any) => any;
isSelected?: boolean;
accessoryText?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class FigmaPluginLoginView extends React.Component<
FigmaPluginLoginView.Props,
FigmaPluginLoginView.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: FigmaPluginLoginView.Props) {
super(props);
this.state = new FigmaPluginLoginView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" />
<VStack children={
<><div className="aspect-div" children={this.props.logoView} />
<div className="aspect-div" onClick={this.props.signinOnClick?.bind(this)}
children={
<><SimpleButton children={
<><span className="aspect-span" children="Login" style={{
color: 'rgba(255,255,255,1)',
fontSize: 12,
fontWeight: 600,
letterSpacing: 0,
textAlign: 'center'
}} /></>
} style={{
height: '100%',
justifyContent: 'center',
width: '100%'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: '#2c2c2c',
display: 'flex',
gridAutoFlow: 'column',
justifyContent: 'center',
minHeight: 32,
width: 160
}} /></>
} style={{
gap: 12,
justifyItems: 'center',
paddingBottom: 16,
width: '100%'
}} />
<div className="aspect-div" onClick={this.props.signupOnClick?.bind(this)}
children={
<><span className="aspect-span" children="Don’t have an account?" style={{
color: 'rgba(0,0,0,1)',
fontSize: 12,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} />
<span className="aspect-span" children="Sign up" style={{
color: 'rgba(0,0,0,1)',
fontSize: 12,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 180
}} /></>
} style={{
alignContent: 'space-between',
backgroundColor: 'rgba(255,255,255,1)',
cursor: 'default',
display: 'grid',
gap: 24,
height: '100%',
justifyItems: 'center',
minWidth: 280,
padding: 24,
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace FigmaPluginLoginView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
signinOnClick?: (e: any) => any;
logoView?: React.ReactNode;
signupOnClick?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class FloatingListView extends React.Component<
FloatingListView.Props,
FloatingListView.State
> {
_isMounted = false;
get customState() {
if (this.props.viewId === 'expanded') {
return 'expanded';
} else if (this.props.viewId === 'expanded+input') {
return 'expanded + input';
}
return 'default';
}

constructor(props: FloatingListView.Props) {
super(props);
this.state = new FloatingListView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'expanded':
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<SimpleButton onClick={this.props.accessoryButtonOnClick?.bind(this)}
children={this.props.accessoryButtonIcon} style={{
height: 24,
justifyContent: 'center',
width: 28
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
bottom: -1,
height: 1,
left: 8,
position: 'absolute',
right: 8
}} /></>
} style={{
gap: 14,
gridTemplateColumns: '1fr',
minHeight: 36,
padding: '0 8px 0 16px',
position: 'relative',
width: '100%',
zIndex: 1
}} />
<ScrollView children={this.props.children} style={{
height: '100%',
padding: '4px 8px',
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
gap: 0,
gridTemplateRows: 'auto 1fr',
maxHeight: 180,
overflow: 'hidden',
paddingBottom: 8,
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'expanded + input':
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<input className="aspect-input" onChange={this.props.inputOnChange?.bind(this)}
defaultValue={this.props.inputDefaultValue} autoComplete="off"
placeholder="filter"
spellCheck={false}
type="search" style={{
border: '1px solid #ddd',
fontSize: 12,
height: 22,
outline: 'none',
padding: '0 8px',
width: '100%'
}} />
<SimpleButton onClick={this.props.accessoryButtonOnClick?.bind(this)}
children={this.props.accessoryButtonIcon} style={{
height: 24,
justifyContent: 'center',
width: 28
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
bottom: -1,
height: 1,
left: 8,
position: 'absolute',
right: 8
}} /></>
} style={{
gap: 14,
gridTemplateColumns: '1fr',
minHeight: 36,
padding: '0 8px 0 16px',
position: 'relative',
width: '100%',
zIndex: 1
}} />
<ScrollView children={this.props.children} style={{
height: '100%',
padding: '4px 8px',
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
gap: 0,
gridTemplateRows: 'auto 1fr',
maxHeight: 180,
overflow: 'hidden',
paddingBottom: 8,
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<span className="aspect-span" children={this.props.detail} style={{
fontSize: 11,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
gap: 14,
gridTemplateColumns: '1fr',
justifyContent: 'space-between',
minHeight: 36,
padding: '0 16px',
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace FloatingListView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
inputOnChange?: (e: any) => any;
title?: string;
children?: React.ReactNode;
accessoryButtonOnClick?: (e: any) => any;
accessoryButtonIcon?: React.ReactNode;
detail?: string;
inputDefaultValue?: string;
viewId?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class GoogleSignInButton extends React.Component<
GoogleSignInButton.Props,
GoogleSignInButton.State
> {
_isMounted = false;
get customState() {
if (this.state.isHovered === true) {
return 'hovered';
}
return 'default';
}

constructor(props: GoogleSignInButton.Props) {
super(props);
this.state = new GoogleSignInButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'hovered':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><svg className="aspect-svg" children={
<><g children={
<><path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
fill="#EA4335" style={{
fill: 'rgb(234, 67, 53)',
transformOrigin: '0px 0px'
}} />
<path d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
fill="#4285F4" style={{
fill: 'rgb(66, 133, 244)',
transformOrigin: '0px 0px'
}} />
<path d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
fill="#FBBC05" style={{
fill: 'rgb(251, 188, 5)',
transformOrigin: '0px 0px'
}} />
<path d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
fill="#34A853" style={{
fill: 'rgb(52, 168, 83)',
transformOrigin: '0px 0px'
}} />
<path d="M0 0h48v48H0z"
fill="none" style={{
fill: 'none',
transformOrigin: '0px 0px'
}} /></>
} style={{
transformOrigin: '0px 0px'
}} /></>
} height="18px"
viewBox="0 0 48 48"
width="18px"
xmlns="http://www.w3.org/2000/svg" style={{
display: 'block'
}} />
<span className="aspect-span" children="Continue with Google" style={{
letterSpacing: '0.1px',
marginLeft: '15px',
verticalAlign: 'top'
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
height: '50px',
justifyContent: 'center'
}} /></>
} style={{
backgroundColor: '#f5f5f5',
border: '1px solid #ddd',
color: 'rgb(117, 117, 117)',
overflowX: 'hidden',
overflowY: 'hidden',
position: 'relative',
textAlign: 'center',
transitionDelay: '0s, 0s, 0s',
transitionDuration: '0.218s, 0.218s, 0.218s',
transitionProperty: 'background-color, border-color, box-shadow',
transitionTimingFunction: 'ease, ease, ease',
userSelect: 'none',
verticalAlign: 'middle',
whiteSpace: 'nowrap'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><svg className="aspect-svg" children={
<><g children={
<><path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
fill="#EA4335" style={{
fill: 'rgb(234, 67, 53)',
transformOrigin: '0px 0px'
}} />
<path d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
fill="#4285F4" style={{
fill: 'rgb(66, 133, 244)',
transformOrigin: '0px 0px'
}} />
<path d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
fill="#FBBC05" style={{
fill: 'rgb(251, 188, 5)',
transformOrigin: '0px 0px'
}} />
<path d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
fill="#34A853" style={{
fill: 'rgb(52, 168, 83)',
transformOrigin: '0px 0px'
}} />
<path d="M0 0h48v48H0z"
fill="none" style={{
fill: 'none',
transformOrigin: '0px 0px'
}} /></>
} style={{
transformOrigin: '0px 0px'
}} /></>
} height="18px"
viewBox="0 0 48 48"
width="18px"
xmlns="http://www.w3.org/2000/svg" style={{
display: 'block'
}} />
<span className="aspect-span" children="Continue with Google" style={{
letterSpacing: '0.1px',
marginLeft: '15px',
verticalAlign: 'top'
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
height: '50px',
justifyContent: 'center'
}} /></>
} style={{
backgroundColor: '#fff',
border: '1px solid #ddd',
color: 'rgb(117, 117, 117)',
overflowX: 'hidden',
overflowY: 'hidden',
position: 'relative',
textAlign: 'center',
transitionDelay: '0s, 0s, 0s',
transitionDuration: '0.218s, 0.218s, 0.218s',
transitionProperty: 'background-color, border-color, box-shadow',
transitionTimingFunction: 'ease, ease, ease',
userSelect: 'none',
verticalAlign: 'middle',
whiteSpace: 'nowrap'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace GoogleSignInButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class HStack extends React.Component<
HStack.Props,
HStack.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: HStack.Props) {
super(props);
this.state = new HStack.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignItems: 'center',
boxSizing: 'border-box',
display: 'grid',
gap: '8px',
gridAutoFlow: 'column',
justifyContent: 'flex-start'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace HStack {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
children?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ImportButtonDropdown extends React.Component<
ImportButtonDropdown.Props,
ImportButtonDropdown.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: ImportButtonDropdown.Props) {
super(props);
this.state = new ImportButtonDropdown.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><SimpleButton onClick={this.props.importOnClick?.bind(this)}
children={
<><span className="aspect-span" children="Import from Figma" /></>
} style={{
padding: '10px 12px',
width: '100%'
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
height: 1
}} />
<SimpleButton onClick={this.props.optionsOnClick?.bind(this)}
children={
<><span className="aspect-span" children="Options" /></>
} style={{
padding: '10px 12px',
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
fontSize: 12,
fontWeight: 500,
gap: 0,
lineHeight: 1.4,
padding: 8,
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ImportButtonDropdown {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
importOnClick?: (e: any) => any;
optionsOnClick?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class LandingPage extends React.Component<
LandingPage.Props,
LandingPage.State
> {
_isMounted = false;
get customState() {
if (this.props.size === 'tablet') {
return 'tablet';
} else if (this.props.size === 'mobile') {
return 'mobile';
}
return 'default';
}

constructor(props: LandingPage.Props) {
super(props);
this.state = new LandingPage.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'tablet':
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><LandingPageRow children={
<><VStack children={
<><VStack children={
<><VStack children={
<><VStack children={
<><h1 className="aspect-h1" children="Build UI—fast" style={{
fontSize: 48,
letterSpacing: -0.7
}} />
<span className="aspect-span" children="Create React components visually, with a design system that syncs to your codebase." style={{
color: 'rgb(107, 114, 128)',
fontSize: 25,
letterSpacing: 0.22,
lineHeight: 1.5,
maxWidth: 640
}} /></>
} style={{
gap: 14,
justifyItems: 'center'
}} /></>
} style={{
gap: 18,
justifyItems: 'center',
textAlign: 'center'
}} />
<div className="aspect-div" children={
<><LandingPageCallToActionButton onClick={this.props.onSignupClick?.bind(this)} text="Start building — it's free" style={{
fontSize: 16
}} />
<WatchDemoButton onClick={this.props.playViewOnClick?.bind(this)} /></>
} style={{
alignItems: 'center',
display: 'flex',
gap: 32,
justifyContent: 'center'
}} /></>
} style={{
gap: 30
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
borderRadius: '50%',
boxShadow: '0 0 21vw 10vw #888',
left: '50%',
minHeight: '10%',
position: 'absolute',
top: '50%',
transform: 'translate(-50%, -50%)',
width: '42%'
}} />
<div className="aspect-div" style={{
backgroundColor: '#fff',
left: '50%',
minHeight: '50%',
position: 'absolute',
top: '50%',
transform: 'translate(-50%, -50%)',
width: '80%'
}} />
<img className="aspect-img" src="https://aspect.app/static/media/aspect-video-thumbnail@2x.png" style={{
minHeight: 80,
transform: 'scale(1)',
width: '100%'
}} />
<div className="aspect-div" onClick={this.props.playViewOnClick?.bind(this)}
children={this.props.playView} style={{
alignItems: 'center',
bottom: 0,
cursor: 'pointer',
display: 'flex',
justifyContent: 'center',
left: 0,
position: 'absolute',
right: 0,
top: 0,
transform: 'scale(1)'
}} /></>
} style={{
minHeight: 150,
position: 'relative'
}} /></>
} style={{
gap: 56
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Aspect was built using Aspect." style={{
fontSize: 23,
letterSpacing: 0.21,
lineHeight: 1.4,
textAlign: 'center'
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
justifyItems: 'center',
padding: '40px 0'
}} />
<HStack children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Create visually" style={{
fontSize: 40,
fontWeight: 700,
letterSpacing: -0.7
}} />
<span className="aspect-span" children="Drag and drop react components to create sophisticated views. Libraries like MaterialUI and Tailwind coming soon." style={{
color: 'rgb(107, 114, 128)',
fontSize: 18,
letterSpacing: 0.18,
lineHeight: 1.5
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 12,
justifyItems: 'flex-start'
}} />
<div className="aspect-div" children={
<><video className="aspect-video" autoPlay={true}
loop={true}
muted={true}
playsInline={true}
src="https://firebasestorage.googleapis.com/v0/b/metacode-ddd03.appspot.com/o/landing-page%2Faspect-drag-drop.mp4?alt=media&token=2fe22d31-c12d-45c3-8d75-6abfbc439e25" style={{
objectFit: 'cover',
objectPosition: 'center top',
outlineStyle: 'none',
width: '100%'
}} />
<div className="aspect-div" style={{
boxShadow: 'inset 0 0 0 1px rgba(220,220,220,0.99)',
height: '100%',
left: 0,
pointerEvents: 'none',
position: 'absolute',
top: 0,
width: '100%'
}} /></>
} style={{
backgroundColor: '0 0 0 8px #f5f5f5',
boxShadow: '0 0 0 8px #f5f5f5',
display: 'flex',
minHeight: 100,
overflow: 'hidden',
position: 'relative',
width: '100%'
}} /></>
} style={{
gap: 40,
gridTemplateColumns: '1fr 1fr',
padding: '40px 0'
}} />
<HStack children={
<><div className="aspect-div" children={
<><video className="aspect-video" autoPlay={true}
controls={true}
loop={true}
muted={true}
playsInline={true}
src="https://firebasestorage.googleapis.com/v0/b/metacode-ddd03.appspot.com/o/landing-page%2FLandingPage-import-design.mp4?alt=media&token=cd20718e-fcd6-43ed-aad5-60df9c57365a" style={{
objectFit: 'cover',
objectPosition: 'center top',
outlineStyle: 'none',
width: '100%'
}} />
<div className="aspect-div" style={{
boxShadow: 'inset 0 0 0 1px rgba(220,220,220,0.99)',
height: '100%',
left: 0,
pointerEvents: 'none',
position: 'absolute',
top: 0,
width: '100%'
}} /></>
} style={{
backgroundColor: '0 0 0 8px #f5f5f5',
boxShadow: '0 0 0 8px #f5f5f5',
display: 'flex',
minHeight: 100,
overflow: 'hidden',
position: 'relative',
width: '100%'
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Import design" style={{
fontSize: 40,
fontWeight: 700,
letterSpacing: -0.7
}} />
<span className="aspect-span" children="Convert Figma designs into React code. Sketch and AdobeXD support coming soon." style={{
color: 'rgb(107, 114, 128)',
fontSize: 18,
letterSpacing: 0.18,
lineHeight: 1.5
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 12,
justifyItems: 'flex-end',
textAlign: 'right'
}} /></>
} style={{
gap: 40,
gridTemplateColumns: '1fr 1fr',
padding: '40px 0'
}} />
<HStack children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Sync code" style={{
fontSize: 40,
fontWeight: 700,
letterSpacing: -0.7
}} />
<span className="aspect-span" children="Aspect acts as a design system that syncs directly to your codebase, closing the gap between design and engineering." style={{
color: 'rgb(107, 114, 128)',
fontSize: 18,
letterSpacing: 0.18,
lineHeight: 1.5
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 12,
justifyItems: 'flex-start'
}} />
<img className="aspect-img" src="https://aspect.app/static/media/LandingPage-code.jpg" style={{
width: '100%'
}} /></>
} style={{
gap: 40,
gridTemplateColumns: '1fr 1fr',
justifyContent: 'flex-end',
padding: '40px 0'
}} /></>
} />
<LandingPageHeader children={
<><HStack children={
<><a className="aspect-a" children={
<><AspectLogotype  /></>
} href="https://aspect.app"
target="" style={{
color: '#000',
display: 'flex'
}} /></>
} style={{
height: '100%'
}} />
<HStack children={
<><HStack children={
<><a className="aspect-a" children={
<><LandingPageHeaderButton text="Go to website builder" /></>
} href="https://sites.aspect.app"
target="" style={{
textDecoration: 'none'
}} />
<a className="aspect-a" children={
<><LandingPageHeaderButton text="Updates" /></>
} href="https://twitter.com/aspectdotapp"
target="_blank" style={{
textDecoration: 'none'
}} />
<LandingPageHeaderButton onClick={this.props.onLoginClick?.bind(this)} text="Log in" /></>
} style={{
gap: 0
}} />
<LandingPageHeaderCallToActionButton onClick={this.props.onSignupClick?.bind(this)} text="Sign Up" /></>
} style={{
gap: 16,
height: '100%'
}} /></>
} style={{
position: 'fixed',
top: 0,
width: '100%'
}} />
<LandingPageRow children={
<><VStack children={
<><div className="aspect-div" children={
<><a className="aspect-a" children={
<><LandingPageHeaderButton text="Privacy Policy" /></>
} href="https://privacy.aspect.app" style={{
textDecoration: 'none'
}} />
<a className="aspect-a" children={
<><LandingPageHeaderButton text="founders@aspect.app" /></>
} href="mailto:founders@aspect.app"
target="_blank" style={{
textDecoration: 'none'
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
gap: 12,
gridAutoFlow: 'column'
}} />
<span className="aspect-span" children="© Metacode, Inc. dba Aspect" style={{
color: 'rgb(107, 114, 128)'
}} /></>
} style={{
gap: 24,
justifyItems: 'center'
}} /></>
} style={{
padding: 80
}} /></>
} style={{
gap: 0,
maxWidth: '100%',
minWidth: '100%',
paddingTop: 'calc(80px + 24px)',
position: 'relative',
width: 1000
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'mobile':
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><LandingPageRow children={
<><VStack children={
<><VStack children={
<><VStack children={
<><h1 className="aspect-h1" children="Build UI—fast" style={{
fontSize: 'calc(min(12.5vw, 56px))',
letterSpacing: -1,
lineHeight: 1
}} />
<span className="aspect-span" children="Create React components visually, with a design system that syncs to your codebase." style={{
color: 'rgb(107, 114, 128)',
fontSize: 22,
letterSpacing: 0.17,
lineHeight: 1.5,
maxWidth: 500
}} /></>
} style={{
gap: 14,
justifyItems: 'center'
}} />
<div className="aspect-div" children={
<><LandingPageCallToActionButton onClick={this.props.onSignupClick?.bind(this)} text="Start building — it's free" /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
flexDirection: 'column',
gap: 20,
justifyItems: 'center'
}} /></>
} style={{
gap: 24,
justifyItems: 'center',
textAlign: 'center'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
borderRadius: '50%',
boxShadow: '0 0 21vw 12vw rgba(0,0,0,0.16)',
left: '50%',
minHeight: '55%',
position: 'absolute',
top: '50%',
transform: 'translate(-50%, -50%)',
width: '25%'
}} />
<div className="aspect-div" style={{
backgroundColor: '#fff',
left: '50%',
minHeight: 120,
position: 'absolute',
top: '50%',
transform: 'translate(-50%, -50%)',
width: '100%'
}} />
<img className="aspect-img" src="https://aspect.app/static/media/aspect-video-thumbnail.png" style={{
minHeight: 80,
transform: 'scale(1)',
width: '100%'
}} />
<div className="aspect-div" onClick={this.props.playViewOnClick?.bind(this)}
children={this.props.playView} style={{
alignItems: 'center',
bottom: 0,
cursor: 'pointer',
display: 'flex',
justifyContent: 'center',
left: 0,
position: 'absolute',
right: 0,
top: 0,
transform: 'scale(1)'
}} /></>
} style={{
minHeight: 80,
position: 'relative'
}} /></>
} style={{
gap: 44,
paddingTop: 12
}} />
<VStack children={
<><div className="aspect-div" children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Create visually" style={{
fontSize: 'min(10vw, 40px)',
fontWeight: 700,
letterSpacing: -0.7,
lineHeight: 1.2,
maxWidth: 400
}} />
<span className="aspect-span" children="Drag and drop react components to create sophisticated views. Libraries like MaterialUI and Tailwind coming soon." style={{
color: 'rgb(107, 114, 128)',
fontSize: 20,
letterSpacing: 0.18,
lineHeight: 1.5
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 12,
justifyItems: 'flex-start',
maxWidth: 480
}} />
<div className="aspect-div" children={
<><video className="aspect-video" autoPlay={true}
loop={true}
muted={true}
playsInline={true}
src="https://firebasestorage.googleapis.com/v0/b/metacode-ddd03.appspot.com/o/landing-page%2Faspect-drag-drop.mp4?alt=media&token=2fe22d31-c12d-45c3-8d75-6abfbc439e25" style={{
objectFit: 'cover',
objectPosition: 'center top',
outlineStyle: 'none',
width: '100%'
}} />
<div className="aspect-div" style={{
boxShadow: 'inset 0 0 0 1px rgba(220,220,220,0.99)',
height: '100%',
left: 0,
pointerEvents: 'none',
position: 'absolute',
top: 0,
width: '100%'
}} /></>
} style={{
backgroundColor: '0 0 0 8px #f5f5f5',
boxShadow: '0 0 0 8px #f5f5f5',
display: 'flex',
minHeight: 100,
overflow: 'hidden',
position: 'relative',
width: '100%'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 40,
justifyItems: 'flex-start'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Import design" style={{
fontSize: 'min(10vw, 40px)',
fontWeight: 700,
letterSpacing: -0.7,
lineHeight: 1.2,
maxWidth: 400
}} />
<span className="aspect-span" children="Convert Figma designs into React code. Sketch and AdobeXD support coming soon." style={{
color: 'rgb(107, 114, 128)',
fontSize: 20,
letterSpacing: 0.18,
lineHeight: 1.5
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 12,
justifyItems: 'flex-start',
maxWidth: 480
}} />
<div className="aspect-div" children={
<><video className="aspect-video" autoPlay={true}
controls={true}
loop={true}
muted={true}
playsInline={true}
src="https://firebasestorage.googleapis.com/v0/b/metacode-ddd03.appspot.com/o/landing-page%2FLandingPage-import-design.mp4?alt=media&token=cd20718e-fcd6-43ed-aad5-60df9c57365a" style={{
objectFit: 'cover',
objectPosition: 'center top',
outlineStyle: 'none',
width: '100%'
}} />
<div className="aspect-div" style={{
boxShadow: 'inset 0 0 0 1px rgba(220,220,220,0.99)',
height: '100%',
left: 0,
pointerEvents: 'none',
position: 'absolute',
top: 0,
width: '100%'
}} /></>
} style={{
backgroundColor: '0 0 0 8px #f5f5f5',
boxShadow: '0 0 0 8px #f5f5f5',
display: 'flex',
minHeight: 100,
overflow: 'hidden',
position: 'relative',
width: '100%'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 40,
justifyItems: 'flex-start'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Sync code" style={{
fontSize: 'min(10vw, 40px)',
fontWeight: 700,
letterSpacing: -0.7,
lineHeight: 1.2,
maxWidth: 400
}} />
<span className="aspect-span" children="Aspect acts as a design system that syncs directly to your codebase, closing the gap between design and engineering." style={{
color: 'rgb(107, 114, 128)',
fontSize: 20,
letterSpacing: 0.18,
lineHeight: 1.5
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 12,
justifyItems: 'flex-start',
maxWidth: 480
}} />
<img className="aspect-img" src="https://aspect.app/static/media/LandingPage-code.jpg" style={{
width: '100%'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 40,
justifyItems: 'flex-start'
}} /></>
} style={{
gap: 64,
padding: '32px 0'
}} /></>
} style={{
padding: '0 28px'
}} />
<LandingPageHeader children={
<><HStack children={
<><a className="aspect-a" children={
<><AspectLogotype  /></>
} href="https://aspect.app"
target="" style={{
color: '#000',
display: 'flex'
}} /></>
} style={{
height: '100%'
}} />
<HStack children={
<><a className="aspect-a" children={
<><LandingPageHeaderCallToActionButton text="Updates" /></>
} href="https://twitter.com/aspectdotapp"
target="_blank" style={{
color: 'inherit',
textDecoration: 'none'
}} /></>
} style={{
gap: 12,
height: '100%'
}} /></>
} style={{
padding: '0 28px',
position: 'absolute',
top: 0,
width: '100%'
}} />
<LandingPageRow children={
<><VStack children={
<><div className="aspect-div" children={
<><a className="aspect-a" children={
<><LandingPageHeaderButton text="Privacy Policy" /></>
} href="https://privacy.aspect.app" style={{
textDecoration: 'none'
}} />
<a className="aspect-a" children={
<><LandingPageHeaderButton text="founders@aspect.app" /></>
} href="mailto:founders@aspect.app"
target="_blank" style={{
textDecoration: 'none'
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
gap: 12
}} />
<span className="aspect-span" children="© Metacode, Inc. dba Aspect" style={{
color: 'rgb(107, 114, 128)'
}} /></>
} style={{
gap: 24,
justifyItems: 'center'
}} /></>
} style={{
padding: '64px min(8vw, 48px) 80px'
}} /></>
} style={{
gap: 0,
maxWidth: '100%',
minWidth: '100%',
paddingTop: 'calc(64px + 24px)',
position: 'relative',
width: 500
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><LandingPageRow children={
<><VStack children={
<><VStack children={
<><VStack children={
<><VStack children={
<><h1 className="aspect-h1" children="Build UI—fast" style={{
fontSize: 48,
letterSpacing: -0.7
}} />
<span className="aspect-span" children="Create React components visually, with a design system that syncs to your codebase." style={{
color: 'rgb(107, 114, 128)',
fontSize: 25,
letterSpacing: 0.22,
lineHeight: 1.5,
maxWidth: 640
}} /></>
} style={{
gap: 14,
justifyItems: 'center'
}} /></>
} style={{
gap: 18,
justifyItems: 'center',
textAlign: 'center'
}} />
<div className="aspect-div" children={
<><LandingPageCallToActionButton onClick={this.props.onSignupClick?.bind(this)} text="Start building — it's free" />
<WatchDemoButton onClick={this.props.playViewOnClick?.bind(this)} /></>
} style={{
alignItems: 'center',
display: 'flex',
gap: 32,
justifyContent: 'center'
}} /></>
} style={{
gap: 30
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'white',
borderRadius: '50%',
boxShadow: '0 0 min(21vw, 200px) min(10vw, 160px) #888',
left: '50%',
minHeight: '10%',
position: 'absolute',
top: '50%',
transform: 'translate(-50%, -50%)',
width: '42%'
}} />
<div className="aspect-div" style={{
backgroundColor: '#fff',
left: '50%',
minHeight: '50%',
position: 'absolute',
top: '50%',
transform: 'translate(-50%, -50%)',
width: '80%'
}} />
<img className="aspect-img" src="https://aspect.app/static/media/aspect-video-thumbnail@2x.png" style={{
transform: 'scale(1)',
width: '100%'
}} />
<div className="aspect-div" onClick={this.props.playViewOnClick?.bind(this)}
children={this.props.playView} style={{
alignItems: 'center',
bottom: 0,
cursor: 'pointer',
display: 'flex',
justifyContent: 'center',
left: 0,
position: 'absolute',
right: 0,
top: 0
}} /></>
} style={{
minHeight: 400,
position: 'relative',
width: '100%'
}} /></>
} style={{
gap: 64
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Aspect was built using Aspect." style={{
fontSize: 23,
letterSpacing: 0.21,
lineHeight: 1.4,
textAlign: 'center',
whiteSpace: 'pre-line'
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
justifyItems: 'center',
padding: '40px 0'
}} />
<HStack children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Create visually" style={{
fontSize: 40,
fontWeight: 700,
letterSpacing: -0.3
}} />
<span className="aspect-span" children="Drag and drop react components to create sophisticated views. Libraries like MaterialUI and Tailwind coming soon." style={{
color: 'rgb(107, 114, 128)',
fontSize: 20,
letterSpacing: 0.18,
lineHeight: 1.5
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 12,
justifyItems: 'flex-start'
}} />
<div className="aspect-div" children={
<><video className="aspect-video" autoPlay={true}
loop={true}
muted={true}
playsInline={true}
src="https://firebasestorage.googleapis.com/v0/b/metacode-ddd03.appspot.com/o/landing-page%2Faspect-drag-drop.mp4?alt=media&token=2fe22d31-c12d-45c3-8d75-6abfbc439e25" style={{
objectFit: 'cover',
objectPosition: 'center top',
outlineStyle: 'none',
width: '100%'
}} />
<div className="aspect-div" style={{
boxShadow: 'inset 0 0 0 1px rgba(220,220,220,0.99)',
height: '100%',
left: 0,
pointerEvents: 'none',
position: 'absolute',
top: 0,
width: '100%'
}} /></>
} style={{
backgroundColor: '0 0 0 8px #f5f5f5',
boxShadow: '0 0 0 8px #f5f5f5',
display: 'flex',
minHeight: 100,
overflow: 'hidden',
position: 'relative',
width: '100%'
}} /></>
} style={{
gap: 64,
gridTemplateColumns: '1fr 1fr',
padding: '64px 0'
}} />
<HStack children={
<><div className="aspect-div" children={
<><video className="aspect-video" autoPlay={true}
controls={true}
loop={true}
muted={true}
playsInline={true}
src="https://firebasestorage.googleapis.com/v0/b/metacode-ddd03.appspot.com/o/landing-page%2FLandingPage-import-design.mp4?alt=media&token=cd20718e-fcd6-43ed-aad5-60df9c57365a" style={{
objectFit: 'cover',
objectPosition: 'center top',
outlineStyle: 'none',
width: '100%'
}} />
<div className="aspect-div" style={{
boxShadow: 'inset 0 0 0 1px rgba(220,220,220,0.99)',
height: '100%',
left: 0,
pointerEvents: 'none',
position: 'absolute',
top: 0,
width: '100%'
}} /></>
} style={{
backgroundColor: '0 0 0 8px #f5f5f5',
boxShadow: '0 0 0 8px #f5f5f5',
display: 'flex',
minHeight: 100,
overflow: 'hidden',
position: 'relative',
width: '100%'
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Import design" style={{
fontSize: 40,
fontWeight: 700,
letterSpacing: -0.3
}} />
<span className="aspect-span" children="Convert Figma designs into React code. Sketch and AdobeXD support coming soon." style={{
color: 'rgb(107, 114, 128)',
fontSize: 20,
letterSpacing: 0.18,
lineHeight: 1.5,
textAlign: 'right'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 12,
justifyItems: 'flex-end'
}} /></>
} style={{
gap: 64,
gridTemplateColumns: '1fr 1fr',
justifyContent: 'flex-end',
padding: '64px 0'
}} />
<HStack children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Sync code" style={{
fontSize: 40,
fontWeight: 700,
letterSpacing: -0.3
}} />
<span className="aspect-span" children="Aspect acts as a design system that syncs directly to your codebase, closing the gap between design and engineering." style={{
color: 'rgb(107, 114, 128)',
fontSize: 20,
letterSpacing: 0.18,
lineHeight: 1.5
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 12,
justifyItems: 'flex-start'
}} />
<img className="aspect-img" src="https://aspect.app/static/media/LandingPage-code.jpg" style={{
width: '100%'
}} /></>
} style={{
gap: 64,
gridTemplateColumns: '1fr 1fr',
justifyContent: 'flex-end',
padding: '64px 0'
}} /></>
} />
<LandingPageHeader children={
<><HStack children={
<><a className="aspect-a" children={
<><AspectLogotype  /></>
} href="https://aspect.app"
target="" style={{
color: '#000',
display: 'flex'
}} /></>
} style={{
height: '100%'
}} />
<HStack children={
<><HStack children={
<><a className="aspect-a" children={
<><LandingPageHeaderButton text="Go to website builder" /></>
} href="https://sites.aspect.app"
target="" style={{
textDecoration: 'none'
}} />
<a className="aspect-a" children={
<><LandingPageHeaderButton text="Updates" /></>
} href="https://twitter.com/aspectdotapp"
target="_blank" style={{
textDecoration: 'none'
}} />
<LandingPageHeaderButton onClick={this.props.onLoginClick?.bind(this)} text="Log in" /></>
} style={{
gap: 4
}} />
<LandingPageHeaderCallToActionButton onClick={this.props.onSignupClick?.bind(this)} text="Sign Up" /></>
} style={{
gap: 20,
height: '100%'
}} /></>
} style={{
position: 'fixed',
top: 0,
width: '100%'
}} />
<LandingPageRow children={
<><VStack children={
<><div className="aspect-div" children={
<><a className="aspect-a" children={
<><LandingPageHeaderButton text="Privacy Policy" /></>
} href="https://privacy.aspect.app" style={{
textDecoration: 'none'
}} />
<a className="aspect-a" children={
<><LandingPageHeaderButton text="founders@aspect.app" /></>
} href="mailto:founders@aspect.app"
target="_blank" style={{
textDecoration: 'none'
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
gap: 12,
gridAutoFlow: 'column'
}} />
<span className="aspect-span" children="© Metacode, Inc. dba Aspect" style={{
color: 'rgb(107, 114, 128)'
}} /></>
} style={{
gap: 24,
justifyItems: 'center'
}} /></>
} style={{
padding: '80px 80px 120px'
}} /></>
} style={{
gap: 0,
maxWidth: '100%',
minWidth: '100%',
paddingTop: 'calc(80px + 24px)',
position: 'relative',
width: 1200
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace LandingPage {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
onLoginClick?: (e: any) => any;
onSignupClick?: (e: any) => any;
playView?: React.ReactNode;
playViewOnClick?: (e: any) => any;
size?: string;
emailOnClick?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class LandingPageCallToActionButton extends React.Component<
LandingPageCallToActionButton.Props,
LandingPageCallToActionButton.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: LandingPageCallToActionButton.Props) {
super(props);
this.state = new LandingPageCallToActionButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.text} /></>
} style={{
cursor: 'pointer',
height: '100%',
padding: '0 26px',
width: '100%'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: '#26292F',
borderRadius: 3,
boxSizing: 'border-box',
color: '#fff',
display: 'grid',
fontSize: 16,
fontWeight: 600,
gap: '8px',
gridAutoFlow: 'column',
height: 50,
justifyContent: 'flex-start',
userSelect: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace LandingPageCallToActionButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class LandingPageHeader extends React.Component<
LandingPageHeader.Props,
LandingPageHeader.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: LandingPageHeader.Props) {
super(props);
this.state = new LandingPageHeader.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={this.props.children} style={{
justifyContent: 'space-between',
maxWidth: 1200,
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
display: 'flex',
justifyContent: 'center',
minHeight: 72,
padding: '0 80px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace LandingPageHeader {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
children?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class LandingPageHeaderButton extends React.Component<
LandingPageHeaderButton.Props,
LandingPageHeaderButton.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: LandingPageHeaderButton.Props) {
super(props);
this.state = new LandingPageHeaderButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.text} style={{
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
cursor: 'pointer',
fontSize: 16,
height: '100%',
overflow: 'hidden',
padding: '0 14px',
userSelect: 'none',
width: '100%'
}} /></>
} style={{
borderRadius: 8,
color: 'rgb(107, 114, 128)',
fontWeight: 500,
height: 36,
overflow: 'hidden'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace LandingPageHeaderButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class LandingPageHeaderCallToActionButton extends React.Component<
LandingPageHeaderCallToActionButton.Props,
LandingPageHeaderCallToActionButton.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: LandingPageHeaderCallToActionButton.Props) {
super(props);
this.state = new LandingPageHeaderCallToActionButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: '#EDF4FE',
borderRadius: 50,
boxSizing: 'border-box',
color: '#1B88F7',
cursor: 'pointer',
display: 'grid',
fontSize: 15,
fontWeight: 500,
gap: '8px',
gridAutoFlow: 'column',
height: 40,
justifyContent: 'flex-start',
overflow: 'hidden',
padding: '0 20px',
userSelect: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace LandingPageHeaderCallToActionButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class LandingPageRow extends React.Component<
LandingPageRow.Props,
LandingPageRow.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: LandingPageRow.Props) {
super(props);
this.state = new LandingPageRow.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><VStack children={this.props.children} style={{
maxWidth: 1200
}} /></>
} style={{
display: 'flex',
justifyContent: 'center',
padding: '0 80px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace LandingPageRow {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
children?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ModalView extends React.Component<
ModalView.Props,
ModalView.State
> {
_isMounted = false;
get customState() {
if (this.props.isScrollable === false) {
return 'noscroll';
}
return 'default';
}

constructor(props: ModalView.Props) {
super(props);
this.state = new ModalView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'noscroll':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={(e: any) =>{
if (!this._isMounted) {
return;
}
this.props.onClickClose && this.props.onClickClose(e);
this.props.onClick && this.props.onClick(e);
}}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" onClick={this.props.onClickContent?.bind(this)}
children={this.props.children} style={{
MozBoxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
WebkitBoxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
backgroundColor: '#fff',
boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
height: 'calc(100vh - 80px)',
maxWidth: '100%',
overflow: 'hidden',
padding: '20px',
position: 'relative',
width: 'calc(100vw - 80px)'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(0, 0, 0, 0.5)',
display: 'flex',
height: '100vh',
justifyContent: 'center',
left: '0',
padding: '24px',
position: 'fixed',
top: '0',
width: '100vw',
zIndex: 5
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={(e: any) =>{
if (!this._isMounted) {
return;
}
this.props.onClickClose && this.props.onClickClose(e);
this.props.onClick && this.props.onClick(e);
}}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" onClick={this.props.onClickContent?.bind(this)}
children={this.props.children} style={{
MozBoxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
WebkitBoxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
backgroundColor: '#fff',
boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
display: 'grid',
gridAutoFlow: 'row',
maxHeight: 'calc(100vh - 80px)',
overflowY: 'auto',
padding: '20px',
position: 'relative'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(0, 0, 0, 0.5)',
display: 'flex',
height: '100vh',
justifyContent: 'center',
left: '0',
padding: '24px',
position: 'fixed',
top: '0',
width: '100vw',
zIndex: 5
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ModalView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
onClickClose?: (e: any) => any;
onClickContent?: (e: any) => any;
children?: React.ReactNode;
isScrollable?: boolean;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class PrimaryListItem extends React.Component<
PrimaryListItem.Props,
PrimaryListItem.State
> {
_isMounted = false;
get customState() {
if (this.props.isSelected === true) {
return 'selected';
} else if (this.state.isPressed === true) {
return 'pressed';
} else if (this.state.isHovered === true) {
return 'hovered';
}
return 'default';
}

constructor(props: PrimaryListItem.Props) {
super(props);
this.state = new PrimaryListItem.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'selected':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
backgroundColor: '#06f',
color: '#fff',
fontSize: 12,
gap: 12,
minHeight: 32,
padding: '8px 12px',
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'pressed':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
backgroundColor: '#06f',
color: '#fff',
fontSize: 12,
gap: 12,
minHeight: 32,
padding: '8px 12px',
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'hovered':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
backgroundColor: '#3B3E43',
color: '#fff',
fontSize: 12,
gap: 12,
minHeight: 32,
padding: '8px 12px',
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
backgroundColor: '#25292e',
color: '#fff',
fontSize: 12,
gap: 12,
minHeight: 32,
padding: '8px 12px',
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace PrimaryListItem {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
isSelected?: boolean;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ProjectSettingsView extends React.Component<
ProjectSettingsView.Props,
ProjectSettingsView.State
> {
_isMounted = false;
get customState() {
if (this.props.didCopyApiKey === true) {
return 'copiedApiKey';
} else if (this.props.didCopyProjectId === true) {
return 'copiedProjectId';
}
return 'default';
}

constructor(props: ProjectSettingsView.Props) {
super(props);
this.state = new ProjectSettingsView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'copiedApiKey':
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><h1 className="aspect-h1" children={this.props.title} style={{
fontSize: 17
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'space-between',
marginBottom: 8,
padding: 16,
paddingTop: 0,
width: '100%'
}} />
<VStack children={
<><HStack children={
<><span className="aspect-span" children="Project ID" style={{
fontWeight: 500
}} />
<SimpleButton onClick={this.props.onProjectIdClick?.bind(this)}
children={
<><span className="aspect-span" children={this.props.projectId} /></>
} style={{
border: '1px solid #ddd',
padding: '9px 16px',
width: 'fit-content'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<HStack children={
<><span className="aspect-span" children="API Key" style={{
fontWeight: 500
}} />
<SimpleButton onClick={this.props.onApiKeyClick?.bind(this)}
children={
<><span className="aspect-span" children="Copied" /></>
} style={{
border: '1px solid #ddd',
padding: '9px 16px',
pointerEvents: 'none',
width: 'fit-content'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<SimpleButton onClick={this.props.onCreateApiKeyClick?.bind(this)}
children={
<><span className="aspect-span" children="Generate new API key" /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '9px 16px',
width: 'fit-content'
}} />
<a className="aspect-a" children={
<><span className="aspect-span" children="Sync components to your codebase using the API key and " />
<span className="aspect-span" children="Aspect CLI" style={{
color: '#000',
fontWeight: 500,
textDecoration: 'underline'
}} /></>
} href="https://github.com/tscepo/aspect-ui"
target="_blank" style={{
backgroundColor: '#f5f5f5',
color: 'inherit',
fontSize: 15,
lineHeight: 1.6,
padding: '20px 24px',
textDecoration: 'none'
}} /></>
} style={{
gap: 10,
padding: '0 16px'
}} />
<HStack children={
<><SimpleButton onClick={this.props.didClickSignOut?.bind(this)}
children={
<><span className="aspect-span" children="Sign Out" /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '9px 16px',
width: 'fit-content'
}} /></>
} style={{
boxShadow: '0 -1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'flex-end',
marginBottom: 8,
padding: 16,
paddingBottom: 0,
width: '100%'
}} /></>
} style={{
fontSize: 14,
gap: 14,
minHeight: 166,
padding: '40px 32px',
userSelect: 'auto',
width: 560
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'copiedProjectId':
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><h1 className="aspect-h1" children={this.props.title} style={{
fontSize: 17
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'space-between',
marginBottom: 8,
padding: 16,
paddingTop: 0,
width: '100%'
}} />
<VStack children={
<><HStack children={
<><span className="aspect-span" children="Project ID" style={{
fontWeight: 500
}} />
<SimpleButton onClick={this.props.onProjectIdClick?.bind(this)}
children={
<><span className="aspect-span" children="Copied" /></>
} style={{
border: '1px solid #ddd',
padding: '9px 16px',
pointerEvents: 'none',
width: 'fit-content'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<HStack children={
<><span className="aspect-span" children="API Key" style={{
fontWeight: 500
}} />
<SimpleButton onClick={this.props.onApiKeyClick?.bind(this)}
children={
<><span className="aspect-span" children={this.props.apiKey} /></>
} style={{
border: '1px solid #ddd',
padding: '9px 16px',
width: 'fit-content'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<SimpleButton onClick={this.props.onCreateApiKeyClick?.bind(this)}
children={
<><span className="aspect-span" children="Generate new API key" /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '9px 16px',
width: 'fit-content'
}} />
<a className="aspect-a" children={
<><span className="aspect-span" children="Sync components to your codebase using the API key and " />
<span className="aspect-span" children="Aspect CLI" style={{
color: '#000',
fontWeight: 500,
textDecoration: 'underline'
}} /></>
} href="https://github.com/tscepo/aspect-ui"
target="_blank" style={{
backgroundColor: '#f5f5f5',
color: 'inherit',
fontSize: 15,
lineHeight: 1.6,
padding: '20px 24px',
textDecoration: 'none'
}} /></>
} style={{
gap: 10,
padding: '0 16px'
}} />
<HStack children={
<><SimpleButton onClick={this.props.didClickSignOut?.bind(this)}
children={
<><span className="aspect-span" children="Sign Out" /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '9px 16px',
width: 'fit-content'
}} /></>
} style={{
boxShadow: '0 -1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'flex-end',
marginBottom: 8,
padding: 16,
paddingBottom: 0,
width: '100%'
}} /></>
} style={{
fontSize: 14,
gap: 14,
minHeight: 166,
padding: '40px 32px',
userSelect: 'auto',
width: 560
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><h1 className="aspect-h1" children={this.props.title} style={{
fontSize: 17
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'space-between',
marginBottom: 8,
padding: 16,
paddingTop: 0,
width: '100%'
}} />
<VStack children={
<><HStack children={
<><span className="aspect-span" children="Project ID" style={{
fontWeight: 500
}} />
<SimpleButton onClick={this.props.onProjectIdClick?.bind(this)}
children={
<><span className="aspect-span" children={this.props.projectId} /></>
} style={{
border: '1px solid #ddd',
padding: '9px 16px',
width: 'fit-content'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<HStack children={
<><span className="aspect-span" children="API Key" style={{
fontWeight: 500
}} />
<SimpleButton onClick={this.props.onApiKeyClick?.bind(this)}
children={
<><span className="aspect-span" children={this.props.apiKey} /></>
} style={{
border: '1px solid #ddd',
padding: '9px 16px',
width: 'fit-content'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<SimpleButton onClick={this.props.onCreateApiKeyClick?.bind(this)}
children={
<><span className="aspect-span" children="Generate new API key" /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '9px 16px',
width: 'fit-content'
}} />
<a className="aspect-a" children={
<><span className="aspect-span" children="Sync components to your codebase using the API key and " />
<span className="aspect-span" children="Aspect CLI" style={{
color: '#000',
fontWeight: 500,
textDecoration: 'underline'
}} /></>
} href="https://github.com/tscepo/aspect-ui"
target="_blank" style={{
backgroundColor: '#f5f5f5',
color: 'inherit',
fontSize: 15,
lineHeight: 1.6,
padding: '20px 24px',
textDecoration: 'none'
}} /></>
} style={{
gap: 10,
padding: '0 16px'
}} />
<HStack children={
<><SimpleButton onClick={this.props.didClickSignOut?.bind(this)}
children={
<><span className="aspect-span" children="Sign Out" /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '9px 16px',
width: 'fit-content'
}} /></>
} style={{
boxShadow: '0 -1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'flex-end',
marginBottom: 8,
padding: 16,
paddingBottom: 0,
width: '100%'
}} /></>
} style={{
fontSize: 14,
gap: 14,
minHeight: 166,
padding: '40px 32px',
userSelect: 'auto',
width: 560
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ProjectSettingsView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
apiKey?: string;
onApiKeyClick?: (e: any) => any;
onCreateApiKeyClick?: (e: any) => any;
projectId?: string;
onProjectIdClick?: (e: any) => any;
didCopyApiKey?: boolean;
didCopyProjectId?: boolean;
didClickSignOut?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ProjectViewActionButton extends React.Component<
ProjectViewActionButton.Props,
ProjectViewActionButton.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: ProjectViewActionButton.Props) {
super(props);
this.state = new ProjectViewActionButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><SimpleButton children={this.props.children} style={{
cursor: 'default',
padding: '0 12px',
userSelect: 'none',
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
display: 'grid',
minHeight: 32
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ProjectViewActionButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
children?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ProjectViewButton extends React.Component<
ProjectViewButton.Props,
ProjectViewButton.State
> {
_isMounted = false;
get customState() {
if (this.props.isEditing === true) {
return 'editing';
}
return 'default';
}

constructor(props: ProjectViewButton.Props) {
super(props);
this.state = new ProjectViewButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'editing':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><input className="aspect-input" />
<SimpleButton onClick={this.props.onSettingsClick?.bind(this)}
children={this.props.buttonIcon} style={{
justifyContent: 'center',
minHeight: 24,
width: 28
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
justifyContent: 'space-between',
minHeight: 36,
paddingLeft: 16,
paddingRight: 8,
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 11,
fontWeight: 500
}} />
<SimpleButton onClick={this.props.onSettingsClick?.bind(this)}
children={this.props.buttonIcon} style={{
justifyContent: 'center',
minHeight: 24,
width: 28
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
justifyContent: 'space-between',
minHeight: 36,
paddingLeft: 16,
paddingRight: 8,
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ProjectViewButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
onSettingsClick?: (e: any) => any;
buttonIcon?: React.ReactNode;
isEditing?: boolean;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class PropertyFloatingView extends React.Component<
PropertyFloatingView.Props,
PropertyFloatingView.State
> {
_isMounted = false;
get customState() {
if (this.props.viewId === 'expanded') {
return 'expanded';
} else if (this.props.viewId === 'expanded+input') {
return 'expanded+input';
}
return 'default';
}

constructor(props: PropertyFloatingView.Props) {
super(props);
this.state = new PropertyFloatingView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'expanded':
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
bottom: -1,
height: 1,
left: 8,
position: 'absolute',
right: 8
}} /></>
} style={{
gap: 14,
gridTemplateColumns: '1fr',
minHeight: 36,
padding: '0 16px',
position: 'relative',
width: '100%',
zIndex: 1
}} />
<ScrollView children={this.props.children} style={{
backgroundColor: '#fff',
height: '100%',
minHeight: '',
padding: '4px 0',
position: 'relative',
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
gap: 0,
height: '100%',
overflow: 'hidden',
paddingBottom: 12,
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'expanded+input':
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<input className="aspect-input" onChange={this.props.inputOnChange?.bind(this)}
defaultValue={this.props.inputDefaultValue} autoComplete="off"
placeholder="filter"
spellCheck={false}
type="search" style={{
borderColor: 'rgba(0,0,0, 0.1)',
fontSize: 12,
height: 22,
outline: 'none',
padding: '0 8px',
width: '100%'
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
bottom: -1,
height: 1,
left: 8,
position: 'absolute',
right: 8
}} /></>
} style={{
gap: 14,
gridTemplateColumns: '1fr',
minHeight: 36,
padding: '0 16px',
position: 'relative',
width: '100%',
zIndex: 1
}} />
<ScrollView children={this.props.children} style={{
backgroundColor: '#fff',
height: '100%',
minHeight: '',
padding: '4px 0',
position: 'relative',
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
gap: 0,
height: '100%',
overflow: 'hidden',
paddingBottom: 12,
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
gap: 14,
gridTemplateColumns: '1fr',
justifyContent: 'space-between',
minHeight: 36,
padding: '0 16px',
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace PropertyFloatingView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
viewId?: string;
children?: React.ReactNode;
inputOnChange?: (e: any) => any;
inputDefaultValue?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class PropertyInspectorItem extends React.Component<
PropertyInspectorItem.Props,
PropertyInspectorItem.State
> {
_isMounted = false;
get customState() {
if (this.props.inputType === 'text') {
return 'textInput';
} else if (this.props.inputType === 'general') {
return 'generalInput';
}
return 'default';
}

constructor(props: PropertyInspectorItem.Props) {
super(props);
this.state = new PropertyInspectorItem.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'textInput':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 12,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap',
width: 64
}} />
<input className="aspect-input" onChange={this.props.inputOnChange?.bind(this)}
defaultValue={this.props.inputDefaultValue} style={{
fontSize: 11,
fontWeight: 500,
height: 22,
width: '100%'
}} /></>
} style={{
gap: 24,
gridTemplateColumns: 'auto 1fr',
minHeight: 28,
padding: '0 16px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'generalInput':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 12,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap',
width: 64
}} />
<div className="aspect-div" children={this.props.generalInputAccessoryView} style={{
width: '100%'
}} /></>
} style={{
gap: 24,
gridTemplateColumns: 'auto 1fr',
minHeight: 28,
padding: '0 16px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 12,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} />
<span className="aspect-span" children={this.props.detail} style={{
color: '#888',
fontSize: 12,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
gap: 24,
justifyContent: 'space-between',
minHeight: 28,
padding: '0 16px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace PropertyInspectorItem {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
inputType?: string;
detail?: string;
inputDefaultValue?: string;
inputOnChange?: (e: any) => any;
generalInputAccessoryView?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class QuickLayoutView extends React.Component<
QuickLayoutView.Props,
QuickLayoutView.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: QuickLayoutView.Props) {
super(props);
this.state = new QuickLayoutView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} /></>
} style={{
minHeight: 28,
padding: '0 16px',
width: 224
}} />
<HStack children={this.props.children} style={{
gap: 0,
minHeight: 28,
padding: '0 16px'
}} /></>
} style={{
gap: 0,
padding: '4px 0',
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace QuickLayoutView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
children?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ScrollView extends React.Component<
ScrollView.Props,
ScrollView.State
> {
_isMounted = false;
get customState() {
if (this.props.direction === 'horizontal') {
return 'horizontal';
}
return 'default';
}

constructor(props: ScrollView.Props) {
super(props);
this.state = new ScrollView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'horizontal':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={this.props.children} style={{
width: '100%'
}} /></>
} style={{
overflowX: 'auto',
whiteSpace: 'nowrap'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={this.props.children} style={{
width: '100%'
}} /></>
} style={{
overflowY: 'auto'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ScrollView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
children?: React.ReactNode;
direction?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class SignInButton extends React.Component<
SignInButton.Props,
SignInButton.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: SignInButton.Props) {
super(props);
this.state = new SignInButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.text} /></>
} type="button" style={{
border: '1px solid #ddd',
fontSize: 16,
height: '100%',
justifyContent: 'center',
padding: '0 14px',
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
height: 48
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace SignInButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class SignInCallToActionButton extends React.Component<
SignInCallToActionButton.Props,
SignInCallToActionButton.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: SignInCallToActionButton.Props) {
super(props);
this.state = new SignInCallToActionButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.text} style={{
fontWeight: 500
}} /></>
} type="submit" style={{
fontSize: 16,
height: '100%',
justifyContent: 'center',
padding: '0 14px',
width: '100%'
}} /></>
} style={{
backgroundColor: '#06f',
color: '#fff',
height: 48
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace SignInCallToActionButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class SignInInput extends React.Component<
SignInInput.Props,
SignInInput.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: SignInInput.Props) {
super(props);
this.state = new SignInInput.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<input className="aspect-input" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} placeholder={this.props.placeholder}
defaultValue={this.props.defaultValue}
type={this.props.type as any}
name={this.props.name} required={true} style={{
border: '1px solid #ddd',
fontSize: 16,
height: 46,
outline: 'none',
padding: '0 18px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace SignInInput {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
placeholder?: string;
name?: string;
type?: string;
defaultValue?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class SignInView extends React.Component<
SignInView.Props,
SignInView.State
> {
_isMounted = false;
get customState() {
if (this.props.viewId === 'signUpWithPassword') {
return 'Sign Up Password Input';
} else if (this.props.viewId === 'resetPassword') {
return 'Reset Password';
} else if (this.props.viewId === 'signin') {
return 'Initial Sign In';
} else if (this.props.viewId === 'signInWithPassword') {
return 'Sign In Password Input';
} else if (this.props.viewId === 'resetPasswordEmailSent') {
return 'Reset Password: Email Sent';
}
return 'default';
}

constructor(props: SignInView.Props) {
super(props);
this.state = new SignInView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'Sign Up Password Input':
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><h1 className="aspect-h1" children="Create Account" style={{
letterSpacing: -0.1,
textAlign: 'center'
}} />
<span className="aspect-span" children={this.props.message} style={{
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
flexDirection: 'column',
gap: 8
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><SignInInput defaultValue={this.props.email} placeholder="Email"
name="email" />
<SignInInput placeholder="Password"
name="password"
type="password" /></>
} style={{
display: 'grid',
gap: 12
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><SignInCallToActionButton text="Continue" /></>
} style={{
display: 'flex',
flexDirection: 'column',
gap: 14
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Already have an account? " />
<a className="aspect-a" children={
<><span className="aspect-span" onClick={this.props.authSwitchOnClick?.bind(this)} children="Sign In" style={{
fontWeight: 500
}} /></>
} style={{
color: '#06f'
}} /></>
} style={{
justifySelf: 'center'
}} /></>
} style={{
display: 'grid',
gap: 20
}} /></>
} style={{
display: 'grid',
gap: 20
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
alignItems: 'flex-start',
display: 'grid',
flexDirection: 'column',
gap: 28,
padding: '24px 24px 36px',
width: 440
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'Reset Password':
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><h1 className="aspect-h1" children="Reset Password" style={{
letterSpacing: -0.1,
textAlign: 'center'
}} />
<span className="aspect-span" children={this.props.message} style={{
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
flexDirection: 'column',
gap: 8
}} />
<div className="aspect-div" children={
<><SignInInput defaultValue={this.props.email} placeholder="Email"
name="email"
type="email" />
<SignInCallToActionButton text="Send Reset Email" /></>
} style={{
alignItems: 'center',
display: 'grid',
gap: 20
}} />
<span className="aspect-span" onClick={this.props.backToSignInOnClick?.bind(this)} children="← Back" style={{
color: '#06f',
fontWeight: 500,
justifySelf: 'center'
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
alignItems: 'flex-start',
display: 'grid',
flexDirection: 'column',
gap: 28,
padding: '24px 24px 36px',
width: 440
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'Initial Sign In':
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><h1 className="aspect-h1" children="Sign In" style={{
letterSpacing: -0.1,
textAlign: 'center'
}} />
<span className="aspect-span" children={this.props.message} style={{
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
flexDirection: 'column',
gap: 8
}} />
<GoogleSignInButton onClick={this.props.continueWithGoogleOnClick?.bind(this)} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: '#ddd',
height: 1
}} />
<span className="aspect-span" children="OR" style={{
color: '#666',
fontSize: 12,
fontWeight: 500,
textAlign: 'center'
}} />
<div className="aspect-div" style={{
backgroundColor: '#ddd',
height: 1
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gap: 8,
gridTemplateColumns: '1fr auto 1fr'
}} />
<fieldset className="aspect-fieldset" children={
<><div className="aspect-div" children={
<><SignInInput defaultValue={this.props.email} placeholder="Email"
name="email"
type="email" />
<div className="aspect-div" children={
<><SignInCallToActionButton text="Continue" />
<div className="aspect-div" children={
<><span className="aspect-span" children="Don't have an account? " />
<span className="aspect-span" onClick={this.props.authSwitchOnClick?.bind(this)} children="Sign Up" style={{
color: '#06f',
fontWeight: 500
}} /></>
} style={{
justifySelf: 'center',
textAlign: 'center'
}} /></>
} style={{
display: 'grid',
flexDirection: 'column',
gap: 20
}} /></>
} style={{
display: 'grid',
flexDirection: 'column',
gap: 20
}} /></>
} style={{
border: 'none',
padding: 0
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
alignItems: 'flex-start',
display: 'grid',
flexDirection: 'column',
gap: 28,
padding: '24px 24px 36px',
width: 440
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'Sign In Password Input':
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><h1 className="aspect-h1" children="Sign In" style={{
letterSpacing: -0.1,
textAlign: 'center'
}} />
<span className="aspect-span" children={this.props.message} style={{
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
flexDirection: 'column',
gap: 8
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><SignInInput defaultValue={this.props.email} placeholder="Email"
name="email"
type="email" />
<SignInInput placeholder="Password"
name="password"
type="password" /></>
} style={{
display: 'flex',
flexDirection: 'column',
gap: 12
}} />
<div className="aspect-div" children={
<><SignInCallToActionButton text="Continue" />
<div className="aspect-div" children={
<><span className="aspect-span" onClick={this.props.resetPasswordOnClick?.bind(this)} children="Forgot password?" style={{
color: '#06f',
fontWeight: 500,
justifySelf: 'center'
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Don't have an account? " />
<span className="aspect-span" onClick={this.props.authSwitchOnClick?.bind(this)} children="Sign Up" style={{
color: '#06f',
fontWeight: 500
}} /></>
} style={{
justifySelf: 'center',
textAlign: 'center'
}} /></>
} style={{
display: 'grid',
gap: 16
}} /></>
} style={{
display: 'grid',
gap: 20
}} /></>
} style={{
display: 'flex',
flexDirection: 'column',
gap: 20
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
alignItems: 'flex-start',
display: 'grid',
flexDirection: 'column',
gap: 28,
padding: '24px 24px 36px',
width: 440
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'Reset Password: Email Sent':
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><h1 className="aspect-h1" children="Reset Password" style={{
letterSpacing: -0.1,
textAlign: 'center'
}} />
<span className="aspect-span" children={this.props.message} style={{
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
flexDirection: 'column',
gap: 8
}} />
<div className="aspect-div" children={
<><SignInCallToActionButton text="Resend Email" />
<span className="aspect-span" onClick={this.props.backToSignInOnClick?.bind(this)} children="← Back" style={{
color: '#06f',
fontWeight: 500,
justifySelf: 'center'
}} /></>
} style={{
display: 'grid',
gap: 20
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
alignItems: 'flex-start',
display: 'grid',
flexDirection: 'column',
gap: 28,
padding: '24px 24px 36px',
width: 440
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<form className="aspect-form" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><h1 className="aspect-h1" children="Create Account" style={{
letterSpacing: -0.1,
textAlign: 'center'
}} />
<span className="aspect-span" children={this.props.message} style={{
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
flexDirection: 'column',
gap: 8
}} />
<GoogleSignInButton onClick={this.props.continueWithGoogleOnClick?.bind(this)} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: '#ddd',
height: 1
}} />
<span className="aspect-span" children="OR" style={{
color: '#666',
fontSize: 12,
fontWeight: 500,
textAlign: 'center'
}} />
<div className="aspect-div" style={{
backgroundColor: '#ddd',
height: 1
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gap: 8,
gridTemplateColumns: '1fr auto 1fr'
}} />
<fieldset className="aspect-fieldset" children={
<><div className="aspect-div" children={
<><SignInInput defaultValue={this.props.email} placeholder="Email"
name="email"
type="email" />
<div className="aspect-div" children={
<><SignInCallToActionButton text="Continue" />
<div className="aspect-div" children={
<><span className="aspect-span" children="Already have an account? " />
<span className="aspect-span" onClick={this.props.authSwitchOnClick?.bind(this)} children="Sign In" style={{
color: '#06f',
fontWeight: 500
}} /></>
} style={{
textAlign: 'center'
}} /></>
} style={{
display: 'flex',
flexDirection: 'column',
gap: 20
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
gap: 20
}} /></>
} style={{
border: 'none',
padding: 0
}} /></>
}
onSubmit={this.props.onSubmit?.bind(this)} style={{
alignItems: 'flex-start',
display: 'grid',
flexDirection: 'column',
gap: 28,
padding: '24px 24px 36px',
width: 440
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace SignInView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
viewId?: string;
continueWithGoogleOnClick?: (e: any) => any;
onSubmit?: (e: any) => any;
authSwitchOnClick?: (e: any) => any;
backToSignInOnClick?: (e: any) => any;
email?: string;
message?: string;
resetPasswordOnClick?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class SimpleButton extends React.Component<
SimpleButton.Props,
SimpleButton.State
> {
_isMounted = false;
get customState() {
if (this.props.disabled === true) {
return 'disabled';
} else if (this.state.isPressed === true) {
return 'pressed';
} else if (this.state.isHovered === true) {
return 'hovered';
}
return 'default';
}

constructor(props: SimpleButton.Props) {
super(props);
this.state = new SimpleButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'hovered':
return (
<button className="aspect-button" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignItems: 'center',
backgroundColor: 'rgba(0,0,0,0.04)',
display: 'grid',
gridAutoFlow: 'column'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'pressed':
return (
<button className="aspect-button" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignItems: 'center',
backgroundColor: 'rgba(0,0,0,0.07)',
display: 'grid',
gridAutoFlow: 'column'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'disabled':
return (
<button className="aspect-button" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignItems: 'center',
backgroundColor: 'rgba(0,0,0,0)',
display: 'grid',
gridAutoFlow: 'column',
opacity: 0.5,
pointerEvents: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<button className="aspect-button" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children}
type={this.props.type as any} style={{
alignItems: 'center',
backgroundColor: 'rgba(0,0,0,0)',
display: 'grid',
gridAutoFlow: 'column',
outline: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace SimpleButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
children?: React.ReactNode;
disabled?: boolean;
type?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class StyleLayoutView extends React.Component<
StyleLayoutView.Props,
StyleLayoutView.State
> {
_isMounted = false;
get customState() {
if (this.props.isExpanded === true) {
return 'expanded';
}
return 'default';
}

constructor(props: StyleLayoutView.Props) {
super(props);
this.state = new StyleLayoutView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'expanded':
return (
<VStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} /></>
} style={{
backgroundColor: '#f9f9f9',
minHeight: 28,
padding: '0 16px'
}} />
<VStack children={
<><HStack children={
<><span className="aspect-span" children="type" style={{
fontSize: 12,
fontWeight: 500
}} />
<div className="aspect-div" children={this.props.typeView} /></>
} style={{
justifyContent: 'space-between',
minHeight: 28,
padding: '0 16px'
}} />
<HStack children={
<><span className="aspect-span" children="direction" style={{
fontSize: 12,
fontWeight: 500
}} />
<div className="aspect-div" children={this.props.directionView} /></>
} style={{
justifyContent: 'space-between',
minHeight: 28,
padding: '0 16px'
}} />
<HStack children={
<><span className="aspect-span" children="gap" style={{
fontSize: 12,
fontWeight: 500
}} />
<div className="aspect-div" children={this.props.gapView} /></>
} style={{
justifyContent: 'space-between',
minHeight: 28,
padding: '0 16px'
}} />
<HStack children={
<><span className="aspect-span" children="alignment" style={{
fontSize: 12,
fontWeight: 500
}} /></>
} style={{
justifyContent: 'space-between',
minHeight: 28,
padding: '0 16px'
}} /></>
} style={{
gap: 0
}} />
<VStack children={
<><div className="aspect-div" children={this.props.alignmentView} style={{
border: '1px solid #eee',
display: 'grid',
gap: 8,
gridTemplateColumns: '1fr 1fr 1fr',
gridTemplateRows: '1fr 1fr 1fr',
minHeight: 120,
padding: 8
}} /></>
} style={{
gap: 0,
padding: '0 16px'
}} /></>
} style={{
gap: 4,
minHeight: 132,
paddingBottom: 16,
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<SimpleButton  /></>
} style={{
backgroundColor: '#f9f9f9',
gap: 14,
justifyContent: 'space-between',
minHeight: 28,
paddingLeft: 16
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace StyleLayoutView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
typeView?: React.ReactNode;
directionView?: React.ReactNode;
gapView?: React.ReactNode;
alignmentView?: React.ReactNode;
isExpanded?: boolean;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class Test extends React.Component<
Test.Props,
Test.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: Test.Props) {
super(props);
this.state = new Test.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<ElementListFloatingView onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><ElementListItem title="title" /></>
} title="title" style={this.props.style} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace Test {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class TestMui extends React.Component<
TestMui.Props,
TestMui.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: TestMui.Props) {
super(props);
this.state = new TestMui.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<>null</>
} style={{
alignItems: 'center',
display: 'grid',
flexDirection: 'column',
justifyItems: 'center',
minHeight: 102,
width: 289
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace TestMui {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class TextButton extends React.Component<
TextButton.Props,
TextButton.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: TextButton.Props) {
super(props);
this.state = new TextButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.text} /></>
} style={{
border: '1px solid #ddd',
fontSize: 13,
height: '100%',
justifyContent: 'center',
padding: '0 14px',
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
height: 34
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace TextButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class TextSelect extends React.Component<
TextSelect.Props,
TextSelect.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: TextSelect.Props) {
super(props);
this.state = new TextSelect.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} />
<div className="aspect-div" children={this.props.icon} />
<select className="aspect-select" onChange={this.props.selectOnChange?.bind(this)}
children={this.props.options}
value={this.props.selectValue} style={{
height: '100%',
left: 0,
opacity: 0,
position: 'absolute',
top: 0,
width: '100%'
}} /></>
} style={{
alignItems: 'center',
boxShadow: 'inset 0 0 0 1px #ddd',
display: 'flex',
fontSize: 12,
gap: 6,
height: 22,
justifyContent: 'space-between',
padding: '0 8px',
position: 'relative'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace TextSelect {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
icon?: React.ReactNode;
options?: React.ReactNode;
selectValue?: string;
selectOnChange?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ToggleView extends React.Component<
ToggleView.Props,
ToggleView.State
> {
_isMounted = false;
get customState() {
if (this.props.selectedOption === 'left') {
return 'leftSelected';
} else if (this.props.selectedOption === 'right') {
return 'rightSelected';
}
return 'default';
}

constructor(props: ToggleView.Props) {
super(props);
this.state = new ToggleView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'leftSelected':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.leftOptionText} style={{
color: 'white'
}} /></>
} style={{
minHeight: 24,
padding: '0 8px'
}} /></>
} style={{
backgroundColor: '#06f'
}} />
<div className="aspect-div" children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.rightOptionText} /></>
} style={{
minHeight: 24,
padding: '0 8px'
}} /></>
} /></>
} style={{
fontSize: 12,
fontWeight: 500,
gap: 0,
padding: 4
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'rightSelected':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.leftOptionText} /></>
} style={{
minHeight: 24,
padding: '0 8px'
}} /></>
} />
<div className="aspect-div" children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.rightOptionText} style={{
color: 'white'
}} /></>
} style={{
minHeight: 24,
padding: '0 8px'
}} /></>
} style={{
backgroundColor: '#06f'
}} /></>
} style={{
fontSize: 12,
fontWeight: 500,
gap: 0,
padding: 4
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.leftOptionText} /></>
} style={{
minHeight: 24,
padding: '0 8px'
}} /></>
} />
<div className="aspect-div" children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.rightOptionText} /></>
} style={{
minHeight: 24,
padding: '0 8px'
}} /></>
} /></>
} style={{
fontSize: 12,
fontWeight: 500,
gap: 0,
padding: 4
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ToggleView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
leftOptionText?: string;
rightOptionText?: string;
selectedOption?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ViewStateItemView extends React.Component<
ViewStateItemView.Props,
ViewStateItemView.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: ViewStateItemView.Props) {
super(props);
this.state = new ViewStateItemView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 12,
fontWeight: 500
}} />
<div className="aspect-div" children={this.props.accessoryView} style={{
minHeight: 24,
width: 28
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.05)',
justifyContent: 'space-between',
minHeight: 36,
paddingLeft: 16,
paddingRight: 8,
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ViewStateItemView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
accessoryView?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ViewStateManagerCondition extends React.Component<
ViewStateManagerCondition.Props,
ViewStateManagerCondition.State
> {
_isMounted = false;
get customState() {
if (this.props.title === 'test') {
return 'edit mode';
}
return 'default';
}

constructor(props: ViewStateManagerCondition.Props) {
super(props);
this.state = new ViewStateManagerCondition.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'edit mode':
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
overflow: 'hidden',
textOverflow: 'ellipsis'
}} />
<HStack style={{
gap: 12,
justifyContent: 'end',
minHeight: '100%',
minWidth: 28
}} /></>
} style={{
fontSize: 12,
fontWeight: 500,
gridTemplateColumns: '1fr auto',
justifyContent: 'space-between',
minHeight: 32,
paddingLeft: 8,
paddingRight: 8,
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
overflow: 'hidden',
textOverflow: 'ellipsis'
}} />
<HStack children={this.props.accessoryView} style={{
gap: 12,
justifyContent: 'end',
maxWidth: 128,
minHeight: '100%',
minWidth: 28
}} /></>
} style={{
fontSize: 12,
fontWeight: 500,
gap: 16,
justifyContent: 'space-between',
minHeight: 32,
paddingLeft: 8,
width: '100%'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ViewStateManagerCondition {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
accessoryView?: React.ReactNode;
title?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ViewStateManagerHeader extends React.Component<
ViewStateManagerHeader.Props,
ViewStateManagerHeader.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: ViewStateManagerHeader.Props) {
super(props);
this.state = new ViewStateManagerHeader.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'State 1':
return (
null
)
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 12,
fontWeight: 500
}} />
<SimpleButton children={this.props.accesoryView} style={{
minHeight: 24,
width: 28
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.05)',
justifyContent: 'space-between',
minHeight: 36,
paddingLeft: 16,
paddingRight: 8,
width: 224
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ViewStateManagerHeader {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
accesoryView?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class ViewStateSidebar extends React.Component<
ViewStateSidebar.Props,
ViewStateSidebar.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: ViewStateSidebar.Props) {
super(props);
this.state = new ViewStateSidebar.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children="states" style={{
color: 'rgba(0,0,0,1)',
fontSize: 10,
fontWeight: 600,
letterSpacing: 0.2,
textAlign: 'left'
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Default" style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
alignItems: 'center',
background: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 30,
width: 211
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="State 2" style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
alignItems: 'center',
background: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 30,
width: 211
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="State 3" style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
alignItems: 'center',
background: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 30,
width: 211
}} /></>
} style={{
alignContent: 'flex-start',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gap: 5,
justifyItems: 'center',
minHeight: 250,
width: 227
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace ViewStateSidebar {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class VisualEditorAddIcon extends React.Component<
VisualEditorAddIcon.Props,
VisualEditorAddIcon.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: VisualEditorAddIcon.Props) {
super(props);
this.state = new VisualEditorAddIcon.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<svg className="aspect-svg" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><path d="M11 6H0V5h11v1z" style={{
clipRule: 'evenodd',
fillRule: 'evenodd',
transformOrigin: '0px 0px'
}} />
<path d="M5 11V0h1v11H5z" style={{
clipRule: 'evenodd',
fillRule: 'evenodd',
transformOrigin: '0px 0px'
}} /></>
} fill="currentColor"
height="11"
viewBox="0 0 11 11"
width="11"
xmlns="http://www.w3.org/2000/svg" style={{
overflowX: 'hidden',
overflowY: 'hidden'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace VisualEditorAddIcon {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class VisualEditorCallToActionButton extends React.Component<
VisualEditorCallToActionButton.Props,
VisualEditorCallToActionButton.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: VisualEditorCallToActionButton.Props) {
super(props);
this.state = new VisualEditorCallToActionButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><SimpleButton children={
<><span className="aspect-span" children={this.props.text} /></>
} type="submit" style={{
height: '100%',
justifyContent: 'center',
padding: '0 14px',
width: '100%'
}} /></>
} style={{
backgroundColor: '#06f',
color: '#fff',
fontSize: 14,
fontWeight: 500,
height: 40
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace VisualEditorCallToActionButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
text?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class VisualEditorHeaderButton extends React.Component<
VisualEditorHeaderButton.Props,
VisualEditorHeaderButton.State
> {
_isMounted = false;
get customState() {
if (this.state.isPressed === true) {
return 'pressed';
} else if (this.state.isHovered === true) {
return 'hovered';
}
return 'default';
}

constructor(props: VisualEditorHeaderButton.Props) {
super(props);
this.state = new VisualEditorHeaderButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'hovered':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignItems: 'center',
backgroundColor: '#151515',
display: 'grid',
fontSize: 12,
fontWeight: 500,
gap: 8,
gridAutoFlow: 'column',
height: '100%',
justifyContent: 'center',
padding: '0 16px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
case 'pressed':
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignItems: 'center',
backgroundColor: '#000',
display: 'grid',
fontSize: 12,
fontWeight: 500,
gap: 8,
gridAutoFlow: 'column',
height: '100%',
justifyContent: 'center',
padding: '0 16px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignItems: 'center',
display: 'grid',
fontSize: 12,
fontWeight: 500,
gap: 8,
gridAutoFlow: 'column',
height: '100%',
justifyContent: 'center',
padding: '0 16px',
whiteSpace: 'nowrap'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace VisualEditorHeaderButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
children?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class VisualEditorHeaderView extends React.Component<
VisualEditorHeaderView.Props,
VisualEditorHeaderView.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: VisualEditorHeaderView.Props) {
super(props);
this.state = new VisualEditorHeaderView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<HStack onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={this.props.projectButton} style={{
height: '100%'
}} />
<div className="aspect-div" style={{
height: '100%'
}} /></>
} style={{
height: 32,
justifyContent: 'space-between',
width: 100
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace VisualEditorHeaderView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
projectButton?: React.ReactNode;
previewButton?: string;
exportButton?: string;
property1?: string;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class VisualEditorTrayView extends React.Component<
VisualEditorTrayView.Props,
VisualEditorTrayView.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: VisualEditorTrayView.Props) {
super(props);
this.state = new VisualEditorTrayView.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignItems: 'flex-start',
display: 'flex',
gap: 8,
minHeight: 48,
padding: 8,
width: 280
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace VisualEditorTrayView {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
children?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class VisualEditorViewsButton extends React.Component<
VisualEditorViewsButton.Props,
VisualEditorViewsButton.State
> {
_isMounted = false;
get customState() {
if (this.props.isInputMode === true) {
return 'input';
}
return 'default';
}

constructor(props: VisualEditorViewsButton.Props) {
super(props);
this.state = new VisualEditorViewsButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
case 'input':
return (
<input className="aspect-input" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} defaultValue={this.props.title} autoFocus={true} style={{
backgroundColor: 'rgba(255, 255, 255, 0.1)',
border: '1px solid rgba(255,255,255,0.1)',
color: '#fff',
fontSize: 12.5,
outline: 'none'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><span className="aspect-span" children={this.props.title} style={{
fontSize: 12.5,
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}} /></>
} style={{
alignItems: 'center',
display: 'flex',
height: '100%',
justifyContent: 'center',
overflow: 'hidden'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace VisualEditorViewsButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
title?: string;
isInputMode?: boolean;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class VStack extends React.Component<
VStack.Props,
VStack.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: VStack.Props) {
super(props);
this.state = new VStack.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={this.props.children} style={{
alignContent: 'flex-start',
alignItems: 'flex-start',
boxSizing: 'border-box',
display: 'grid',
gap: '8px'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace VStack {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
children?: React.ReactNode;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}

export class WatchDemoButton extends React.Component<
WatchDemoButton.Props,
WatchDemoButton.State
> {
_isMounted = false;
get customState() {

return 'default';
}

constructor(props: WatchDemoButton.Props) {
super(props);
this.state = new WatchDemoButton.State();
}

componentDidMount() {
this._isMounted = true;
document.addEventListener('mouseup', this.handleMouseUp.bind(this));
}

componentWillUnmount() {
this._isMounted = false;
document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
}

render() {
switch (this.customState) {
default:
return (
<div className="aspect-div" onMouseEnter={this.props.onMouseEnter?.bind(this)}
onMouseOver={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseOver && this.props.onMouseOver(e);
this.setState({
isHovered: true,
})
}}
onMouseLeave={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseLeave && this.props.onMouseLeave(e);
this.setState({
isHovered: false,
})
}}
onMouseDown={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseDown && this.props.onMouseDown(e);
this.setState({
isPressed: true,
})
}}
onMouseUp={(e: any) => {
if (!this._isMounted) {
return;
}
this.props.onMouseUp && this.props.onMouseUp(e);
this.setState({
isPressed: false,
})
}}
onClick={this.props.onClick?.bind(this)}
onDoubleClick={this.props.onDoubleClick?.bind(this)}
onChange={this.props.onChange?.bind(this)}
onInput={this.props.onInput?.bind(this)}
onFocus={this.props.onFocus?.bind(this)}
onBlur={this.props.onBlur?.bind(this)}
onKeyDown={this.props.onKeyDown?.bind(this)}
onKeyUp={this.props.onKeyUp?.bind(this)}
onKeyPress={this.props.onKeyPress?.bind(this)} children={
<><div className="aspect-div" children={
<><svg className="aspect-svg" children={
<><path d="M1.21289 15.3633C1.59082 15.3633 1.90723 15.2314 2.31152 15.0029L12.665 9C13.4297 8.56055 13.7285 8.22656 13.7285 7.68164C13.7285 7.13672 13.4297 6.80273 12.665 6.36328L2.31152 0.369141C1.90723 0.131836 1.59082 0 1.21289 0C0.500977 0 0 0.544922 0 1.41504V13.9482C0 14.8184 0.500977 15.3633 1.21289 15.3633Z"
fill="#1C1C1E" style={{
fill: '#fff',
perspectiveOrigin: '0px 0px',
transformOrigin: '0px 0px'
}} /></>
} fill="none"
viewBox="0 0 14 16"
xmlns="http://www.w3.org/2000/svg" style={{
WebkitMaskRepeatX: 'repeat',
WebkitMaskRepeatY: 'repeat',
blockSize: '10px',
bottom: '0px',
boxSizing: 'border-box',
fill: 'none',
height: '10px',
inlineSize: '9px',
left: 1,
overflowX: 'hidden',
overflowY: 'hidden',
perspectiveOrigin: '4.5px 5px',
position: 'relative',
textDecorationThickness: 'initial',
top: '0px',
transformOrigin: '4.5px 5px',
width: '9px'
}} /></>
} style={{
WebkitBoxAlign: 'center',
WebkitMaskRepeatX: 'repeat',
WebkitMaskRepeatY: 'repeat',
alignItems: 'center',
backgroundColor: '#26292F',
blockSize: '32px',
border: '1px solid #26292F',
borderBlockEndStyle: 'solid',
borderBlockEndWidth: '1px',
borderBlockStartStyle: 'solid',
borderBlockStartWidth: '1px',
borderBottomLeftRadius: '50%',
borderBottomRightRadius: '50%',
borderBottomStyle: 'solid',
borderBottomWidth: '1px',
borderEndEndRadius: '50%',
borderEndStartRadius: '50%',
borderInlineEndStyle: 'solid',
borderInlineEndWidth: '1px',
borderInlineStartStyle: 'solid',
borderInlineStartWidth: '1px',
borderLeftStyle: 'solid',
borderLeftWidth: '1px',
borderRightStyle: 'solid',
borderRightWidth: '1px',
borderStartEndRadius: '50%',
borderStartStartRadius: '50%',
borderTopLeftRadius: '50%',
borderTopRightRadius: '50%',
borderTopStyle: 'solid',
borderTopWidth: '1px',
boxSizing: 'border-box',
display: 'grid',
gridTemplateColumns: '30px',
gridTemplateRows: '30px',
height: '32px',
inlineSize: '32px',
justifyItems: 'center',
perspectiveOrigin: '16px 16px',
textDecorationThickness: 'initial',
transformOrigin: '16px 16px',
transitionDuration: '0.4s',
transitionProperty: 'transform',
width: '32px'
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Watch demo" style={{
color: '#26292F',
fontSize: '16px',
lineHeight: '16px',
marginBlockStart: '4px',
marginTop: '4px'
}} />
<span className="aspect-span" children="4 min" style={{
color: 'rgb(179, 179, 179)',
fontSize: 14
}} /></>
} style={{
WebkitMaskRepeatX: 'repeat',
WebkitMaskRepeatY: 'repeat',
alignItems: 'flex-start',
blockSize: '40px',
boxSizing: 'border-box',
display: 'flex',
flexDirection: 'column',
fontWeight: 600,
lineHeight: '20px',
marginInlineStart: '16px',
marginLeft: '16px',
textAlign: 'left',
textDecorationThickness: 'initial'
}} /></>
} style={{
WebkitBoxAlign: 'center',
WebkitBoxPack: 'center',
alignItems: 'center',
boxSizing: 'border-box',
cursor: 'pointer',
display: 'flex',
fontSize: '18px',
justifyContent: 'center',
lineHeight: '30px',
minBlockSize: 'auto',
minHeight: 'auto',
minInlineSize: 'auto',
textAlign: 'center',
textDecorationThickness: 'initial'
,
...removeUndefinedProperties(this.props.style)}} id={this.props.id} />
)
}
}

handleMouseUp = (e: any) => {
if (!this._isMounted) {
return;
}
this.setState({
isPressed: false,
});
}
}

export namespace WatchDemoButton {
export interface Props {
id?: string;
style?: React.CSSProperties;
onMouseEnter?: (e: any) => any;
onMouseOver?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
onKeyDown?: (e: any) => any;
onKeyUp?: (e: any) => any;
onKeyPress?: (e: any) => any;
}

export class State {
constructor(
public isHovered: boolean = false,
public isPressed: boolean = false,
) {}
}
}