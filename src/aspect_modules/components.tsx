import * as React from "react";
import './components.css';

export namespace Aspect {
  
}

export class AspectLanding extends React.Component<
AspectLanding.Props,
AspectLanding.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: AspectLanding.Props) {
    super(props);
    this.state = new AspectLanding.State();
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(255,255,255,1)',
minHeight: 47,
width: 169.199951171875
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Community" style={{
color: 'rgba(129,129,129,1)',
fontSize: 16,
fontWeight: 500,
letterSpacing: 0.5,
textAlign: 'center'
}} />
<span className="aspect-span" children="Updates" style={{
color: 'rgba(129,129,129,1)',
fontSize: 16,
fontWeight: 500,
letterSpacing: 0.5,
textAlign: 'center'
}} />
<span className="aspect-span" children="Login" style={{
color: 'rgba(129,129,129,1)',
fontSize: 16,
fontWeight: 500,
letterSpacing: 0.5,
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 252
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Try for Free" style={{
color: 'rgba(15,25,71,1)',
fontSize: 16,
fontWeight: 700,
letterSpacing: 0.4000000059604645,
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(73,231,251,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'center',
minHeight: 51,
width: 135
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 414
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
minHeight: 100,
width: 1920
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="The website builder for startups." style={{
color: 'rgba(15,25,71,1)',
fontSize: 112,
fontWeight: 400,
letterSpacing: -1.12,
textAlign: 'center'
}} />
<span className="aspect-span" children="Quickly publish or download custom sites and pages" style={{
color: 'rgba(86,86,86,1)',
fontSize: 28,
fontWeight: 400,
letterSpacing: 0.28,
textAlign: 'left'
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Get Started — It’s Free" style={{
color: 'rgba(15,25,71,1)',
fontSize: 20,
fontWeight: 700,
letterSpacing: 0.4000000059604645,
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(73,231,251,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'center',
minHeight: 72,
width: 261
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 3,
justifyItems: 'center',
width: 1029
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
minHeight: 178.728759765625,
width: 233.15966796875
}} />
<div className="aspect-div" style={{
backgroundColor: 'linear-gradient(rgba(25,252,192,1) 0%,rgba(74,230,252,1) 45.374903082847595%,rgba(59,38,254,1) 100%)',
minHeight: 178.728759765625,
width: 233.15966796875
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'linear-gradient(rgba(230,230,230,1) 0%,rgba(255,255,255,1) 100%)',
minHeight: 25.328125,
width: 21.93505859375
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
minHeight: 90,
width: 91
}} />
<div className="aspect-div" style={{
backgroundColor: 'linear-gradient(rgba(25,252,192,1) 0%,rgba(74,230,252,1) 45.374903082847595%,rgba(59,38,254,1) 100%)',
minHeight: 191.72705078125,
width: 250.22021484375
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
minHeight: 191.72705078125,
width: 250.22021484375
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
minHeight: 609.5,
width: 1583.3740234375
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Trusted by top startups around the world" style={{
color: 'rgba(15,25,71,1)',
fontSize: 28,
fontWeight: 500,
letterSpacing: 0.28,
textAlign: 'center'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
minHeight: 23,
width: 152
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(255,255,255,1)',
minHeight: 11.4456787109375,
width: 11.44384765625
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(255,255,255,1)',
minHeight: 11.4503173828125,
width: 11.44580078125
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(255,255,255,1)',
minHeight: 11.4503173828125,
width: 11.44580078125
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(255,255,255,1)',
minHeight: 11.44580078125,
width: 11.44384765625
}} /></>
} style={{
alignItems: 'flex-end',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gap: 18.9691162109375,
gridAutoFlow: 'column',
justifyContent: 'space-between',
minHeight: 56,
width: 56
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(255,255,255,1)',
minHeight: 32.3399658203125,
width: 147.83984375
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 33,
width: 147.83984375
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(255,255,255,1)',
minHeight: 51.9302978515625,
width: 36.1318359375
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'center',
minHeight: 58.320068359375,
width: 58.3203125
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
minHeight: 34,
width: 107
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 761.16015625
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 48,
justifyItems: 'center',
width: 761.16015625
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
minHeight: 265.3203125,
width: 220.746337890625
}} />
<span className="aspect-span" children="COMPONENTS" style={{
color: 'rgba(15,25,71,1)',
fontSize: 16.980501174926758,
fontWeight: 700,
letterSpacing: 3.3961002349853517,
textAlign: 'center'
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
minHeight: 255.768798828125,
width: 221.8076171875
}} /></>
} style={{
alignItems: 'flex-end',
background: 'rgba(255,255,255,1)',
display: 'grid',
gap: 16.98046875,
gridAutoFlow: 'column',
justifyContent: 'space-between',
minHeight: 352,
width: 498
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 823,
width: 868
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="TOP FEATURE" style={{
color: 'rgba(51,123,246,1)',
fontSize: 20,
fontWeight: 700,
letterSpacing: 6,
textAlign: 'center'
}} />
<span className="aspect-span" children="Create with Powerful Components." style={{
color: 'rgba(15,25,71,1)',
fontSize: 64,
fontWeight: 700,
letterSpacing: 0,
textAlign: 'left'
}} />
<span className="aspect-span" children="Dolere malum est: in crucem qui agitur, beatus esse non potest. Huius, Lyco, oratione locuples, rebus ipsis ielunior. Quo modo autem optimum, si bonum praeterea nullum est? Cur igitur, cum de re conveniat," style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 30,
justifyItems: 'flex-start',
width: 668
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 1668
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Export clean, readable code." style={{
color: 'rgba(15,25,71,1)',
fontSize: 64,
fontWeight: 700,
letterSpacing: 0,
textAlign: 'left'
}} />
<span className="aspect-span" children="Export your website as clean, readable html, css, and javascript. You can also inject code into your Aspect website using the embed element." style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 15,
justifyItems: 'flex-start',
width: 619
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
minHeight: 453,
width: 531
}} /></>
} style={{
alignItems: 'flex-end',
background: 'rgba(36,41,46,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
minHeight: 487,
width: 567
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 823,
width: 961
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 1619
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Add Domain" style={{
color: 'rgba(255,255,255,1)',
fontSize: 17.105802536010742,
fontWeight: 400,
letterSpacing: 0.5131740760803223,
textAlign: 'center'
}} /></>
} style={{
alignItems: 'flex-start',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'center',
minHeight: 477.7406005859375,
width: 358
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 823,
width: 879
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="TOP FEATURE" style={{
color: 'rgba(51,123,246,1)',
fontSize: 20,
fontWeight: 700,
letterSpacing: 6,
textAlign: 'center'
}} />
<span className="aspect-span" children="Publish, export or sync sites." style={{
color: 'rgba(15,25,71,1)',
fontSize: 64,
fontWeight: 700,
letterSpacing: 0,
textAlign: 'left'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" style={{
minHeight: 16.5413818359375,
width: 16.5400390625
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
minHeight: 32,
width: 32
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'center',
minHeight: 60,
width: 59.9365234375
}} />
<span className="aspect-span" children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis" style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 620
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" style={{
minHeight: 28.03570556640625,
width: 26
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 32,
width: 32
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'center',
minHeight: 60,
width: 59.9365234375
}} />
<span className="aspect-span" children="Dolere malum est: in crucem qui agitur, beatus esse non potest. Huius, Lyco, oratione locuples, rebus ipsis ielunior." style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 620
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" style={{
minHeight: 12,
width: 12
}} /></>
} style={{
alignItems: 'flex-start',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
minHeight: 24,
width: 24
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'center',
minHeight: 60,
width: 59.9365234375
}} />
<span className="aspect-span" children="Dolere malum est: in crucem qui agitur, beatus esse non potest. Huius, Lyco, oratione locuples" style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 620
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 30,
justifyItems: 'flex-start',
width: 668
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 1669
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="What our customers are saying" style={{
color: 'rgba(15,25,71,1)',
fontSize: 64,
fontWeight: 400,
letterSpacing: -0.64,
textAlign: 'center'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Illa argumenta propria videamus, cur omnia sint paria peccata.”" style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
minHeight: 64,
width: 64
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Jenny Davdson" style={{
color: 'rgba(15,25,71,1)',
fontSize: 20,
fontWeight: 600,
letterSpacing: 0.4,
textAlign: 'left'
}} />
<span className="aspect-span" children="Front end Developer at Acme Studios" style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
justifyItems: 'flex-start',
width: 335
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 423
}} /></>
} style={{
alignContent: 'center',
background: 'rgba(255,255,255,1)',
display: 'grid',
gap: 29,
justifyItems: 'center',
minHeight: 279,
width: 624
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="“Si quidem, inquit, tollerem, sed relinquo. Quamvis enim depravatae non sint, pravae tamen esse Si quidem, inquit, tollerem, sed.”" style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
minHeight: 64,
width: 64
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Marc" style={{
color: 'rgba(15,25,71,1)',
fontSize: 20,
fontWeight: 600,
letterSpacing: 0.4,
textAlign: 'left'
}} />
<span className="aspect-span" children="Co Founder at XYZ" style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
justifyItems: 'flex-start',
width: 171
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 259
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 29,
justifyItems: 'center',
minHeight: 279,
width: 624
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="“Si quidem, inquit, tollerem, sed relinquo. Quamvis enim depravatae non sint, pravae tamen esse Si quidem, inquit, tollerem, sed.”" style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
minHeight: 64,
width: 64
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Joseph Richards" style={{
color: 'rgba(15,25,71,1)',
fontSize: 20,
fontWeight: 600,
letterSpacing: 0.4,
textAlign: 'left'
}} />
<span className="aspect-span" children="Developer at XYZ" style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
justifyItems: 'flex-start',
width: 158
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 246
}} /></>
} style={{
alignContent: 'center',
background: 'rgba(255,255,255,1)',
display: 'grid',
gap: 29,
justifyItems: 'center',
minHeight: 279,
width: 624
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Illa argumenta propria videamus, cur omnia sint paria peccata.”" style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
minHeight: 64,
width: 64
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Beth" style={{
color: 'rgba(15,25,71,1)',
fontSize: 20,
fontWeight: 600,
letterSpacing: 0.4,
textAlign: 'left'
}} />
<span className="aspect-span" children="Team Lead at XYZ" style={{
color: 'rgba(95,95,95,1)',
fontSize: 20,
fontWeight: 400,
letterSpacing: 0.4,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
justifyItems: 'flex-start',
width: 165
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 253
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 29,
justifyItems: 'center',
minHeight: 279,
width: 624
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 64,
justifyItems: 'flex-end',
width: 1312
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(73,231,251,1)',
minHeight: 15,
width: 15
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(230,230,230,1)',
minHeight: 15,
width: 15
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(230,230,230,1)',
minHeight: 15,
width: 15
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 77
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 103,
justifyItems: 'center',
width: 1312
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'linear-gradient(rgba(140,254,224,1) 0%,rgba(140,254,224,0) 100%)',
minHeight: 482,
width: 1919
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
minHeight: 135.14306640625,
width: 135
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="for free" style={{
color: 'linear-gradient(rgba(25,252,192,1) 0%,rgba(59,38,254,1) 100%)',
fontSize: 88.70748138427734,
fontWeight: 400,
letterSpacing: -0.8870748138427734,
textAlign: 'left'
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
width: 785
}} />
<span className="aspect-span" children="Join over a hundred startups and creators using Aspect, to bring their ideas to life. Create, publish and download custom made sites and pages." style={{
color: 'rgba(255,255,255,1)',
fontSize: 28,
fontWeight: 400,
letterSpacing: 0.28,
textAlign: 'center'
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Get Started — It’s Free" style={{
color: 'rgba(15,25,71,1)',
fontSize: 20,
fontWeight: 700,
letterSpacing: 0.4000000059604645,
textAlign: 'center'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(73,231,251,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'center',
minHeight: 72,
width: 261
}} /></>
} style={{
alignContent: 'flex-end',
display: 'grid',
gap: 56.85693359375,
justifyItems: 'center',
minHeight: 610,
width: 785
}} /></>
} style={{
alignContent: 'flex-start',
background: 'linear-gradient(rgba(19,11,77,1) 0%,rgba(5,14,28,1) 100%)',
display: 'grid',
justifyItems: 'center',
minHeight: 744,
width: 1919
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="ROADMAP" style={{
color: 'rgba(51,123,246,1)',
fontSize: 20,
fontWeight: 700,
letterSpacing: 6,
textAlign: 'center'
}} />
<span className="aspect-span" children="What’s coming next:" style={{
color: 'rgba(15,25,71,1)',
fontSize: 64,
fontWeight: 700,
letterSpacing: 0,
textAlign: 'center'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 24,
justifyItems: 'center',
width: 668
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" style={{
minHeight: 13.5,
width: 18
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
minHeight: 40,
width: 40
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
minHeight: 13.5,
width: 18
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
minHeight: 40,
width: 40
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
minHeight: 13.5,
width: 18
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
minHeight: 40,
width: 40
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
minHeight: 13.5,
width: 18
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
minHeight: 40,
width: 40
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
minHeight: 13.5,
width: 18
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
minHeight: 40,
width: 40
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
minHeight: 13.5,
width: 18
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
minHeight: 40,
width: 40
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
minHeight: 13.5,
width: 18
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-end',
minHeight: 40,
width: 40
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 32,
justifyItems: 'flex-start',
width: 40
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Templates" style={{
color: 'rgba(142,142,142,1)',
fontSize: 32,
fontWeight: 700,
letterSpacing: 0.64,
textAlign: 'left',
textDecoration: 'STRIKETHROUGH'
}} />
<span className="aspect-span" children="Powerful Components" style={{
color: 'rgba(142,142,142,1)',
fontSize: 32,
fontWeight: 700,
letterSpacing: 0.64,
textAlign: 'left',
textDecoration: 'STRIKETHROUGH'
}} />
<span className="aspect-span" children="Offline mode" style={{
color: 'rgba(142,142,142,1)',
fontSize: 32,
fontWeight: 700,
letterSpacing: 0.64,
textAlign: 'left',
textDecoration: 'STRIKETHROUGH'
}} />
<span className="aspect-span" children="Export & Custom domains" style={{
color: 'rgba(142,142,142,1)',
fontSize: 32,
fontWeight: 700,
letterSpacing: 0.64,
textAlign: 'left',
textDecoration: 'STRIKETHROUGH'
}} />
<span className="aspect-span" children="Feature one" style={{
color: 'rgba(69,159,253,1)',
fontSize: 32,
fontWeight: 700,
letterSpacing: 0.64,
textAlign: 'left'
}} />
<span className="aspect-span" children="Feature two" style={{
color: 'rgba(69,159,253,1)',
fontSize: 32,
fontWeight: 700,
letterSpacing: 0.64,
textAlign: 'left'
}} />
<span className="aspect-span" children="Aspect for Teams" style={{
color: 'rgba(15,25,71,1)',
fontSize: 32,
fontWeight: 700,
letterSpacing: 0.64,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 34,
justifyItems: 'flex-start',
width: 392
}} /></>
} style={{
alignItems: 'flex-start',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
minHeight: 568,
width: 460
}} /></>
} style={{
alignContent: 'flex-end',
background: 'rgba(245,245,245,1)',
display: 'grid',
justifyItems: 'center',
minHeight: 971,
width: 1920
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(255,255,255,1)',
minHeight: 47,
width: 169.199951171875
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Aspect" style={{
color: 'rgba(255,255,255,1)',
fontSize: 16,
fontWeight: 600,
letterSpacing: 0.48,
textAlign: 'left'
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Home" style={{
color: 'rgba(255,255,255,1)',
fontSize: 16,
fontWeight: 400,
letterSpacing: 0.48,
textAlign: 'left'
}} />
<span className="aspect-span" children="Layouts" style={{
color: 'rgba(255,255,255,1)',
fontSize: 16,
fontWeight: 400,
letterSpacing: 0.48,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 8,
justifyItems: 'flex-start',
width: 94.08203125
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 24,
justifyItems: 'flex-start',
width: 94.08203125
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Contact" style={{
color: 'rgba(255,255,255,1)',
fontSize: 16,
fontWeight: 600,
letterSpacing: 0.48,
textAlign: 'left'
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Email" style={{
color: 'rgba(255,255,255,1)',
fontSize: 16,
fontWeight: 400,
letterSpacing: 0.48,
textAlign: 'left'
}} />
<span className="aspect-span" children="Twitter" style={{
color: 'rgba(255,255,255,1)',
fontSize: 16,
fontWeight: 400,
letterSpacing: 0.48,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 8,
justifyItems: 'flex-start',
width: 94.08203125
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 24,
justifyItems: 'flex-start',
width: 94.08203125
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="Join the Community" style={{
color: 'rgba(255,255,255,1)',
fontSize: 16,
fontWeight: 600,
letterSpacing: 0.48,
textAlign: 'right'
}} />
<div className="aspect-div" children={
<><div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(225,228,232,1)',
minHeight: 19.5,
width: 24
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 24,
width: 24
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(225,228,232,1)',
minHeight: 12.32421875,
width: 12.32421875
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'center',
minHeight: 24,
width: 24
}} />
<div className="aspect-div" children={
<><div className="aspect-div" style={{
backgroundColor: 'rgba(225,228,232,1)',
minHeight: 22,
width: 22
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'center',
minHeight: 24,
width: 24
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 108
}} /></>
} style={{
alignContent: 'center',
display: 'grid',
gap: 24,
justifyItems: 'flex-end',
width: 166
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 1371
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children="© 2021 Metacode, Inc. dba Aspect. All rights reserved." style={{
color: 'rgba(255,255,255,1)',
fontSize: 14,
fontWeight: 400,
letterSpacing: 0.42,
textAlign: 'left'
}} />
<span className="aspect-span" children="Made in Aspect." style={{
color: 'rgba(255,255,255,1)',
fontSize: 14,
fontWeight: 400,
letterSpacing: 0.42,
textAlign: 'right'
}} /></>
} style={{
alignItems: 'center',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'space-between',
width: 1359
}} /></>
} style={{
alignContent: 'center',
background: 'rgba(15,25,71,1)',
display: 'grid',
gap: 117.68603515625,
justifyItems: 'center',
minHeight: 315,
width: 1920
}} /></>
} style={{
alignContent: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gap: 80,
justifyItems: 'center',
width: 1920
,
...this.props.style}} id={this.props.id} />
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

export namespace AspectLanding {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class ElementAdderFloatingView extends React.Component<
ElementAdderFloatingView.Props,
ElementAdderFloatingView.State
> {
  _isMounted = false;
  get customState() {
    if (this.props.isExpanded === true) {
  return 'expanded';
}
    return 'default';
  }

  constructor(props: ElementAdderFloatingView.Props) {
    super(props);
    this.state = new ElementAdderFloatingView.State();
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
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><HStack children={
<><input className="aspect-input" onChange={this.props.onFilterChange?.bind(this)}
defaultValue={this.props.inputDefaultValue} placeholder="find element"
spellCheck={false}
type="search" style={{
borderColor: 'rgba(0,0,0, 0.1)',
fontSize: 12,
height: 26,
outline: 'none',
padding: '0 8px',
width: '100%'
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.05)',
gridTemplateColumns: '1fr',
minHeight: 40,
padding: 8,
width: '100%'
}} />
<ScrollableList children={this.props.children} style={{
height: 200,
minHeight: '',
padding: 8,
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
gap: 0,
overflow: 'hidden',
width: 224
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<HStack  /></>
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
...this.props.style}} id={this.props.id} />
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

export namespace ElementAdderFloatingView {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
children?: React.ReactNode;
onFilterChange?: (e: any) => any;
title?: string;
isExpanded?: boolean;
inputDefaultValue?: string;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class ElementAdderItem extends React.Component<
ElementAdderItem.Props,
ElementAdderItem.State
> {
  _isMounted = false;
  get customState() {
    if (this.props.isSelected === true) {
  return 'selected';
}
    return 'default';
  }

  constructor(props: ElementAdderItem.Props) {
    super(props);
    this.state = new ElementAdderItem.State();
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
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap',
width: '100%'
}} /></>
} style={{
backgroundColor: '#007cf8',
color: '#fff',
fontSize: 12,
gridTemplateColumns: 'auto 1fr',
minHeight: 32,
padding: '8px 12px',
width: '100%'
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
fontWeight: 500,
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap',
width: '100%'
}} /></>
} style={{
fontSize: 12,
gap: 12,
gridTemplateColumns: 'auto 1fr',
minHeight: 32,
padding: '8px 12px',
width: '100%'
,
...this.props.style}} id={this.props.id} />
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

export namespace ElementAdderItem {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
title?: string;
isSelected?: boolean;
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
    if (this.props.isCollapsed === true) {
  return 'collapsed';
}
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
      case 'collapsed':
return (
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} style={{
height: 36,
width: 224
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><HStack children={
<><Text text="elements" style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} /></>
} style={{
height: 32,
padding: '0 16px'
}} />
<ScrollableList children={this.props.children} style={{
backgroundColor: '#fff',
height: 148,
minHeight: '',
padding: 8,
position: 'relative',
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
gap: 0,
overflow: 'hidden',
width: 224
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
isCollapsed?: boolean;
children?: React.ReactNode;
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
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
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
minHeight: '',
minWidth: 160,
paddingLeft: 10,
paddingRight: '',
width: '100%'
,
...this.props.style}} id={this.props.id} />
)
case 'hovered':
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
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
minHeight: '',
minWidth: 160,
paddingLeft: 10,
paddingRight: '',
width: '100%'
,
...this.props.style}} id={this.props.id} />
)
case 'selected+hover':
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
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
minHeight: '',
minWidth: 160,
paddingLeft: 10,
paddingRight: '',
width: '100%'
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
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
minHeight: '',
minWidth: 160,
overflow: 'hidden',
paddingLeft: 10,
paddingRight: '',
width: '100%'
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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

export class ExportButtonDropdown extends React.Component<
ExportButtonDropdown.Props,
ExportButtonDropdown.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: ExportButtonDropdown.Props) {
    super(props);
    this.state = new ExportButtonDropdown.State();
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
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><SimpleButton onClick={this.props.onZipExportClick?.bind(this)}
children={
<><Text text="Export React as .zip" /></>
} style={{
padding: '10px 12px',
width: '100%'
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(0,0,0,0.07)',
height: 1
}} />
<SimpleButton onClick={this.props.onQuickExportClick?.bind(this)}
children={
<><Text text="Quick export React directly into your codebase " /></>
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
...this.props.style}} id={this.props.id} />
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

export namespace ExportButtonDropdown {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
onZipExportClick?: (e: any) => any;
onQuickExportClick?: (e: any) => any;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class FigmaAccessTokenView extends React.Component<
FigmaAccessTokenView.Props,
FigmaAccessTokenView.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: FigmaAccessTokenView.Props) {
    super(props);
    this.state = new FigmaAccessTokenView.State();
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><input className="aspect-input" onChange={this.props.inputOnChange?.bind(this)} placeholder="Figma access token" style={{
fontSize: 12,
height: 36,
padding: '0 16px',
width: '100%'
}} />
<HStack children={
<><SimpleButton onClick={this.props.cancelOnClick?.bind(this)}
children={
<><span className="aspect-span" children="Cancel" style={{
color: 'rgba(0,0,0,1)',
fontSize: 12,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
border: '1px solid #ddd',
height: 32,
padding: '0 16px'
}} />
<SimpleButton onClick={this.props.saveOnClick?.bind(this)}
children={
<><span className="aspect-span" children="Save" style={{
color: 'rgba(0,0,0,1)',
fontSize: 12,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'left'
}} /></>
} style={{
border: '1px solid #ddd',
height: 32,
padding: '0 16px'
}} /></>
} /></>
} style={{
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gap: 12,
justifyItems: 'right',
padding: 32,
width: 360
,
...this.props.style}} id={this.props.id} />
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

export namespace FigmaAccessTokenView {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
inputOnChange?: (e: any) => any;
saveOnClick?: (e: any) => any;
cancelOnClick?: (e: any) => any;
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
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
...this.props.style}} id={this.props.id} />
)
default:
return (
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
...this.props.style}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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

export class FigmaFileSyncSelection extends React.Component<
FigmaFileSyncSelection.Props,
FigmaFileSyncSelection.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: FigmaFileSyncSelection.Props) {
    super(props);
    this.state = new FigmaFileSyncSelection.State();
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><div className="aspect-div" children={
<><span className="aspect-span" children="Figma files" style={{
color: 'rgba(0,0,0,1)',
fontSize: 10,
fontWeight: 500,
letterSpacing: 0.2,
textAlign: 'left'
}} />
<span className="aspect-span" children="Select files to sync" style={{
color: 'rgba(102,102,102,1)',
fontSize: 11,
fontWeight: 400,
letterSpacing: 0.11,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gap: 5,
justifyItems: 'flex-start',
minHeight: 60,
width: 297
}} />
<div className="aspect-div" style={{
backgroundColor: 'rgba(255,255,255,1)',
minHeight: 223,
width: 297
}} /></>
} style={{
alignContent: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gap: 4,
justifyItems: 'flex-start',
minHeight: 295,
width: 297
,
...this.props.style}} id={this.props.id} />
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

export namespace FigmaFileSyncSelection {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class FigmaFileSyncView extends React.Component<
FigmaFileSyncView.Props,
FigmaFileSyncView.State
> {
  _isMounted = false;
  get customState() {
    if (this.props.isNestedList === true) {
  return 'nested';
}
    return 'default';
  }

  constructor(props: FigmaFileSyncView.Props) {
    super(props);
    this.state = new FigmaFileSyncView.State();
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
      case 'nested':
return (
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><div className="aspect-div" children={
<><SimpleButton children={this.props.headerBackIcon} style={{
justifyContent: 'center'
}} />
<div className="aspect-div" children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 10,
fontWeight: 500,
letterSpacing: 0.2,
textAlign: 'left',
textTransform: 'uppercase'
}} />
<span className="aspect-span" children={this.props.detail} style={{
color: 'rgba(102,102,102,1)',
fontSize: 12,
fontWeight: 400,
textAlign: 'left'
}} /></>
} style={{
display: 'grid',
gap: 4
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
boxShadow: '0 1px 0 0 rgba(0,0,0,0.07)',
display: 'grid',
gap: 12,
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 60,
padding: '0 20px',
width: 297,
zIndex: 1
}} />
<div className="aspect-div" children={this.props.listItemViews} style={{
backgroundColor: 'rgba(255,255,255,1)',
marginTop: 4,
width: 297
}} /></>
} style={{
alignContent: 'flex-start',
backgroundColor: 'rgba(255,255,255,1)',
boxShadow: '0 0 0 1px rgba(0,0,0,0.07)',
display: 'grid',
gridTemplateRows: 'auto 1fr',
height: 280,
justifyItems: 'flex-start',
paddingBottom: 8,
width: 297
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><div className="aspect-div" children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 10,
fontWeight: 500,
letterSpacing: 0.2,
textAlign: 'left',
textTransform: 'uppercase'
}} />
<span className="aspect-span" children={this.props.detail} style={{
color: 'rgba(102,102,102,1)',
fontSize: 12,
fontWeight: 400,
textAlign: 'left'
}} /></>
} style={{
alignContent: 'center',
backgroundColor: 'rgba(255,255,255,1)',
boxShadow: '0 1px 0 0 rgba(0,0,0,0.07)',
display: 'grid',
gap: 5,
justifyItems: 'flex-start',
minHeight: 60,
padding: '0 20px',
width: 297,
zIndex: 1
}} />
<div className="aspect-div" children={this.props.listItemViews} style={{
backgroundColor: 'rgba(255,255,255,1)',
marginTop: 4,
padding: '0 8px',
width: 297
}} /></>
} style={{
alignContent: 'flex-start',
backgroundColor: 'rgba(255,255,255,1)',
boxShadow: '0 0 0 1px rgba(0,0,0,0.07)',
display: 'grid',
gridTemplateRows: 'auto 1fr',
height: 280,
justifyItems: 'flex-start',
paddingBottom: 8,
width: 297
,
...this.props.style}} id={this.props.id} />
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

export namespace FigmaFileSyncView {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
listItemViews?: React.ReactNode;
title?: string;
detail?: string;
isNestedList?: boolean;
headerBackIcon?: React.ReactNode;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class FigmaImportSettingsView extends React.Component<
FigmaImportSettingsView.Props,
FigmaImportSettingsView.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: FigmaImportSettingsView.Props) {
    super(props);
    this.state = new FigmaImportSettingsView.State();
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
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><VStack children={
<><h1 className="aspect-h1" children="Figma Import Settings" style={{
fontSize: 17
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
padding: 16
}} />
<VStack children={
<><SimpleButton onClick={this.props.accessTokenOnClick?.bind(this)}
children={
<><span className="aspect-span" children="Connect to Figma" style={{
fontSize: 13
}} /></>
} style={{
minHeight: 36,
padding: '0 16px'
}} />
<SimpleButton onClick={this.props.framesOnClick?.bind(this)}
children={
<><span className="aspect-span" children="Select frames to import" style={{
fontSize: 13
}} /></>
} style={{
minHeight: 36,
padding: '0 16px'
}} /></>
} style={{
gap: 0
}} /></>
} style={{
gap: 8,
padding: '16px 32px',
paddingBottom: 32,
width: 340
,
...this.props.style}} id={this.props.id} />
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

export namespace FigmaImportSettingsView {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
accessTokenOnClick?: (e: any) => any;
framesOnClick?: (e: any) => any;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class FigmaPluginErrorView extends React.Component<
FigmaPluginErrorView.Props,
FigmaPluginErrorView.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: FigmaPluginErrorView.Props) {
    super(props);
    this.state = new FigmaPluginErrorView.State();
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
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><span className="aspect-span" children={this.props.message} style={{
color: '#BA3D3D',
fontSize: 12,
fontWeight: 500
}} /></>
} style={{
backgroundColor: '#fff',
border: '1px solid #BA3D3D',
borderRadius: 4,
padding: '8px 12px'
,
...this.props.style}} id={this.props.id} />
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

export namespace FigmaPluginErrorView {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
message?: string;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class FigmaPluginItem extends React.Component<
FigmaPluginItem.Props,
FigmaPluginItem.State
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

  constructor(props: FigmaPluginItem.Props) {
    super(props);
    this.state = new FigmaPluginItem.State();
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><div className="aspect-div" children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 12,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} />
<span className="aspect-span" children={this.props.detail} style={{
color: 'rgba(102,102,102,1)',
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
<><span className="aspect-span" children="Go to frame" style={{
color: 'rgba(0,0,0,1)',
fontSize: 11,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} />
<SimpleButton style={{
justifyContent: 'center'
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
padding: '0 16px'
,
...this.props.style}} id={this.props.id} />
)
case 'selected':
return (
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
<SimpleButton onClick={this.props.accessoryIconOnClick?.bind(this)}
children={this.props.accessoryIcon} style={{
justifyContent: 'center'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: '#06f',
display: 'grid',
gap: 16,
gridAutoFlow: 'column',
justifyContent: 'space-between',
minHeight: 50,
padding: '0 16px'
,
...this.props.style}} id={this.props.id} />
)
case 'selected+hovered':
return (
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
<><span className="aspect-span" children="Go to frame" style={{
color: 'white',
fontSize: 11,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} />
<SimpleButton style={{
justifyContent: 'center'
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
padding: '0 16px'
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><div className="aspect-div" children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 12,
fontWeight: 400,
letterSpacing: 0,
textAlign: 'left'
}} />
<span className="aspect-span" children={this.props.detail} style={{
color: 'rgba(102,102,102,1)',
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
<SimpleButton onClick={this.props.accessoryIconOnClick?.bind(this)}
children={this.props.accessoryIcon} style={{
justifyContent: 'center'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gap: 16,
gridAutoFlow: 'column',
justifyContent: 'space-between',
minHeight: 50,
padding: '0 16px'
,
...this.props.style}} id={this.props.id} />
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

export namespace FigmaPluginItem {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
title?: string;
detail?: string;
accessoryIcon?: React.ReactNode;
accessoryIconOnClick?: (e: any) => any;
isSelected?: boolean;
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
padding: 24,
width: 276
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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

export class FigmaPluginView extends React.Component<
FigmaPluginView.Props,
FigmaPluginView.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: FigmaPluginView.Props) {
    super(props);
    this.state = new FigmaPluginView.State();
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><HStack children={
<><span className="aspect-span" children={this.props.title} style={{
color: 'rgba(0,0,0,1)',
fontSize: 10,
fontWeight: 600,
letterSpacing: 0,
textAlign: 'right'
}} />
<SimpleButton onClick={this.props.signOutOnClick?.bind(this)}
children={
<><span className="aspect-span" children="Sign Out" style={{
color: 'rgba(0,0,0,1)',
fontSize: 12,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'right'
}} /></>
} style={{
cursor: 'default',
padding: '0 12px'
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
<ScrollableList children={this.props.itemsView} style={{
position: 'relative',
width: '100%'
}} />
<div className="aspect-div" children={
<><SimpleButton onClick={this.props.secondaryActionOnClick?.bind(this)}
children={
<><span className="aspect-span" children={this.props.secondaryActionTitle} style={{
color: 'rgba(0,0,0,1)',
fontSize: 12,
fontWeight: 500,
letterSpacing: 0,
textAlign: 'right'
}} /></>
} style={{
cursor: 'default',
minHeight: 28,
padding: '0 12px'
}} />
<div className="aspect-div" children={
<><SimpleButton onClick={this.props.callToActionOnClick?.bind(this)}
children={
<><span className="aspect-span" children={this.props.callToAction} style={{
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
width: '100%'
}} /></>
} style={{
alignContent: 'center',
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridTemplateRows: 'auto 1fr auto',
height: 240,
justifyItems: 'flex-start',
width: 306
,
...this.props.style}} id={this.props.id} />
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

export namespace FigmaPluginView {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
itemsView?: React.ReactNode;
title?: string;
callToActionOnClick?: (e: any) => any;
callToAction?: string;
secondaryActionTitle?: string;
secondaryActionOnClick?: (e: any) => any;
signOutOnClick?: (e: any) => any;
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
    if (this.props.isExpanded === true) {
  return 'expanded';
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
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><HStack children={
<><Text text={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<input className="aspect-input" onChange={this.props.inputOnChange?.bind(this)}
defaultValue={this.props.inputDefaultValue} placeholder="filter"
spellCheck={false}
type="search" style={{
borderColor: 'rgba(0,0,0, 0.1)',
fontSize: 12,
height: 22,
outline: 'none',
padding: '0 8px',
width: '100%'
}} />
<SimpleButton onClick={this.props.accessoryButtonOnClick?.bind(this)}
children={this.props.accessoryButtonIcon} style={{
justifyContent: 'center',
minHeight: 24
}} /></>
} style={{
gap: 14,
gridTemplateColumns: '1fr',
minHeight: 36,
padding: '0 8px 0 16px',
width: '100%'
}} />
<ScrollableList children={this.props.children} style={{
maxHeight: 160,
minHeight: '',
padding: 8,
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
gap: 0,
overflow: 'hidden',
width: 224
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<Text text={this.props.detail} style={{
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
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
inputOnChange?: (e: any) => any;
title?: string;
children?: React.ReactNode;
isExpanded?: boolean;
accessoryButtonOnClick?: (e: any) => any;
accessoryButtonIcon?: React.ReactNode;
detail?: string;
inputDefaultValue?: string;
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={this.props.children} style={{
alignItems: 'center',
boxSizing: 'border-box',
display: 'grid',
gap: '8px',
gridAutoFlow: 'column',
justifyContent: 'flex-start'
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><LandingPageRow children={
<><VStack children={
<><VStack children={
<><VStack children={
<><h1 className="aspect-h1" children="Build UI, fast" style={{
fontSize: 48
}} />
<Text text="Create React components visually. Sync to your codebase." style={{
fontSize: 21
}} />
<Text text="Aspect was built using Aspect." style={{
color: 'rgb(102, 110, 117)',
fontSize: 16,
fontWeight: 500
}} /></>
} style={{
gap: 12,
justifyItems: 'center',
textAlign: 'center'
}} />
<HStack children={
<><LandingPageCallToActionButton onClick={this.props.onSignupClick?.bind(this)} text="Get started for free" style={{
padding: '0 20px'
}} /></>
} style={{
gap: 12,
justifyContent: 'center'
}} /></>
} style={{
gap: 24
}} />
<div className="aspect-div" children={
<><img className="aspect-img" src="https://dev.aspect.app/static/media/aspect-video-thumbnail.jpg" style={{
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
position: 'relative'
}} /></>
} style={{
gap: 36
}} /></>
} />
<LandingPageHeader children={
<><HStack children={
<><a className="aspect-a" children={this.props.headerLogoView} href="https://dev.aspect.app"
target="" /></>
} style={{
height: '100%'
}} />
<HStack children={
<><LandingPageHeaderButton onClick={this.props.onLoginClick?.bind(this)} text="Log in" />
<LandingPageCallToActionButton onClick={this.props.onSignupClick?.bind(this)} text="Try Aspect Free" /></>
} style={{
gap: 12,
height: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
position: 'fixed',
top: 0,
width: '100%'
}} />
<LandingPageRow children={
<><span className="aspect-span" children="© Metacode, Inc. dba Aspect" style={{
color: 'rgb(102, 110, 117)'
}} /></>
} style={{
padding: 80
}} /></>
} style={{
gap: 0,
maxWidth: '100%',
minWidth: '100%',
paddingTop: 'calc(72px + 24px)',
position: 'relative',
width: 1000
,
...this.props.style}} id={this.props.id} />
)
case 'mobile':
return (
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><LandingPageRow children={
<><VStack children={
<><VStack children={
<><VStack children={
<><h1 className="aspect-h1" children="Build UI, fast" style={{
fontSize: 44
}} />
<Text text="Create React components visually. Sync to your codebase." style={{
fontSize: 18,
width: 320
}} />
<Text text="Aspect was built using Aspect." style={{
color: 'rgb(102, 110, 117)',
fontSize: 16,
fontWeight: 500
}} /></>
} style={{
gap: 12,
justifyItems: 'center',
textAlign: 'center'
}} />
<HStack children={
<><LandingPageCallToActionButton onClick={this.props.onSignupClick?.bind(this)} text="Get started for free" style={{
padding: '0 20px'
}} /></>
} style={{
gap: 12,
justifyContent: 'center'
}} /></>
} style={{
gap: 24
}} />
<div className="aspect-div" children={
<><img className="aspect-img" src="https://dev.aspect.app/static/media/aspect-video-thumbnail.jpg" style={{
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
position: 'relative'
}} /></>
} style={{
gap: 36
}} /></>
} style={{
padding: '0 24px'
}} />
<LandingPageHeader children={
<><HStack children={
<><a className="aspect-a" children={this.props.headerLogoView} href="https://dev.aspect.app"
target="" /></>
} style={{
height: '100%'
}} />
<HStack children={
<><LandingPageCallToActionButton onClick={this.props.onSignupClick?.bind(this)} text="Sign In" /></>
} style={{
gap: 12,
height: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
padding: '0 24px',
position: 'absolute',
top: 0,
width: '100%'
}} />
<LandingPageRow children={
<><span className="aspect-span" children="© Metacode, Inc. dba Aspect" style={{
color: 'rgb(102, 110, 117)'
}} /></>
} style={{
padding: '40px 24px'
}} /></>
} style={{
gap: 0,
maxWidth: '100%',
minWidth: '100%',
paddingTop: 'calc(72px + 24px)',
position: 'relative',
width: 380
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><LandingPageRow children={
<><VStack children={
<><VStack children={
<><VStack children={
<><h1 className="aspect-h1" children="Build UI, fast" style={{
fontSize: 48
}} />
<Text text="Create  React components visually. Sync to your codebase." style={{
fontSize: 21
}} />
<Text text="Aspect was built using Aspect." style={{
color: 'rgb(102, 110, 117)',
fontSize: 16,
fontWeight: 500
}} /></>
} style={{
gap: 12,
justifyItems: 'center',
textAlign: 'center'
}} />
<HStack children={
<><LandingPageCallToActionButton onClick={this.props.onSignupClick?.bind(this)} text="Get started for free" style={{
padding: '0 20px'
}} /></>
} style={{
gap: 12,
justifyContent: 'center'
}} /></>
} style={{
gap: 24
}} />
<div className="aspect-div" children={
<><img className="aspect-img" src="https://dev.aspect.app/static/media/aspect-video-thumbnail.jpg" style={{
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
position: 'relative'
}} /></>
} style={{
gap: 24
}} /></>
} />
<LandingPageHeader children={
<><HStack children={
<><a className="aspect-a" children={this.props.headerLogoView} href="https://dev.aspect.app"
target="" /></>
} style={{
height: '100%'
}} />
<HStack children={
<><LandingPageHeaderButton onClick={this.props.onLoginClick?.bind(this)} text="Log in" />
<LandingPageCallToActionButton onClick={this.props.onSignupClick?.bind(this)} text="Use Aspect Free" /></>
} style={{
gap: 12,
height: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
position: 'fixed',
top: 0,
width: '100%'
}} />
<LandingPageRow children={
<><span className="aspect-span" children="© Metacode, Inc. dba Aspect" style={{
color: 'rgb(102, 110, 117)'
}} /></>
} style={{
padding: 80
}} /></>
} style={{
gap: 0,
maxWidth: '100%',
minWidth: '100%',
paddingTop: 'calc(72px + 24px)',
position: 'relative',
width: 1000
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
headerLogoView?: React.ReactNode;
onLoginClick?: (e: any) => any;
onSignupClick?: (e: any) => any;
playView?: React.ReactNode;
playViewOnClick?: (e: any) => any;
size?: string;
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
    if (this.state.isPressed === true) {
  return 'pressed';
} else if (this.state.isHovered === true) {
  return 'hovered';
}
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
      case 'hovered':
return (
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
fontSize: 15,
fontWeight: 600,
userSelect: 'none'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgb(248,248,248)',
border: '1px solid rgba(230,230,230)',
boxSizing: 'border-box',
cursor: 'pointer',
display: 'grid',
gap: '8px',
gridAutoFlow: 'column',
height: 42,
justifyContent: 'flex-start',
padding: '0 16px'
,
...this.props.style}} id={this.props.id} />
)
case 'pressed':
return (
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
fontSize: 15,
fontWeight: 600
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgb(240,240,240)',
border: '1px solid rgba(230,230,230)',
boxSizing: 'border-box',
cursor: 'pointer',
display: 'grid',
gap: '8px',
gridAutoFlow: 'column',
height: 42,
justifyContent: 'flex-start',
padding: '0 16px',
userSelect: 'none'
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
fontSize: 15,
fontWeight: 600
}} /></>
} style={{
alignItems: 'center',
backgroundColor: '#fff',
border: '1px solid rgba(230,230,230)',
boxShadow: '0 0 1px 1px rgba(0,0,0,0.02)',
boxSizing: 'border-box',
cursor: 'pointer',
display: 'grid',
gap: '8px',
gridAutoFlow: 'column',
height: 42,
justifyContent: 'flex-start',
padding: '0 16px',
userSelect: 'none'
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
      case 'medium':
return (
null
)
case 'small':
return (
null
)
default:
return (
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><HStack children={this.props.children} style={{
justifyContent: 'space-between',
maxWidth: 1200,
width: '100%'
}} /></>
} style={{
display: 'flex',
justifyContent: 'center',
minHeight: 72,
padding: '0 80px'
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<SimpleButton onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.text} style={{
color: 'rgb(102, 110, 117)',
fontSize: 14,
fontWeight: 500
}} /></>
} style={{
cursor: 'pointer',
height: 32,
padding: '0 10px',
userSelect: 'none',
width: 'fit-content'
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><VStack children={this.props.children} style={{
maxWidth: 1200
}} /></>
} style={{
display: 'flex',
justifyContent: 'center',
padding: '0 80px'
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
...this.props.style}} id={this.props.id} />
)
default:
return (
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><HStack children={
<><h1 className="aspect-h1" children={this.props.title} style={{
fontSize: 17
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'space-between',
marginBottom: 8,
padding: 16,
width: '100%'
}} />
<HStack children={
<><Text text="Project ID" style={{
fontWeight: 500
}} />
<Text text={this.props.projectId} style={{
border: '1px solid #ddd',
fontSize: 13,
padding: '6px 10px'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<HStack children={
<><Text text="API Key" style={{
fontWeight: 500
}} />
<Text text="API key copied!" style={{
border: '1px solid #ddd',
fontSize: 13,
padding: '6px 10px'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<SimpleButton onClick={this.props.onCreateApiKeyClick?.bind(this)}
children={
<><Text text="Generate new API key" style={{
minHeight: 0
}} /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '6px 12px',
width: 'fit-content'
}} />
<div className="aspect-div" children={
<><Text text="Export directly into your codebase using the API key and " />
<a className="aspect-a" children={
<><Text text="Aspect CLI" /></>
} href="https://www.npmjs.com/package/@metacode-inc/aspect"
target="_blank" /></>
} style={{
padding: '20px 0'
}} />
<SimpleButton onClick={this.props.didClickSignOut?.bind(this)}
children={
<><Text text="Sign Out" style={{
minHeight: 0
}} /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '6px 12px',
width: 'fit-content'
}} /></>
} style={{
fontSize: 13,
gap: 14,
minHeight: 166,
minWidth: 400,
padding: 40,
width: '100%'
,
...this.props.style}} id={this.props.id} />
)
case 'copiedProjectId':
return (
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><HStack children={
<><h1 className="aspect-h1" children={this.props.title} style={{
fontSize: 17
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'space-between',
marginBottom: 8,
padding: 16,
width: '100%'
}} />
<HStack children={
<><Text text="Project ID" style={{
fontWeight: 500
}} />
<Text text="Project ID copied!" style={{
border: '1px solid #ddd',
fontSize: 13,
padding: '6px 10px'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<HStack children={
<><Text text="API Key" style={{
fontWeight: 500
}} />
<SimpleButton onClick={this.props.onApiKeyClick?.bind(this)}
children={
<><Text text={this.props.apiKey} style={{
fontSize: 13
}} /></>
} style={{
border: '1px solid #ddd',
padding: '6px 10px',
width: 'fit-content'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<SimpleButton onClick={this.props.onCreateApiKeyClick?.bind(this)}
children={
<><Text text="Generate new API key" style={{
minHeight: 0
}} /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '6px 12px',
width: 'fit-content'
}} />
<div className="aspect-div" children={
<><Text text="Export directly into your codebase using the API key and " />
<a className="aspect-a" children={
<><Text text="Aspect CLI" /></>
} href="https://www.npmjs.com/package/@metacode-inc/aspect"
target="_blank" /></>
} style={{
padding: '20px 0'
}} />
<SimpleButton onClick={this.props.didClickSignOut?.bind(this)}
children={
<><Text text="Sign Out" style={{
minHeight: 0
}} /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '6px 12px',
width: 'fit-content'
}} /></>
} style={{
fontSize: 13,
gap: 14,
minHeight: 166,
minWidth: 400,
padding: 40,
width: '100%'
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><HStack children={
<><h1 className="aspect-h1" children={this.props.title} style={{
fontSize: 17
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
justifyContent: 'space-between',
marginBottom: 8,
padding: 16,
width: '100%'
}} />
<HStack children={
<><Text text="Project ID" style={{
fontWeight: 500
}} />
<SimpleButton onClick={this.props.onProjectIdClick?.bind(this)}
children={
<><Text text={this.props.projectId} style={{
fontSize: 13
}} /></>
} style={{
border: '1px solid #ddd',
padding: '6px 10px',
width: 'fit-content'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<HStack children={
<><Text text="API Key" style={{
fontWeight: 500
}} />
<SimpleButton onClick={this.props.onApiKeyClick?.bind(this)}
children={
<><Text text={this.props.apiKey} style={{
fontSize: 13
}} /></>
} style={{
border: '1px solid #ddd',
padding: '6px 10px',
width: 'fit-content'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<SimpleButton onClick={this.props.onCreateApiKeyClick?.bind(this)}
children={
<><Text text="Generate new API key" style={{
minHeight: 0
}} /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '6px 12px',
width: 'fit-content'
}} />
<div className="aspect-div" children={
<><Text text="Export directly into your codebase using the API key and " />
<a className="aspect-a" children={
<><Text text="Aspect CLI" /></>
} href="https://www.npmjs.com/package/@metacode-inc/aspect"
target="_blank" /></>
} style={{
padding: '20px 0'
}} />
<SimpleButton onClick={this.props.didClickSignOut?.bind(this)}
children={
<><Text text="Sign Out" style={{
minHeight: 0
}} /></>
} style={{
border: '1px solid #ddd',
justifySelf: 'end',
padding: '6px 12px',
width: 'fit-content'
}} /></>
} style={{
fontSize: 13,
gap: 14,
minHeight: 166,
minWidth: 400,
padding: 40,
userSelect: 'auto',
width: '100%'
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
...this.props.style}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
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
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
    if (this.props.isExpanded === true) {
  return 'expanded';
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
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><HStack children={
<><Text text={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<input className="aspect-input" onChange={this.props.inputOnChange?.bind(this)} placeholder="filter"
spellCheck={false}
type="search" style={{
borderColor: 'rgba(0,0,0, 0.1)',
fontSize: 12,
height: 22,
outline: 'none',
padding: '0 8px',
width: '100%'
}} /></>
} style={{
boxShadow: '0 1px 0 0 rgba(0,0,0,0.07)',
gap: 14,
gridTemplateColumns: '1fr',
minHeight: 36,
padding: '0 16px',
width: '100%',
zIndex: 1
}} />
<ScrollableList children={this.props.children} style={{
maxHeight: 160,
minHeight: '',
padding: '4px 0',
width: '100%'
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
gap: 0,
overflow: 'hidden',
paddingBottom: 12,
width: 224
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
fontSize: 10,
fontWeight: 600,
textTransform: 'uppercase'
}} />
<HStack children={this.props.accessoryView} /></>
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
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
title?: string;
accessoryView?: React.ReactNode;
isExpanded?: boolean;
children?: React.ReactNode;
inputOnChange?: (e: any) => any;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class ScrollableList extends React.Component<
ScrollableList.Props,
ScrollableList.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: ScrollableList.Props) {
    super(props);
    this.state = new ScrollableList.State();
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><div className="aspect-div" children={this.props.children} style={{
width: '100%'
}} /></>
} style={{
overflow: 'auto'
,
...this.props.style}} id={this.props.id} />
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

export namespace ScrollableList {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
children?: React.ReactNode;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class SidebarItem extends React.Component<
SidebarItem.Props,
SidebarItem.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: SidebarItem.Props) {
    super(props);
    this.state = new SidebarItem.State();
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
backgroundColor: 'rgba(255,255,255,1)',
display: 'grid',
gridAutoFlow: 'column',
justifyContent: 'flex-start',
minHeight: 30,
width: 211
,
...this.props.style}} id={this.props.id} />
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

export namespace SidebarItem {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<button className="aspect-button" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
fontSize: 14
}} /></>
} style={{
backgroundColor: '#fff',
border: 'none',
boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
height: 40,
padding: '0 14px'
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<input className="aspect-input" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} placeholder={this.props.placeholder} style={{
border: 'none',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.07)',
fontSize: 14,
height: 40,
padding: '0 14px'
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
placeholder?: string;
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
    if (this.props.isPasswordSignIn === true) {
  return 'passwordSignIn';
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
      case 'passwordSignIn':
return (
<form className="aspect-form" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><VStack children={
<><h1 className="aspect-h1" children={this.props.title} style={{
textAlign: 'center'
}} />
<VStack children={
<><SignInInput placeholder="Email" />
<SignInInput placeholder="Password" /></>
} style={{
gap: 10
}} />
<SignInWithPasswordButton text={this.props.callToAction} /></>
} style={{
gap: 24,
padding: '40px 40px 52px',
width: 400
}} /></>
}
onSubmit={this.props.onPasswordSignInSubmit?.bind(this)} style={this.props.style} id={this.props.id} />
)
default:
return (
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><h1 className="aspect-h1" children="Sign In" style={{
textAlign: 'center'
}} />
<VStack children={
<><SignInButton text="Use email and password" />
<SignInButton text="Continue with Google" /></>
} style={{
gap: 10
}} /></>
} style={{
gap: 24,
padding: '40px 40px 52px',
width: 400
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
title?: string;
callToAction?: string;
isPasswordSignIn?: boolean;
onPasswordSignInSubmit?: (e: any) => any;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class SignInWithPasswordButton extends React.Component<
SignInWithPasswordButton.Props,
SignInWithPasswordButton.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: SignInWithPasswordButton.Props) {
    super(props);
    this.state = new SignInWithPasswordButton.State();
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
<button className="aspect-button" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><span className="aspect-span" children={this.props.text} style={{
color: '#fff',
fontSize: 14,
fontWeight: 500
}} /></>
} style={{
backgroundColor: '#06f',
border: 'none',
height: 40,
padding: '0 14px'
,
...this.props.style}} id={this.props.id} />
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

export namespace SignInWithPasswordButton {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
text?: string;
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
    if (this.state.isPressed === true) {
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
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={this.props.children} style={{
backgroundColor: 'rgba(0, 0, 0, 0.04)',
minHeight: 28,
minWidth: 28
,
...this.props.style}} id={this.props.id} />
)
case 'pressed':
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={this.props.children} style={{
backgroundColor: 'rgba(0, 0, 0, 0.07)',
minHeight: 28,
minWidth: 28
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={this.props.children} style={{
minHeight: 28,
minWidth: 28
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
children?: React.ReactNode;
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
<VStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><VStack  />
<LandingPageHeader  /></>
} style={this.props.style} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class Text extends React.Component<
Text.Props,
Text.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: Text.Props) {
    super(props);
    this.state = new Text.State();
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
<span className="aspect-span" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={this.props.text} style={this.props.style} id={this.props.id} />
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

export namespace Text {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
text?: string;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}

export class View1 extends React.Component<
View1.Props,
View1.State
> {
  _isMounted = false;
  get customState() {
    
    return 'default';
  }

  constructor(props: View1.Props) {
    super(props);
    this.state = new View1.State();
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
null
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

export namespace View1 {
  export interface Props {
    id?: string;
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
      case 'selected':
return (
null
)
case 'hovered':
return (
null
)
default:
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
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
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
title?: string;
accessoryView?: React.ReactNode;
isSelected?: boolean;
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
  return 'edit-text-value';
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
      case 'edit-text-value':
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} />
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
minWidth: 200,
paddingLeft: 8,
paddingRight: 8,
width: '100%'
,
...this.props.style}} id={this.props.id} />
)
default:
return (
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
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
minWidth: 200,
paddingLeft: 8,
width: '100%'
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
    if (false) {
  return 'State 1';
}
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
<HStack onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
<><Text text={this.props.title} style={{
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
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={
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
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
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
<div className="aspect-div" onMouseEnter={(e: any) => {
  if (!this._isMounted) {
    return;
  }
  this.props.onMouseEnter && this.props.onMouseEnter(e);
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
onBlur={this.props.onBlur?.bind(this)} children={this.props.children} style={{
alignContent: 'flex-start',
alignItems: 'flex-start',
boxSizing: 'border-box',
display: 'grid',
gap: '8px'
,
...this.props.style}} id={this.props.id} />
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
    key?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: any) => any;
onMouseLeave?: (e: any) => any;
onMouseDown?: (e: any) => any;
onMouseUp?: (e: any) => any;
onClick?: (e: any) => any;
onDoubleClick?: (e: any) => any;
onChange?: (e: any) => any;
onInput?: (e: any) => any;
onFocus?: (e: any) => any;
onBlur?: (e: any) => any;
name?: string;
children?: React.ReactNode;
  }

  export class State {
    constructor(
      public isHovered: boolean = false,
      public isPressed: boolean = false,
    ) {}
  }
}