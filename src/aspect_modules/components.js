import * as React from "react";
import './components.css';
export class AspectLanding extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new AspectLanding.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "aspect-div", style: {
                                        backgroundColor: 'rgba(255,255,255,1)',
                                        minHeight: 47,
                                        opacity: 1,
                                        width: 169.199951171875
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "Community", style: {
                                                        color: 'rgba(129,129,129,1)',
                                                        fontSize: 16,
                                                        opacity: 1,
                                                        textAlign: 'center'
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "Updates", style: {
                                                        color: 'rgba(129,129,129,1)',
                                                        fontSize: 16,
                                                        opacity: 1,
                                                        textAlign: 'center'
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "Login", style: {
                                                        color: 'rgba(129,129,129,1)',
                                                        fontSize: 16,
                                                        opacity: 1,
                                                        textAlign: 'center'
                                                    } })), style: {
                                                alignItems: 'center',
                                                display: 'grid',
                                                gridAutoFlow: 'column',
                                                justifyContent: 'space-between',
                                                minHeight: 19,
                                                opacity: 1,
                                                width: 252
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "Try for Free", style: {
                                                        color: 'rgba(15,25,71,1)',
                                                        fontSize: 16,
                                                        opacity: 1,
                                                        textAlign: 'center'
                                                    } })), style: {
                                                alignItems: 'center',
                                                backgroundColor: 'rgba(73,231,251,1)',
                                                display: 'grid',
                                                gridAutoFlow: 'column',
                                                justifyContent: 'center',
                                                minHeight: 51,
                                                opacity: 1,
                                                width: 135
                                            } })), style: {
                                        alignItems: 'center',
                                        display: 'grid',
                                        gridAutoFlow: 'column',
                                        justifyContent: 'space-between',
                                        opacity: 1,
                                        width: 414
                                    } })), style: {
                                alignItems: 'center',
                                display: 'grid',
                                gridAutoFlow: 'column',
                                justifyContent: 'space-between',
                                minHeight: 100,
                                opacity: 1,
                                width: 1920
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "The website builder for startups.", style: {
                                        color: 'rgba(15,25,71,1)',
                                        fontSize: 112,
                                        opacity: 1,
                                        textAlign: 'center'
                                    } }),
                                React.createElement("span", { className: "aspect-span", children: "Quickly publish or download custom sites and pages", style: {
                                        color: 'rgba(86,86,86,1)',
                                        fontSize: 28,
                                        opacity: 1
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "Get Started \u2014 It\u2019s Free", style: {
                                                color: 'rgba(15,25,71,1)',
                                                fontSize: 20,
                                                opacity: 1,
                                                textAlign: 'center'
                                            } })), style: {
                                        alignItems: 'center',
                                        backgroundColor: 'rgba(73,231,251,1)',
                                        display: 'grid',
                                        gridAutoFlow: 'column',
                                        justifyContent: 'center',
                                        minHeight: 72,
                                        opacity: 1,
                                        width: 261
                                    } })), style: {
                                alignContent: 'flex-end',
                                display: 'grid',
                                gap: 48.693359375,
                                justifyItems: 'center',
                                minHeight: 461,
                                opacity: 1,
                                width: 1029
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "aspect-div", style: {
                                        backgroundColor: 'linear-gradient(rgba(25,252,192,1) 0%,rgba(74,230,252,1) 45.374903082847595%,rgba(59,38,254,1) 100%)',
                                        minHeight: 178.728759765625,
                                        opacity: 1,
                                        width: 227.93701171875
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "aspect-div", style: {
                                                backgroundColor: 'linear-gradient(rgba(230,230,230,1) 0%,rgba(255,255,255,1) 100%)',
                                                minHeight: 28.266357421875,
                                                opacity: 1,
                                                width: 25.9970703125
                                            } })), style: {
                                        alignItems: 'center',
                                        display: 'grid',
                                        gridAutoFlow: 'column',
                                        justifyContent: 'flex-end',
                                        minHeight: 122,
                                        opacity: 1,
                                        width: 123
                                    } }),
                                React.createElement("div", { className: "aspect-div", style: {
                                        backgroundColor: 'linear-gradient(rgba(25,252,192,1) 0%,rgba(74,230,252,1) 45.374903082847595%,rgba(59,38,254,1) 100%)',
                                        minHeight: 191.72705078125,
                                        opacity: 1,
                                        width: 245.00341796875
                                    } })), style: {
                                alignItems: 'flex-start',
                                display: 'grid',
                                gridAutoFlow: 'column',
                                justifyContent: 'space-between',
                                minHeight: 636,
                                opacity: 1,
                                width: 1675.20556640625
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "Trusted by top startups around the world", style: {
                                        color: 'rgba(15,25,71,1)',
                                        fontSize: 28,
                                        opacity: 1,
                                        textAlign: 'center'
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "aspect-div", style: {
                                                backgroundColor: 'rgba(0,0,0,0.07)',
                                                minHeight: 23,
                                                opacity: 1,
                                                width: 152
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 5.550537109375,
                                                        opacity: 1,
                                                        width: 6.92041015625
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 5.550537109375,
                                                        opacity: 1,
                                                        width: 6.93310546875
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 11.4503173828125,
                                                        opacity: 1,
                                                        width: 11.44580078125
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 11.44580078125,
                                                        opacity: 1,
                                                        width: 11.44384765625
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 6.9266357421875,
                                                        opacity: 1,
                                                        width: 5.55712890625
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 6.9267578125,
                                                        opacity: 1,
                                                        width: 5.56982421875
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 6.952392578125,
                                                        opacity: 1,
                                                        width: 5.56982421875
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 6.9395751953125,
                                                        opacity: 1,
                                                        width: 5.55712890625
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 11.4503173828125,
                                                        opacity: 1,
                                                        width: 11.44580078125
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 11.4456787109375,
                                                        opacity: 1,
                                                        width: 11.44384765625
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 5.5762939453125,
                                                        opacity: 1,
                                                        width: 6.939453125
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 5.56982421875,
                                                        opacity: 1,
                                                        width: 6.95263671875
                                                    } })), style: {
                                                alignContent: 'center',
                                                backgroundColor: 'rgba(255,255,255,1)',
                                                display: 'grid',
                                                gap: 12.4412841796875,
                                                justifyItems: 'flex-end',
                                                minHeight: 56,
                                                opacity: 1,
                                                width: 56
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 32.3399658203125,
                                                        opacity: 1,
                                                        width: 147.83984375
                                                    } })), style: {
                                                alignItems: 'center',
                                                backgroundColor: 'rgba(255,255,255,1)',
                                                display: 'grid',
                                                gridAutoFlow: 'column',
                                                justifyContent: 'flex-start',
                                                minHeight: 33,
                                                opacity: 1,
                                                width: 147.83984375
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(255,255,255,1)',
                                                        minHeight: 51.9302978515625,
                                                        opacity: 1,
                                                        width: 36.1318359375
                                                    } })), style: {
                                                alignItems: 'center',
                                                backgroundColor: 'rgba(255,255,255,1)',
                                                display: 'grid',
                                                gridAutoFlow: 'column',
                                                justifyContent: 'center',
                                                minHeight: 58.320068359375,
                                                opacity: 1,
                                                width: 58.3203125
                                            } }),
                                        React.createElement("div", { className: "aspect-div", style: {
                                                backgroundColor: 'rgba(0,0,0,0.07)',
                                                minHeight: 34,
                                                opacity: 1,
                                                width: 107
                                            } })), style: {
                                        alignItems: 'center',
                                        display: 'grid',
                                        gridAutoFlow: 'column',
                                        justifyContent: 'space-between',
                                        opacity: 1,
                                        width: 761.16015625
                                    } })), style: {
                                alignContent: 'center',
                                display: 'grid',
                                gap: 49.640625,
                                justifyItems: 'center',
                                minHeight: 139.320068359375,
                                opacity: 1,
                                width: 761.16015625
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(0,0,0,0.07)',
                                                        minHeight: 265.3203125,
                                                        opacity: 1,
                                                        width: 220.746337890625
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "COMPONENTS", style: {
                                                        color: 'rgba(15,25,71,1)',
                                                        fontSize: 16.980501174926758,
                                                        opacity: 1,
                                                        textAlign: 'center'
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", style: {
                                                        backgroundColor: 'rgba(0,0,0,0.07)',
                                                        minHeight: 255.768798828125,
                                                        opacity: 1,
                                                        width: 221.8076171875
                                                    } })), style: {
                                                alignItems: 'flex-start',
                                                background: 'rgba(255,255,255,1)',
                                                display: 'grid',
                                                gap: 20.9375,
                                                gridAutoFlow: 'column',
                                                justifyContent: 'center',
                                                minHeight: 480,
                                                opacity: 1,
                                                width: 626
                                            } })), style: {
                                        alignItems: 'center',
                                        display: 'grid',
                                        gridAutoFlow: 'column',
                                        justifyContent: 'flex-start',
                                        minHeight: 851,
                                        opacity: 1,
                                        width: 932
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "TOP FEATURE", style: {
                                                color: 'rgba(51,123,246,1)',
                                                fontSize: 20,
                                                opacity: 1,
                                                textAlign: 'center'
                                            } }),
                                        React.createElement("span", { className: "aspect-span", children: "Create with Powerful Components.", style: {
                                                color: 'rgba(15,25,71,1)',
                                                fontSize: 64,
                                                opacity: 1
                                            } }),
                                        React.createElement("span", { className: "aspect-span", children: "Dolere malum est: in crucem qui agitur, beatus esse non potest. Huius, Lyco, oratione locuples, rebus ipsis ielunior. Quo modo autem optimum, si bonum praeterea nullum est? Cur igitur, cum de re conveniat,", style: {
                                                color: 'rgba(95,95,95,1)',
                                                fontSize: 20,
                                                opacity: 1
                                            } })), style: {
                                        alignContent: 'center',
                                        display: 'grid',
                                        gap: 49.130859375,
                                        justifyItems: 'flex-start',
                                        minHeight: 368,
                                        opacity: 1,
                                        width: 668
                                    } })), style: {
                                alignItems: 'center',
                                display: 'grid',
                                gridAutoFlow: 'column',
                                justifyContent: 'space-between',
                                opacity: 1,
                                width: 1668
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "Export clean, readable code.", style: {
                                                color: 'rgba(15,25,71,1)',
                                                fontSize: 64,
                                                opacity: 1
                                            } }),
                                        React.createElement("span", { className: "aspect-span", children: "Export your website as clean, readable html, css, and javascript. You can also inject code into your Aspect website using the embed element.", style: {
                                                color: 'rgba(95,95,95,1)',
                                                fontSize: 20,
                                                opacity: 1
                                            } })), style: {
                                        alignContent: 'flex-end',
                                        display: 'grid',
                                        gap: 63.57421875,
                                        justifyItems: 'flex-start',
                                        minHeight: 281,
                                        opacity: 1,
                                        width: 619.5859375
                                    } })), style: {
                                alignItems: 'center',
                                display: 'grid',
                                gridAutoFlow: 'column',
                                justifyContent: 'flex-start',
                                minHeight: 851,
                                opacity: 1,
                                width: 1619.5859375
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "Add Domain", style: {
                                                        color: 'rgba(255,255,255,1)',
                                                        fontSize: 17.105802536010742,
                                                        opacity: 1,
                                                        textAlign: 'center'
                                                    } })), style: {
                                                alignItems: 'flex-start',
                                                backgroundColor: 'rgba(255,255,255,1)',
                                                display: 'grid',
                                                gridAutoFlow: 'column',
                                                justifyContent: 'center',
                                                minHeight: 605.7406005859375,
                                                opacity: 1,
                                                width: 486
                                            } })), style: {
                                        alignItems: 'center',
                                        display: 'grid',
                                        gridAutoFlow: 'column',
                                        justifyContent: 'flex-start',
                                        minHeight: 851,
                                        opacity: 1,
                                        width: 943
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "TOP FEATURE", style: {
                                                color: 'rgba(51,123,246,1)',
                                                fontSize: 20,
                                                opacity: 1,
                                                textAlign: 'center'
                                            } }),
                                        React.createElement("span", { className: "aspect-span", children: "Publish, export or sync sites.", style: {
                                                color: 'rgba(15,25,71,1)',
                                                fontSize: 64,
                                                opacity: 1
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                                React.createElement("div", { className: "aspect-div", style: {
                                                                        minHeight: 18.5413818359375,
                                                                        opacity: 1,
                                                                        width: 18.5400390625
                                                                    } }),
                                                                React.createElement("div", { className: "aspect-div", style: {
                                                                        minHeight: 6.91961669921875,
                                                                        opacity: 1,
                                                                        width: 10.27783203125
                                                                    } }),
                                                                React.createElement("div", { className: "aspect-div", style: {
                                                                        minHeight: 10.278076171875,
                                                                        opacity: 1,
                                                                        width: 6.91943359375
                                                                    } }),
                                                                React.createElement("div", { className: "aspect-div", style: {
                                                                        minHeight: 8.69775390625,
                                                                        opacity: 1,
                                                                        width: 12.787109375
                                                                    } })), style: {
                                                                alignContent: 'center',
                                                                backgroundColor: 'rgba(255,255,255,1)',
                                                                display: 'grid',
                                                                justifyItems: 'flex-end',
                                                                minHeight: 32,
                                                                opacity: 1,
                                                                width: 32
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'center',
                                                        minHeight: 60,
                                                        opacity: 1,
                                                        width: 59.9365234375
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis", style: {
                                                        color: 'rgba(95,95,95,1)',
                                                        fontSize: 20,
                                                        opacity: 1
                                                    } })), style: {
                                                alignItems: 'flex-start',
                                                display: 'grid',
                                                gridAutoFlow: 'column',
                                                justifyContent: 'space-between',
                                                minHeight: 87,
                                                opacity: 1,
                                                width: 620
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                                React.createElement("div", { className: "aspect-div", style: {
                                                                        minHeight: 30.03570556640625,
                                                                        opacity: 1,
                                                                        width: 28
                                                                    } })), style: {
                                                                alignItems: 'center',
                                                                backgroundColor: 'rgba(255,255,255,1)',
                                                                display: 'grid',
                                                                gridAutoFlow: 'column',
                                                                justifyContent: 'flex-start',
                                                                minHeight: 32,
                                                                opacity: 1,
                                                                width: 32
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'center',
                                                        minHeight: 60,
                                                        opacity: 1,
                                                        width: 59.9365234375
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "Dolere malum est: in crucem qui agitur, beatus esse non potest. Huius, Lyco, oratione locuples, rebus ipsis ielunior.", style: {
                                                        color: 'rgba(95,95,95,1)',
                                                        fontSize: 20,
                                                        opacity: 1
                                                    } })), style: {
                                                alignItems: 'flex-start',
                                                display: 'grid',
                                                gridAutoFlow: 'column',
                                                justifyContent: 'space-between',
                                                minHeight: 120,
                                                opacity: 1,
                                                width: 620
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                                React.createElement("div", { className: "aspect-div", style: {
                                                                        minHeight: 13.952392578125,
                                                                        opacity: 1,
                                                                        width: 13.9521484375
                                                                    } })), style: {
                                                                alignItems: 'flex-start',
                                                                backgroundColor: 'rgba(255,255,255,1)',
                                                                display: 'grid',
                                                                gridAutoFlow: 'column',
                                                                justifyContent: 'flex-end',
                                                                minHeight: 24,
                                                                opacity: 1,
                                                                width: 24
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'center',
                                                        minHeight: 60,
                                                        opacity: 1,
                                                        width: 59.9365234375
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "Dolere malum est: in crucem qui agitur, beatus esse non potest. Huius, Lyco, oratione locuples", style: {
                                                        color: 'rgba(95,95,95,1)',
                                                        fontSize: 20,
                                                        opacity: 1
                                                    } })), style: {
                                                alignItems: 'flex-start',
                                                display: 'grid',
                                                gridAutoFlow: 'column',
                                                justifyContent: 'space-between',
                                                minHeight: 120,
                                                opacity: 1,
                                                width: 620
                                            } })), style: {
                                        alignContent: 'center',
                                        display: 'grid',
                                        gap: 49.130859375,
                                        justifyItems: 'flex-start',
                                        minHeight: 633,
                                        opacity: 1,
                                        width: 668
                                    } })), style: {
                                alignItems: 'center',
                                display: 'grid',
                                gridAutoFlow: 'column',
                                justifyContent: 'space-between',
                                opacity: 1,
                                width: 1669
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "What our customers are saying", style: {
                                        color: 'rgba(15,25,71,1)',
                                        fontSize: 64,
                                        opacity: 1,
                                        textAlign: 'center'
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Illa argumenta propria videamus, cur omnia sint paria peccata.\u201D", style: {
                                                        color: 'rgba(95,95,95,1)',
                                                        fontSize: 20,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", style: {
                                                                backgroundColor: 'rgba(0,0,0,0.07)',
                                                                minHeight: 64,
                                                                opacity: 1,
                                                                width: 64
                                                            } }),
                                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                                React.createElement("span", { className: "aspect-span", children: "Jenny Davdson", style: {
                                                                        color: 'rgba(15,25,71,1)',
                                                                        fontSize: 20,
                                                                        opacity: 1
                                                                    } }),
                                                                React.createElement("span", { className: "aspect-span", children: "Front end Developer at Acme Studios", style: {
                                                                        color: 'rgba(95,95,95,1)',
                                                                        fontSize: 20,
                                                                        opacity: 1
                                                                    } })), style: {
                                                                alignContent: 'center',
                                                                display: 'grid',
                                                                gap: 11.40625,
                                                                justifyItems: 'flex-end',
                                                                minHeight: 60,
                                                                opacity: 1,
                                                                width: 335
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'space-between',
                                                        opacity: 1,
                                                        width: 423
                                                    } })), style: {
                                                alignContent: 'center',
                                                background: 'rgba(255,255,255,1)',
                                                display: 'grid',
                                                gap: 33.484375,
                                                justifyItems: 'center',
                                                minHeight: 287,
                                                opacity: 1,
                                                width: 632
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "\u201CSi quidem, inquit, tollerem, sed relinquo. Quamvis enim depravatae non sint, pravae tamen esse Si quidem, inquit, tollerem, sed.\u201D", style: {
                                                        color: 'rgba(95,95,95,1)',
                                                        fontSize: 20,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", style: {
                                                                backgroundColor: 'rgba(0,0,0,0.07)',
                                                                minHeight: 64,
                                                                opacity: 1,
                                                                width: 64
                                                            } }),
                                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                                React.createElement("span", { className: "aspect-span", children: "Marc", style: {
                                                                        color: 'rgba(15,25,71,1)',
                                                                        fontSize: 20,
                                                                        opacity: 1
                                                                    } }),
                                                                React.createElement("span", { className: "aspect-span", children: "Co Founder at XYZ", style: {
                                                                        color: 'rgba(95,95,95,1)',
                                                                        fontSize: 20,
                                                                        opacity: 1
                                                                    } })), style: {
                                                                alignContent: 'center',
                                                                display: 'grid',
                                                                gap: 15.13671875,
                                                                justifyItems: 'flex-start',
                                                                minHeight: 60,
                                                                opacity: 1,
                                                                width: 171
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'space-between',
                                                        opacity: 1,
                                                        width: 259
                                                    } })), style: {
                                                alignContent: 'center',
                                                display: 'grid',
                                                gap: 34.490234375,
                                                justifyItems: 'center',
                                                minHeight: 287,
                                                opacity: 1,
                                                width: 632
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "\u201CSi quidem, inquit, tollerem, sed relinquo. Quamvis enim depravatae non sint, pravae tamen esse Si quidem, inquit, tollerem, sed.\u201D", style: {
                                                        color: 'rgba(95,95,95,1)',
                                                        fontSize: 20,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", style: {
                                                                backgroundColor: 'rgba(0,0,0,0.07)',
                                                                minHeight: 64,
                                                                opacity: 1,
                                                                width: 64
                                                            } }),
                                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                                React.createElement("span", { className: "aspect-span", children: "Joseph Richards", style: {
                                                                        color: 'rgba(15,25,71,1)',
                                                                        fontSize: 20,
                                                                        opacity: 1
                                                                    } }),
                                                                React.createElement("span", { className: "aspect-span", children: "Developer at XYZ", style: {
                                                                        color: 'rgba(95,95,95,1)',
                                                                        fontSize: 20,
                                                                        opacity: 1
                                                                    } })), style: {
                                                                alignContent: 'center',
                                                                display: 'grid',
                                                                gap: 11.77734375,
                                                                justifyItems: 'center',
                                                                minHeight: 60,
                                                                opacity: 1,
                                                                width: 158
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'space-between',
                                                        opacity: 1,
                                                        width: 246
                                                    } })), style: {
                                                alignContent: 'center',
                                                background: 'rgba(255,255,255,1)',
                                                display: 'grid',
                                                gap: 34.490234375,
                                                justifyItems: 'center',
                                                minHeight: 287,
                                                opacity: 1,
                                                width: 632
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Illa argumenta propria videamus, cur omnia sint paria peccata.\u201D", style: {
                                                        color: 'rgba(95,95,95,1)',
                                                        fontSize: 20,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", style: {
                                                                backgroundColor: 'rgba(0,0,0,0.07)',
                                                                minHeight: 64,
                                                                opacity: 1,
                                                                width: 64
                                                            } }),
                                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                                React.createElement("span", { className: "aspect-span", children: "Beth", style: {
                                                                        color: 'rgba(15,25,71,1)',
                                                                        fontSize: 20,
                                                                        opacity: 1
                                                                    } }),
                                                                React.createElement("span", { className: "aspect-span", children: "Team Lead at XYZ", style: {
                                                                        color: 'rgba(95,95,95,1)',
                                                                        fontSize: 20,
                                                                        opacity: 1
                                                                    } })), style: {
                                                                alignContent: 'center',
                                                                display: 'grid',
                                                                gap: 15.13671875,
                                                                justifyItems: 'flex-start',
                                                                minHeight: 60,
                                                                opacity: 1,
                                                                width: 165
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'space-between',
                                                        opacity: 1,
                                                        width: 253
                                                    } })), style: {
                                                alignContent: 'center',
                                                display: 'grid',
                                                gap: 33.484375,
                                                justifyItems: 'center',
                                                minHeight: 287,
                                                opacity: 1,
                                                width: 632
                                            } })), style: {
                                        alignContent: 'center',
                                        display: 'grid',
                                        gap: 56,
                                        gridTemplateColumns: 'auto auto',
                                        justifyItems: 'flex-end',
                                        opacity: 1,
                                        width: 1320
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "aspect-div", style: {
                                                backgroundColor: 'rgba(73,231,251,1)',
                                                minHeight: 15,
                                                opacity: 1,
                                                width: 15
                                            } }),
                                        React.createElement("div", { className: "aspect-div", style: {
                                                backgroundColor: 'rgba(230,230,230,1)',
                                                minHeight: 15,
                                                opacity: 1,
                                                width: 15
                                            } }),
                                        React.createElement("div", { className: "aspect-div", style: {
                                                backgroundColor: 'rgba(230,230,230,1)',
                                                minHeight: 15,
                                                opacity: 1,
                                                width: 15
                                            } })), style: {
                                        alignItems: 'center',
                                        display: 'grid',
                                        gridAutoFlow: 'column',
                                        justifyContent: 'space-between',
                                        opacity: 1,
                                        width: 77
                                    } })), style: {
                                display: 'grid',
                                gap: 102.1875,
                                justifyItems: 'center',
                                minHeight: 895,
                                opacity: 1,
                                width: 1320
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "aspect-div", style: {
                                                minHeight: 183.14306640625,
                                                opacity: 1,
                                                width: 183
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "Get started", style: {
                                                        color: 'rgba(255,255,255,1)',
                                                        fontSize: 88.70748138427734,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "for free", style: {
                                                        color: 'linear-gradient(rgba(25,252,192,1) 0%,rgba(59,38,254,1) 100%)',
                                                        fontSize: 88.70748138427734,
                                                        opacity: 1
                                                    } })), style: {
                                                alignItems: 'flex-end',
                                                display: 'grid',
                                                gridAutoFlow: 'column',
                                                justifyContent: 'space-between',
                                                minHeight: 97,
                                                opacity: 1,
                                                width: 785
                                            } }),
                                        React.createElement("span", { className: "aspect-span", children: "Join over a hundred startups and creators using Aspect, to bring their ideas to life. Create, publish and download custom made sites and pages.", style: {
                                                color: 'rgba(255,255,255,1)',
                                                fontSize: 28,
                                                opacity: 1,
                                                textAlign: 'center'
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "Get Started \u2014 It\u2019s Free", style: {
                                                        color: 'rgba(15,25,71,1)',
                                                        fontSize: 20,
                                                        opacity: 1,
                                                        textAlign: 'center'
                                                    } })), style: {
                                                alignItems: 'center',
                                                backgroundColor: 'rgba(73,231,251,1)',
                                                display: 'grid',
                                                gridAutoFlow: 'column',
                                                justifyContent: 'center',
                                                minHeight: 72,
                                                opacity: 1,
                                                width: 261
                                            } })), style: {
                                        alignContent: 'center',
                                        display: 'grid',
                                        gap: 16.85693359375,
                                        justifyItems: 'center',
                                        minHeight: 647,
                                        opacity: 1,
                                        width: 785
                                    } })), style: {
                                alignItems: 'center',
                                background: 'linear-gradient(rgba(19,11,77,1) 0%,rgba(5,14,28,1) 100%)',
                                display: 'grid',
                                gridAutoFlow: 'column',
                                justifyContent: 'center',
                                opacity: 1,
                                width: 1919
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "ROADMAP", style: {
                                                color: 'rgba(51,123,246,1)',
                                                fontSize: 20,
                                                opacity: 1,
                                                textAlign: 'center'
                                            } }),
                                        React.createElement("span", { className: "aspect-span", children: "What\u2019s coming next:", style: {
                                                color: 'rgba(15,25,71,1)',
                                                fontSize: 64,
                                                opacity: 1,
                                                textAlign: 'center'
                                            } })), style: {
                                        alignContent: 'flex-start',
                                        display: 'grid',
                                        gap: 43.130859375,
                                        justifyItems: 'center',
                                        opacity: 1,
                                        width: 668
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", style: {
                                                                minHeight: 16.5,
                                                                opacity: 1,
                                                                width: 21
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'flex-end',
                                                        minHeight: 40,
                                                        opacity: 1,
                                                        width: 40
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", style: {
                                                                minHeight: 16.5,
                                                                opacity: 1,
                                                                width: 21
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'flex-end',
                                                        minHeight: 40,
                                                        opacity: 1,
                                                        width: 40
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", style: {
                                                                minHeight: 16.5,
                                                                opacity: 1,
                                                                width: 21
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'flex-end',
                                                        minHeight: 40,
                                                        opacity: 1,
                                                        width: 40
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", style: {
                                                                minHeight: 16.5,
                                                                opacity: 1,
                                                                width: 21
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'flex-end',
                                                        minHeight: 40,
                                                        opacity: 1,
                                                        width: 40
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", style: {
                                                                backgroundColor: 'rgba(69,159,253,1)',
                                                                minHeight: 40,
                                                                opacity: 1,
                                                                width: 40
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'flex-start',
                                                        opacity: 1,
                                                        width: 40
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", style: {
                                                                backgroundColor: 'rgba(69,159,253,1)',
                                                                minHeight: 40,
                                                                opacity: 1,
                                                                width: 40
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'flex-start',
                                                        opacity: 1,
                                                        width: 40
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", style: {
                                                                backgroundColor: 'rgba(245,245,245,1)',
                                                                minHeight: 40,
                                                                opacity: 1,
                                                                width: 40
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'flex-start',
                                                        opacity: 1,
                                                        width: 40
                                                    } })), style: {
                                                alignContent: 'center',
                                                display: 'grid',
                                                gap: 41,
                                                justifyItems: 'flex-start',
                                                opacity: 1,
                                                width: 40
                                            } }),
                                        React.createElement("div", { className: "aspect-div", style: {
                                                backgroundColor: 'linear-gradient(rgba(25,252,192,1) 0%,rgba(31,250,200,1) 36.97916567325592%,rgba(69,159,253,1) 53.64583134651184%,rgba(167,176,189,1) 81.25%,rgba(245,245,245,1) 95.74467539787292%)',
                                                minHeight: 552,
                                                opacity: 1,
                                                width: 4
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "Templates", style: {
                                                        color: 'rgba(142,142,142,1)',
                                                        fontSize: 32,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "Powerful Components", style: {
                                                        color: 'rgba(142,142,142,1)',
                                                        fontSize: 32,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "Offline mode", style: {
                                                        color: 'rgba(142,142,142,1)',
                                                        fontSize: 32,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "Export & Custom domains", style: {
                                                        color: 'rgba(142,142,142,1)',
                                                        fontSize: 32,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "Feature one", style: {
                                                        color: 'rgba(69,159,253,1)',
                                                        fontSize: 32,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "Feature two", style: {
                                                        color: 'rgba(69,159,253,1)',
                                                        fontSize: 32,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("span", { className: "aspect-span", children: "Aspect for Teams", style: {
                                                        color: 'rgba(15,25,71,1)',
                                                        fontSize: 32,
                                                        opacity: 1
                                                    } })), style: {
                                                alignContent: 'center',
                                                display: 'grid',
                                                gap: 43.59375,
                                                justifyItems: 'flex-start',
                                                minHeight: 470,
                                                opacity: 1,
                                                width: 392
                                            } })), style: {
                                        alignItems: 'flex-start',
                                        display: 'grid',
                                        gridAutoFlow: 'column',
                                        justifyContent: 'space-between',
                                        opacity: 1,
                                        width: 460
                                    } })), style: {
                                alignContent: 'center',
                                background: 'rgba(245,245,245,1)',
                                display: 'grid',
                                gap: 40,
                                justifyItems: 'center',
                                minHeight: 971,
                                opacity: 1,
                                width: 1920
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "aspect-div", style: {
                                                backgroundColor: 'rgba(255,255,255,1)',
                                                minHeight: 47,
                                                opacity: 1,
                                                width: 169.199951171875
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "Aspect", style: {
                                                        color: 'rgba(255,255,255,1)',
                                                        fontSize: 16,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("span", { className: "aspect-span", children: "Home", style: {
                                                                color: 'rgba(255,255,255,1)',
                                                                fontSize: 16,
                                                                opacity: 1
                                                            } }),
                                                        React.createElement("span", { className: "aspect-span", children: "Layouts", style: {
                                                                color: 'rgba(255,255,255,1)',
                                                                fontSize: 16,
                                                                opacity: 1
                                                            } })), style: {
                                                        alignContent: 'center',
                                                        display: 'grid',
                                                        gap: 17.357421875,
                                                        justifyItems: 'flex-start',
                                                        minHeight: 49.54248046875,
                                                        opacity: 1,
                                                        width: 94.08203125
                                                    } })), style: {
                                                alignContent: 'center',
                                                display: 'grid',
                                                gap: 27.044921875,
                                                justifyItems: 'flex-start',
                                                minHeight: 94.31396484375,
                                                opacity: 1,
                                                width: 94.08203125
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "Contact", style: {
                                                        color: 'rgba(255,255,255,1)',
                                                        fontSize: 16,
                                                        opacity: 1
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("span", { className: "aspect-span", children: "Email", style: {
                                                                color: 'rgba(255,255,255,1)',
                                                                fontSize: 16,
                                                                opacity: 1
                                                            } }),
                                                        React.createElement("span", { className: "aspect-span", children: "Twitter", style: {
                                                                color: 'rgba(255,255,255,1)',
                                                                fontSize: 16,
                                                                opacity: 1
                                                            } })), style: {
                                                        alignContent: 'center',
                                                        display: 'grid',
                                                        gap: 17.357421875,
                                                        justifyItems: 'flex-start',
                                                        minHeight: 49.54248046875,
                                                        opacity: 1,
                                                        width: 94.08203125
                                                    } })), style: {
                                                alignContent: 'center',
                                                display: 'grid',
                                                gap: 29.583984375,
                                                justifyItems: 'flex-start',
                                                minHeight: 94.31396484375,
                                                opacity: 1,
                                                width: 94.08203125
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "Join the Community", style: {
                                                        color: 'rgba(255,255,255,1)',
                                                        fontSize: 16,
                                                        opacity: 1,
                                                        textAlign: 'right'
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                                React.createElement("div", { className: "aspect-div", style: {
                                                                        backgroundColor: 'rgba(225,228,232,1)',
                                                                        minHeight: 19.5,
                                                                        opacity: 1,
                                                                        width: 24
                                                                    } })), style: {
                                                                alignItems: 'center',
                                                                backgroundColor: 'rgba(255,255,255,1)',
                                                                display: 'grid',
                                                                gridAutoFlow: 'column',
                                                                justifyContent: 'flex-start',
                                                                minHeight: 24,
                                                                opacity: 1,
                                                                width: 24
                                                            } }),
                                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                                React.createElement("div", { className: "aspect-div", style: {
                                                                        backgroundColor: 'rgba(225,228,232,1)',
                                                                        minHeight: 12.32421875,
                                                                        opacity: 1,
                                                                        width: 12.32421875
                                                                    } })), style: {
                                                                alignItems: 'center',
                                                                backgroundColor: 'rgba(255,255,255,1)',
                                                                display: 'grid',
                                                                gridAutoFlow: 'column',
                                                                justifyContent: 'center',
                                                                minHeight: 24,
                                                                opacity: 1,
                                                                width: 24
                                                            } }),
                                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                                React.createElement("div", { className: "aspect-div", style: {
                                                                        backgroundColor: 'rgba(225,228,232,1)',
                                                                        minHeight: 22,
                                                                        opacity: 1,
                                                                        width: 22
                                                                    } })), style: {
                                                                alignItems: 'center',
                                                                backgroundColor: 'rgba(255,255,255,1)',
                                                                display: 'grid',
                                                                gridAutoFlow: 'column',
                                                                justifyContent: 'center',
                                                                minHeight: 24,
                                                                opacity: 1,
                                                                width: 24
                                                            } })), style: {
                                                        alignItems: 'center',
                                                        display: 'grid',
                                                        gridAutoFlow: 'column',
                                                        justifyContent: 'space-between',
                                                        opacity: 1,
                                                        width: 108
                                                    } })), style: {
                                                alignContent: 'center',
                                                display: 'grid',
                                                gap: 26.921875,
                                                justifyItems: 'flex-end',
                                                minHeight: 69,
                                                opacity: 1,
                                                width: 166
                                            } })), style: {
                                        alignItems: 'center',
                                        display: 'grid',
                                        gridAutoFlow: 'column',
                                        justifyContent: 'space-between',
                                        opacity: 1,
                                        width: 1371
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "\u00A9 2021 Metacode, Inc. dba Aspect. All rights reserved.", style: {
                                                color: 'rgba(255,255,255,1)',
                                                fontSize: 14,
                                                opacity: 1
                                            } }),
                                        React.createElement("span", { className: "aspect-span", children: "Made in Aspect.", style: {
                                                color: 'rgba(255,255,255,1)',
                                                fontSize: 14,
                                                opacity: 1,
                                                textAlign: 'right'
                                            } })), style: {
                                        alignItems: 'center',
                                        display: 'grid',
                                        gridAutoFlow: 'column',
                                        justifyContent: 'space-between',
                                        minHeight: 21,
                                        opacity: 1,
                                        width: 1359
                                    } })), style: {
                                alignContent: 'center',
                                background: 'rgba(15,25,71,1)',
                                display: 'grid',
                                gap: 117.68603515625,
                                justifyItems: 'center',
                                minHeight: 315,
                                opacity: 1,
                                width: 1920
                            } })), style: Object.assign({ alignContent: 'center', backgroundColor: 'rgba(255,255,255,1)', display: 'grid', gap: 80, justifyItems: 'center', opacity: 1, width: 1920 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (AspectLanding) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    AspectLanding.State = State;
})(AspectLanding || (AspectLanding = {}));
export class ElementAdderFloatingView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ElementAdderFloatingView.State();
    }
    get customState() {
        if (this.props.isExpanded === true) {
            return 'expanded';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        switch (this.customState) {
            case 'expanded':
                return (React.createElement(VStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement("input", { className: "aspect-input", onChange: (_h = this.props.onFilterChange) === null || _h === void 0 ? void 0 : _h.bind(this), defaultValue: this.props.inputDefaultValue, placeholder: "find element", spellCheck: false, type: "search", style: {
                                        borderColor: 'rgba(0,0,0, 0.1)',
                                        fontSize: 12,
                                        height: 26,
                                        outline: 'none',
                                        padding: '0 8px',
                                        width: '100%'
                                    } })), style: {
                                boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.05)',
                                gridTemplateColumns: '1fr',
                                minHeight: 40,
                                padding: 8,
                                width: '100%'
                            } }),
                        React.createElement(ScrollableList, { children: this.props.children, style: {
                                height: 200,
                                minHeight: '',
                                padding: 8,
                                width: '100%'
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)', gap: 0, overflow: 'hidden', width: 224 }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(HStack, { onMouseEnter: (_j = this.props.onMouseEnter) === null || _j === void 0 ? void 0 : _j.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_k = this.props.onClick) === null || _k === void 0 ? void 0 : _k.bind(this), onDoubleClick: (_l = this.props.onDoubleClick) === null || _l === void 0 ? void 0 : _l.bind(this), onChange: (_m = this.props.onChange) === null || _m === void 0 ? void 0 : _m.bind(this), onInput: (_o = this.props.onInput) === null || _o === void 0 ? void 0 : _o.bind(this), onFocus: (_p = this.props.onFocus) === null || _p === void 0 ? void 0 : _p.bind(this), onBlur: (_q = this.props.onBlur) === null || _q === void 0 ? void 0 : _q.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontSize: 10,
                                fontWeight: 600,
                                textTransform: 'uppercase'
                            } }),
                        React.createElement(HStack, null)), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)', gap: 14, gridTemplateColumns: '1fr', justifyContent: 'space-between', minHeight: 36, padding: '0 16px', width: '100%' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ElementAdderFloatingView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ElementAdderFloatingView.State = State;
})(ElementAdderFloatingView || (ElementAdderFloatingView = {}));
export class ElementAdderItem extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ElementAdderItem.State();
    }
    get customState() {
        if (this.props.isSelected === true) {
            return 'selected';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        switch (this.customState) {
            case 'selected':
                return (React.createElement(HStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontWeight: 500,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                width: '100%'
                            } })), style: Object.assign({ backgroundColor: '#007cf8', color: '#fff', fontSize: 12, gridTemplateColumns: 'auto 1fr', minHeight: 32, padding: '8px 12px', width: '100%' }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(HStack, { onMouseEnter: (_h = this.props.onMouseEnter) === null || _h === void 0 ? void 0 : _h.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_j = this.props.onClick) === null || _j === void 0 ? void 0 : _j.bind(this), onDoubleClick: (_k = this.props.onDoubleClick) === null || _k === void 0 ? void 0 : _k.bind(this), onChange: (_l = this.props.onChange) === null || _l === void 0 ? void 0 : _l.bind(this), onInput: (_m = this.props.onInput) === null || _m === void 0 ? void 0 : _m.bind(this), onFocus: (_o = this.props.onFocus) === null || _o === void 0 ? void 0 : _o.bind(this), onBlur: (_p = this.props.onBlur) === null || _p === void 0 ? void 0 : _p.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontWeight: 500,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                width: '100%'
                            } })), style: Object.assign({ fontSize: 12, gap: 12, gridTemplateColumns: 'auto 1fr', minHeight: 32, padding: '8px 12px', width: '100%' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ElementAdderItem) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ElementAdderItem.State = State;
})(ElementAdderItem || (ElementAdderItem = {}));
export class ElementListFloatingView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ElementListFloatingView.State();
    }
    get customState() {
        if (this.props.isCollapsed === true) {
            return 'collapsed';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        switch (this.customState) {
            case 'collapsed':
                return (React.createElement(VStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), style: Object.assign({ height: 36, width: 224 }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(VStack, { onMouseEnter: (_h = this.props.onMouseEnter) === null || _h === void 0 ? void 0 : _h.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_j = this.props.onClick) === null || _j === void 0 ? void 0 : _j.bind(this), onDoubleClick: (_k = this.props.onDoubleClick) === null || _k === void 0 ? void 0 : _k.bind(this), onChange: (_l = this.props.onChange) === null || _l === void 0 ? void 0 : _l.bind(this), onInput: (_m = this.props.onInput) === null || _m === void 0 ? void 0 : _m.bind(this), onFocus: (_o = this.props.onFocus) === null || _o === void 0 ? void 0 : _o.bind(this), onBlur: (_p = this.props.onBlur) === null || _p === void 0 ? void 0 : _p.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "elements", style: {
                                        fontSize: 10,
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    } })), style: {
                                height: 32,
                                padding: '0 16px'
                            } }),
                        React.createElement(ScrollableList, { children: this.props.children, style: {
                                backgroundColor: '#fff',
                                height: 148,
                                minHeight: '',
                                padding: 8,
                                position: 'relative',
                                width: '100%'
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)', gap: 0, overflow: 'hidden', width: 224 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ElementListFloatingView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ElementListFloatingView.State = State;
})(ElementListFloatingView || (ElementListFloatingView = {}));
export class ElementListItem extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ElementListItem.State();
    }
    get customState() {
        if (this.props.isSelected === true && this.state.isHovered === true) {
            return 'selected+hover';
        }
        else if (this.props.isSelected === true) {
            return 'selected';
        }
        else if (this.state.isHovered === true) {
            return 'hovered';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
        switch (this.customState) {
            case 'selected':
                return (React.createElement(HStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontSize: 11,
                                fontWeight: 500,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            } })), style: Object.assign({ backgroundColor: '#007cf8', color: 'white', height: 30, justifyContent: 'space-between', minHeight: '', minWidth: 160, paddingLeft: 10, paddingRight: '', width: '100%' }, this.props.style), id: this.props.id }));
            case 'hovered':
                return (React.createElement(HStack, { onMouseEnter: (_h = this.props.onMouseEnter) === null || _h === void 0 ? void 0 : _h.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_j = this.props.onClick) === null || _j === void 0 ? void 0 : _j.bind(this), onDoubleClick: (_k = this.props.onDoubleClick) === null || _k === void 0 ? void 0 : _k.bind(this), onChange: (_l = this.props.onChange) === null || _l === void 0 ? void 0 : _l.bind(this), onInput: (_m = this.props.onInput) === null || _m === void 0 ? void 0 : _m.bind(this), onFocus: (_o = this.props.onFocus) === null || _o === void 0 ? void 0 : _o.bind(this), onBlur: (_p = this.props.onBlur) === null || _p === void 0 ? void 0 : _p.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontSize: 11,
                                fontWeight: 500,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            } }),
                        React.createElement(SimpleButton, { onClick: (_q = this.props.onAccessoryButtonClick) === null || _q === void 0 ? void 0 : _q.bind(this), children: this.props.accessoryButtonImage, style: {
                                height: '100%',
                                justifyContent: 'center',
                                minHeight: '',
                                width: 28
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '', gridTemplateColumns: '1fr auto', height: 30, justifyContent: 'space-between', minHeight: '', minWidth: 160, paddingLeft: 10, paddingRight: '', width: '100%' }, this.props.style), id: this.props.id }));
            case 'selected+hover':
                return (React.createElement(HStack, { onMouseEnter: (_r = this.props.onMouseEnter) === null || _r === void 0 ? void 0 : _r.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_s = this.props.onClick) === null || _s === void 0 ? void 0 : _s.bind(this), onDoubleClick: (_t = this.props.onDoubleClick) === null || _t === void 0 ? void 0 : _t.bind(this), onChange: (_u = this.props.onChange) === null || _u === void 0 ? void 0 : _u.bind(this), onInput: (_v = this.props.onInput) === null || _v === void 0 ? void 0 : _v.bind(this), onFocus: (_w = this.props.onFocus) === null || _w === void 0 ? void 0 : _w.bind(this), onBlur: (_x = this.props.onBlur) === null || _x === void 0 ? void 0 : _x.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontSize: 11,
                                fontWeight: 500,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            } }),
                        React.createElement(SimpleButton, { onClick: (_y = this.props.onAccessoryButtonClick) === null || _y === void 0 ? void 0 : _y.bind(this), children: this.props.accessoryButtonImage, style: {
                                height: '100%',
                                justifyContent: 'center',
                                minHeight: '',
                                width: 28
                            } })), style: Object.assign({ backgroundColor: '#007cf8', color: 'white', height: 30, justifyContent: 'space-between', minHeight: '', minWidth: 160, paddingLeft: 10, paddingRight: '', width: '100%' }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(HStack, { onMouseEnter: (_z = this.props.onMouseEnter) === null || _z === void 0 ? void 0 : _z.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_0 = this.props.onClick) === null || _0 === void 0 ? void 0 : _0.bind(this), onDoubleClick: (_1 = this.props.onDoubleClick) === null || _1 === void 0 ? void 0 : _1.bind(this), onChange: (_2 = this.props.onChange) === null || _2 === void 0 ? void 0 : _2.bind(this), onInput: (_3 = this.props.onInput) === null || _3 === void 0 ? void 0 : _3.bind(this), onFocus: (_4 = this.props.onFocus) === null || _4 === void 0 ? void 0 : _4.bind(this), onBlur: (_5 = this.props.onBlur) === null || _5 === void 0 ? void 0 : _5.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontSize: 11,
                                fontWeight: 500,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '', height: 30, justifyContent: 'space-between', minHeight: '', minWidth: 160, overflow: 'hidden', paddingLeft: 10, paddingRight: '', width: '100%' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ElementListItem) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ElementListItem.State = State;
})(ElementListItem || (ElementListItem = {}));
export class ExportButtonDropdown extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ExportButtonDropdown.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        switch (this.customState) {
            default:
                return (React.createElement(VStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(SimpleButton, { onClick: (_h = this.props.onZipExportClick) === null || _h === void 0 ? void 0 : _h.bind(this), children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Export React as .zip" })), style: {
                                padding: '10px 12px',
                                width: '100%'
                            } }),
                        React.createElement("div", { className: "aspect-div", style: {
                                backgroundColor: 'rgba(0,0,0,0.07)',
                                height: 1
                            } }),
                        React.createElement(SimpleButton, { onClick: (_j = this.props.onQuickExportClick) === null || _j === void 0 ? void 0 : _j.bind(this), children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Quick export React directly into your codebase " })), style: {
                                padding: '10px 12px',
                                width: '100%'
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0,0,0,0.05)', fontSize: 12, fontWeight: 500, gap: 0, lineHeight: 1.4, padding: 8, width: 224 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ExportButtonDropdown) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ExportButtonDropdown.State = State;
})(ExportButtonDropdown || (ExportButtonDropdown = {}));
export class FigmaAccessTokenView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new FigmaAccessTokenView.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        switch (this.customState) {
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("input", { className: "aspect-input", onChange: (_h = this.props.inputOnChange) === null || _h === void 0 ? void 0 : _h.bind(this), placeholder: "Figma access token", style: {
                                fontSize: 12,
                                height: 36,
                                padding: '0 16px',
                                width: '100%'
                            } }),
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(SimpleButton, { onClick: (_j = this.props.cancelOnClick) === null || _j === void 0 ? void 0 : _j.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "Cancel", style: {
                                                color: 'rgba(0,0,0,1)',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                letterSpacing: 0,
                                                textAlign: 'left'
                                            } })), style: {
                                        border: '1px solid #ddd',
                                        height: 32,
                                        padding: '0 16px'
                                    } }),
                                React.createElement(SimpleButton, { onClick: (_k = this.props.saveOnClick) === null || _k === void 0 ? void 0 : _k.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "Save", style: {
                                                color: 'rgba(0,0,0,1)',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                letterSpacing: 0,
                                                textAlign: 'left'
                                            } })), style: {
                                        border: '1px solid #ddd',
                                        height: 32,
                                        padding: '0 16px'
                                    } })) })), style: Object.assign({ backgroundColor: 'rgba(255,255,255,1)', display: 'grid', gap: 12, justifyItems: 'right', padding: 32, width: 360 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (FigmaAccessTokenView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    FigmaAccessTokenView.State = State;
})(FigmaAccessTokenView || (FigmaAccessTokenView = {}));
export class FigmaAuthView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new FigmaAuthView.State();
    }
    get customState() {
        if (this.props.isLoading === true) {
            return 'loading';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        switch (this.customState) {
            case 'loading':
                return (React.createElement(VStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", children: this.props.logoView }),
                        React.createElement("span", { className: "aspect-span", children: this.props.message, style: {
                                fontSize: 15
                            } })), style: Object.assign({ alignContent: 'center', height: '100%', justifyItems: 'center', padding: 24, width: '100%' }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(VStack, { onMouseEnter: (_h = this.props.onMouseEnter) === null || _h === void 0 ? void 0 : _h.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_j = this.props.onClick) === null || _j === void 0 ? void 0 : _j.bind(this), onDoubleClick: (_k = this.props.onDoubleClick) === null || _k === void 0 ? void 0 : _k.bind(this), onChange: (_l = this.props.onChange) === null || _l === void 0 ? void 0 : _l.bind(this), onInput: (_m = this.props.onInput) === null || _m === void 0 ? void 0 : _m.bind(this), onFocus: (_o = this.props.onFocus) === null || _o === void 0 ? void 0 : _o.bind(this), onBlur: (_p = this.props.onBlur) === null || _p === void 0 ? void 0 : _p.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "aspect-span", children: this.props.message, style: {
                                fontSize: 15
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement(SimpleButton, { onClick: (_q = this.props.doneButtonOnClick) === null || _q === void 0 ? void 0 : _q.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: this.props.callToAction, style: {
                                                color: 'white',
                                                fontSize: 14,
                                                fontWeight: 500
                                            } })), style: {
                                        height: 36,
                                        justifyContent: 'center',
                                        padding: '0 20px'
                                    } })), style: {
                                backgroundColor: '#06f'
                            } })), style: Object.assign({ alignContent: 'center', height: '100%', justifyItems: 'center', padding: 24, width: '100%' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (FigmaAuthView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    FigmaAuthView.State = State;
})(FigmaAuthView || (FigmaAuthView = {}));
export class FigmaFileSyncItem extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new FigmaFileSyncItem.State();
    }
    get customState() {
        if (this.props.isSelected === true) {
            return 'selected';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        switch (this.customState) {
            case 'selected':
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "aspect-span", children: this.props.title, style: {
                                color: 'white',
                                fontSize: 11,
                                fontWeight: 500,
                                letterSpacing: 0,
                                textAlign: 'left'
                            } })), style: Object.assign({ alignItems: 'center', background: 'rgba(255,255,255,1)', backgroundColor: '#007cf8', display: 'grid', gridAutoFlow: 'column', justifyContent: 'flex-start', minHeight: 30, padding: '0 10px' }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_h = this.props.onMouseEnter) === null || _h === void 0 ? void 0 : _h.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_j = this.props.onClick) === null || _j === void 0 ? void 0 : _j.bind(this), onDoubleClick: (_k = this.props.onDoubleClick) === null || _k === void 0 ? void 0 : _k.bind(this), onChange: (_l = this.props.onChange) === null || _l === void 0 ? void 0 : _l.bind(this), onInput: (_m = this.props.onInput) === null || _m === void 0 ? void 0 : _m.bind(this), onFocus: (_o = this.props.onFocus) === null || _o === void 0 ? void 0 : _o.bind(this), onBlur: (_p = this.props.onBlur) === null || _p === void 0 ? void 0 : _p.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "aspect-span", children: this.props.title, style: {
                                color: 'rgba(0,0,0,1)',
                                fontSize: 11,
                                fontWeight: 500,
                                letterSpacing: 0,
                                textAlign: 'left'
                            } })), style: Object.assign({ alignItems: 'center', background: 'rgba(255,255,255,1)', backgroundColor: 'rgba(255,255,255,1)', display: 'grid', gridAutoFlow: 'column', justifyContent: 'flex-start', minHeight: 36, padding: '0 10px' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (FigmaFileSyncItem) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    FigmaFileSyncItem.State = State;
})(FigmaFileSyncItem || (FigmaFileSyncItem = {}));
export class FigmaFileSyncView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new FigmaFileSyncView.State();
    }
    get customState() {
        if (this.props.isNestedList === true) {
            return 'nested';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        switch (this.customState) {
            case 'nested':
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement(SimpleButton, { children: this.props.headerBackIcon, style: {
                                        justifyContent: 'center'
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: this.props.title, style: {
                                                color: 'rgba(0,0,0,1)',
                                                fontSize: 10,
                                                fontWeight: 500,
                                                letterSpacing: 0.2,
                                                textAlign: 'left',
                                                textTransform: 'uppercase'
                                            } }),
                                        React.createElement("span", { className: "aspect-span", children: this.props.detail, style: {
                                                color: 'rgba(102,102,102,1)',
                                                fontSize: 12,
                                                fontWeight: 400,
                                                textAlign: 'left'
                                            } })), style: {
                                        display: 'grid',
                                        gap: 4
                                    } })), style: {
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
                            } }),
                        React.createElement("div", { className: "aspect-div", children: this.props.listItemViews, style: {
                                backgroundColor: 'rgba(255,255,255,1)',
                                marginTop: 4,
                                width: 297
                            } })), style: Object.assign({ alignContent: 'flex-start', backgroundColor: 'rgba(255,255,255,1)', boxShadow: '0 0 0 1px rgba(0,0,0,0.07)', display: 'grid', gridTemplateRows: 'auto 1fr', height: 280, justifyItems: 'flex-start', paddingBottom: 8, width: 297 }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_h = this.props.onMouseEnter) === null || _h === void 0 ? void 0 : _h.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_j = this.props.onClick) === null || _j === void 0 ? void 0 : _j.bind(this), onDoubleClick: (_k = this.props.onDoubleClick) === null || _k === void 0 ? void 0 : _k.bind(this), onChange: (_l = this.props.onChange) === null || _l === void 0 ? void 0 : _l.bind(this), onInput: (_m = this.props.onInput) === null || _m === void 0 ? void 0 : _m.bind(this), onFocus: (_o = this.props.onFocus) === null || _o === void 0 ? void 0 : _o.bind(this), onBlur: (_p = this.props.onBlur) === null || _p === void 0 ? void 0 : _p.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: this.props.title, style: {
                                        color: 'rgba(0,0,0,1)',
                                        fontSize: 10,
                                        fontWeight: 500,
                                        letterSpacing: 0.2,
                                        textAlign: 'left',
                                        textTransform: 'uppercase'
                                    } }),
                                React.createElement("span", { className: "aspect-span", children: this.props.detail, style: {
                                        color: 'rgba(102,102,102,1)',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        textAlign: 'left'
                                    } })), style: {
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
                            } }),
                        React.createElement("div", { className: "aspect-div", children: this.props.listItemViews, style: {
                                backgroundColor: 'rgba(255,255,255,1)',
                                marginTop: 4,
                                padding: '0 8px',
                                width: 297
                            } })), style: Object.assign({ alignContent: 'flex-start', backgroundColor: 'rgba(255,255,255,1)', boxShadow: '0 0 0 1px rgba(0,0,0,0.07)', display: 'grid', gridTemplateRows: 'auto 1fr', height: 280, justifyItems: 'flex-start', paddingBottom: 8, width: 297 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (FigmaFileSyncView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    FigmaFileSyncView.State = State;
})(FigmaFileSyncView || (FigmaFileSyncView = {}));
export class FigmaImportSettingsView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new FigmaImportSettingsView.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        switch (this.customState) {
            default:
                return (React.createElement(VStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                React.createElement("h1", { className: "aspect-h1", children: "Figma Import Settings", style: {
                                        fontSize: 17
                                    } })), style: {
                                boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
                                padding: 16
                            } }),
                        React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(SimpleButton, { onClick: (_h = this.props.accessTokenOnClick) === null || _h === void 0 ? void 0 : _h.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "Connect to Figma", style: {
                                                fontSize: 13
                                            } })), style: {
                                        minHeight: 36,
                                        padding: '0 16px'
                                    } }),
                                React.createElement(SimpleButton, { onClick: (_j = this.props.framesOnClick) === null || _j === void 0 ? void 0 : _j.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "Select frames to import", style: {
                                                fontSize: 13
                                            } })), style: {
                                        minHeight: 36,
                                        padding: '0 16px'
                                    } })), style: {
                                gap: 0
                            } })), style: Object.assign({ gap: 8, padding: '16px 32px', paddingBottom: 32, width: 340 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (FigmaImportSettingsView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    FigmaImportSettingsView.State = State;
})(FigmaImportSettingsView || (FigmaImportSettingsView = {}));
export class FigmaPluginErrorView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new FigmaPluginErrorView.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement(HStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "aspect-span", children: this.props.message, style: {
                                color: '#BA3D3D',
                                fontSize: 12,
                                fontWeight: 500
                            } })), style: Object.assign({ backgroundColor: '#fff', border: '1px solid #BA3D3D', borderRadius: 4, padding: '8px 12px' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (FigmaPluginErrorView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    FigmaPluginErrorView.State = State;
})(FigmaPluginErrorView || (FigmaPluginErrorView = {}));
export class FigmaPluginFrameItemView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new FigmaPluginFrameItemView.State();
    }
    get customState() {
        if (this.props.isSelected === true && this.state.isHovered === true) {
            return 'selected+hovered';
        }
        else if (this.props.isSelected === true) {
            return 'selected';
        }
        else if (this.state.isHovered === true) {
            return 'hovered';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
        switch (this.customState) {
            case 'hovered':
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: this.props.title, style: {
                                        color: 'rgba(0,0,0,1)',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } }),
                                React.createElement("span", { className: "aspect-span", children: this.props.detail, style: {
                                        color: 'rgba(151,151,151,1)',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } })), style: {
                                alignContent: 'center',
                                display: 'grid',
                                gap: 2,
                                justifyItems: 'flex-start'
                            } }),
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: this.props.accessoryText, style: {
                                        color: 'rgba(0,0,0,1)',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } }),
                                React.createElement(SimpleButton, { onClick: (_h = this.props.accessoryIconOnClick) === null || _h === void 0 ? void 0 : _h.bind(this), children: this.props.accessoryIcon, style: {
                                        justifyContent: 'center'
                                    } })) })), style: Object.assign({ alignItems: 'center', backgroundColor: 'rgba(255,255,255,1)', display: 'grid', gap: 16, gridAutoFlow: 'column', justifyContent: 'space-between', minHeight: 50, padding: '0 12px 0 20px' }, this.props.style), id: this.props.id }));
            case 'selected':
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_j = this.props.onMouseEnter) === null || _j === void 0 ? void 0 : _j.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_k = this.props.onClick) === null || _k === void 0 ? void 0 : _k.bind(this), onDoubleClick: (_l = this.props.onDoubleClick) === null || _l === void 0 ? void 0 : _l.bind(this), onChange: (_m = this.props.onChange) === null || _m === void 0 ? void 0 : _m.bind(this), onInput: (_o = this.props.onInput) === null || _o === void 0 ? void 0 : _o.bind(this), onFocus: (_p = this.props.onFocus) === null || _p === void 0 ? void 0 : _p.bind(this), onBlur: (_q = this.props.onBlur) === null || _q === void 0 ? void 0 : _q.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: this.props.title, style: {
                                        color: 'white',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } }),
                                React.createElement("span", { className: "aspect-span", children: this.props.detail, style: {
                                        color: 'white',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } })), style: {
                                alignContent: 'center',
                                display: 'grid',
                                gap: 2,
                                justifyItems: 'flex-start'
                            } })), style: Object.assign({ alignItems: 'center', backgroundColor: '#06f', display: 'grid', gap: 16, gridAutoFlow: 'column', justifyContent: 'space-between', minHeight: 50, padding: '0 20px' }, this.props.style), id: this.props.id }));
            case 'selected+hovered':
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_r = this.props.onMouseEnter) === null || _r === void 0 ? void 0 : _r.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_s = this.props.onClick) === null || _s === void 0 ? void 0 : _s.bind(this), onDoubleClick: (_t = this.props.onDoubleClick) === null || _t === void 0 ? void 0 : _t.bind(this), onChange: (_u = this.props.onChange) === null || _u === void 0 ? void 0 : _u.bind(this), onInput: (_v = this.props.onInput) === null || _v === void 0 ? void 0 : _v.bind(this), onFocus: (_w = this.props.onFocus) === null || _w === void 0 ? void 0 : _w.bind(this), onBlur: (_x = this.props.onBlur) === null || _x === void 0 ? void 0 : _x.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: this.props.title, style: {
                                        color: 'white',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } }),
                                React.createElement("span", { className: "aspect-span", children: this.props.detail, style: {
                                        color: 'white',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } })), style: {
                                alignContent: 'center',
                                display: 'grid',
                                gap: 2,
                                justifyItems: 'flex-start'
                            } }),
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: this.props.accessoryText, style: {
                                        color: 'white',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } }),
                                React.createElement(SimpleButton, { onClick: (_y = this.props.accessoryIconOnClick) === null || _y === void 0 ? void 0 : _y.bind(this), children: this.props.accessoryIcon, style: {
                                        justifyContent: 'center'
                                    } })) })), style: Object.assign({ alignItems: 'center', backgroundColor: '#06f', display: 'grid', gap: 16, gridAutoFlow: 'column', justifyContent: 'space-between', minHeight: 50, padding: '0 12px 0 20px' }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_z = this.props.onMouseEnter) === null || _z === void 0 ? void 0 : _z.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_0 = this.props.onClick) === null || _0 === void 0 ? void 0 : _0.bind(this), onDoubleClick: (_1 = this.props.onDoubleClick) === null || _1 === void 0 ? void 0 : _1.bind(this), onChange: (_2 = this.props.onChange) === null || _2 === void 0 ? void 0 : _2.bind(this), onInput: (_3 = this.props.onInput) === null || _3 === void 0 ? void 0 : _3.bind(this), onFocus: (_4 = this.props.onFocus) === null || _4 === void 0 ? void 0 : _4.bind(this), onBlur: (_5 = this.props.onBlur) === null || _5 === void 0 ? void 0 : _5.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: this.props.title, style: {
                                        color: 'rgba(0,0,0,1)',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } }),
                                React.createElement("span", { className: "aspect-span", children: this.props.detail, style: {
                                        color: 'rgba(151,151,151,1)',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } })), style: {
                                alignContent: 'center',
                                display: 'grid',
                                gap: 2,
                                justifyItems: 'flex-start'
                            } })), style: Object.assign({ alignItems: 'center', backgroundColor: 'rgba(255,255,255,1)', display: 'grid', gap: 16, gridAutoFlow: 'column', justifyContent: 'space-between', minHeight: 50, padding: '0 20px' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (FigmaPluginFrameItemView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    FigmaPluginFrameItemView.State = State;
})(FigmaPluginFrameItemView || (FigmaPluginFrameItemView = {}));
export class FigmaPluginItem extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new FigmaPluginItem.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "FigmaFileSyncSelection", style: {
                                        color: 'rgba(0,0,0,NaN)',
                                        fontSize: 12,
                                        opacity: 1
                                    } }),
                                React.createElement("span", { className: "aspect-span", children: "Aspect/Aspect Dev", style: {
                                        color: 'rgba(102,102,102,NaN)',
                                        fontSize: 10,
                                        opacity: 1
                                    } })), style: {
                                alignContent: 'center',
                                display: 'grid',
                                gap: 5.390625,
                                justifyItems: 'flex-start',
                                minHeight: 28,
                                opacity: 1,
                                width: 135
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "Go to frame", style: {
                                        color: 'rgba(0,0,0,NaN)',
                                        fontSize: 10,
                                        opacity: 1
                                    } }),
                                React.createElement("div", { className: "aspect-div", style: {
                                        backgroundColor: 'rgba(0,0,0,NaN)',
                                        minHeight: 1,
                                        opacity: 1,
                                        width: 16
                                    } })), style: {
                                alignItems: 'center',
                                display: 'grid',
                                gridAutoFlow: 'column',
                                justifyContent: 'space-between',
                                minHeight: 12,
                                opacity: 1,
                                width: 102
                            } })), style: Object.assign({ alignItems: 'center', backgroundColor: 'rgba(255,255,255,NaN)', display: 'grid', gridAutoFlow: 'column', justifyContent: 'space-between', minHeight: 50, opacity: 1, width: 366 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (FigmaPluginItem) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    FigmaPluginItem.State = State;
})(FigmaPluginItem || (FigmaPluginItem = {}));
export class FigmaPluginLoginView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new FigmaPluginLoginView.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        switch (this.customState) {
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div" }),
                        React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "aspect-div", children: this.props.logoView }),
                                React.createElement("div", { className: "aspect-div", onClick: (_h = this.props.signinOnClick) === null || _h === void 0 ? void 0 : _h.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement(SimpleButton, { children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: "Login", style: {
                                                        color: 'rgba(255,255,255,1)',
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                        letterSpacing: 0,
                                                        textAlign: 'center'
                                                    } })), style: {
                                                height: '100%',
                                                justifyContent: 'center',
                                                width: '100%'
                                            } })), style: {
                                        alignItems: 'center',
                                        backgroundColor: '#2c2c2c',
                                        display: 'flex',
                                        gridAutoFlow: 'column',
                                        justifyContent: 'center',
                                        minHeight: 32,
                                        width: 160
                                    } })), style: {
                                gap: 12,
                                justifyItems: 'center',
                                paddingBottom: 16,
                                width: '100%'
                            } }),
                        React.createElement("div", { className: "aspect-div", onClick: (_j = this.props.signupOnClick) === null || _j === void 0 ? void 0 : _j.bind(this), children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "Don\u2019t have an account?", style: {
                                        color: 'rgba(0,0,0,1)',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } }),
                                React.createElement("span", { className: "aspect-span", children: "Sign up", style: {
                                        color: 'rgba(0,0,0,1)',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } })), style: {
                                alignItems: 'center',
                                display: 'grid',
                                gridAutoFlow: 'column',
                                justifyContent: 'space-between',
                                width: 180
                            } })), style: Object.assign({ alignContent: 'space-between', backgroundColor: 'rgba(255,255,255,1)', cursor: 'default', display: 'grid', gap: 24, height: '100%', justifyItems: 'center', padding: 24, width: 276 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (FigmaPluginLoginView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    FigmaPluginLoginView.State = State;
})(FigmaPluginLoginView || (FigmaPluginLoginView = {}));
export class FigmaPluginView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new FigmaPluginView.State();
    }
    get customState() {
        if (this.props.isExporting === true) {
            return 'exportLoading';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        switch (this.customState) {
            case 'exportLoading':
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: this.props.title, style: {
                                        color: 'rgba(0,0,0,1)',
                                        fontSize: 10,
                                        fontWeight: 600,
                                        letterSpacing: 0,
                                        textAlign: 'right'
                                    } }),
                                React.createElement(SimpleButton, { onClick: (_h = this.props.signOutOnClick) === null || _h === void 0 ? void 0 : _h.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "Sign Out", style: {
                                                color: 'rgba(0,0,0,1)',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                letterSpacing: 0,
                                                textAlign: 'right'
                                            } })), style: {
                                        cursor: 'default',
                                        padding: '0 12px'
                                    } })), style: {
                                boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
                                justifyContent: 'space-between',
                                padding: '2px 0',
                                paddingLeft: 12,
                                paddingRight: 2,
                                width: '100%',
                                zIndex: 1
                            } }),
                        React.createElement(ScrollableList, { children: this.props.itemsView, style: {
                                position: 'relative',
                                width: '100%'
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement(SimpleButton, { onClick: (_j = this.props.secondaryActionOnClick) === null || _j === void 0 ? void 0 : _j.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: this.props.secondaryActionTitle, style: {
                                                color: 'rgba(0,0,0,1)',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                letterSpacing: 0,
                                                textAlign: 'right'
                                            } })), style: {
                                        cursor: 'default',
                                        minHeight: 28,
                                        padding: '0 12px'
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement(SimpleButton, { onClick: (_k = this.props.callToActionOnClick) === null || _k === void 0 ? void 0 : _k.bind(this), children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: this.props.callToAction, style: {
                                                        color: 'white',
                                                        fontSize: 12,
                                                        fontWeight: 500,
                                                        letterSpacing: 0,
                                                        textAlign: 'right'
                                                    } })), style: {
                                                cursor: 'default',
                                                minHeight: 28,
                                                padding: '0 12px'
                                            } })), style: {
                                        backgroundColor: '#06f'
                                    } })), style: {
                                alignItems: 'center',
                                backgroundColor: 'rgba(255,255,255,1)',
                                boxShadow: '0 -1px 0 0 rgba(0,0,0,0.1)',
                                display: 'grid',
                                gap: 8,
                                gridAutoFlow: 'column',
                                justifyContent: 'flex-end',
                                opacity: 0.5,
                                padding: '6px 12px 7px',
                                pointerEvents: 'none',
                                width: '100%',
                                zIndex: 1
                            } })), style: Object.assign({ alignContent: 'center', backgroundColor: 'rgba(255,255,255,1)', display: 'grid', gridTemplateRows: 'auto 1fr auto', height: 240, justifyItems: 'flex-start', width: 306 }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_l = this.props.onMouseEnter) === null || _l === void 0 ? void 0 : _l.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_m = this.props.onClick) === null || _m === void 0 ? void 0 : _m.bind(this), onDoubleClick: (_o = this.props.onDoubleClick) === null || _o === void 0 ? void 0 : _o.bind(this), onChange: (_p = this.props.onChange) === null || _p === void 0 ? void 0 : _p.bind(this), onInput: (_q = this.props.onInput) === null || _q === void 0 ? void 0 : _q.bind(this), onFocus: (_r = this.props.onFocus) === null || _r === void 0 ? void 0 : _r.bind(this), onBlur: (_s = this.props.onBlur) === null || _s === void 0 ? void 0 : _s.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: this.props.title, style: {
                                        color: 'rgba(0,0,0,1)',
                                        fontSize: 10,
                                        fontWeight: 600,
                                        letterSpacing: 0,
                                        textAlign: 'right'
                                    } }),
                                React.createElement(SimpleButton, { onClick: (_t = this.props.signOutOnClick) === null || _t === void 0 ? void 0 : _t.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: "Sign Out", style: {
                                                color: 'rgba(0,0,0,1)',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                letterSpacing: 0,
                                                textAlign: 'right'
                                            } })), style: {
                                        cursor: 'default',
                                        padding: '0 12px'
                                    } })), style: {
                                boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
                                justifyContent: 'space-between',
                                padding: '2px 0',
                                paddingLeft: 12,
                                paddingRight: 2,
                                width: '100%',
                                zIndex: 1
                            } }),
                        React.createElement(ScrollableList, { children: this.props.itemsView, style: {
                                position: 'relative',
                                width: '100%'
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement(SimpleButton, { onClick: (_u = this.props.secondaryActionOnClick) === null || _u === void 0 ? void 0 : _u.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement("span", { className: "aspect-span", children: this.props.secondaryActionTitle, style: {
                                                color: 'rgba(0,0,0,1)',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                letterSpacing: 0,
                                                textAlign: 'right'
                                            } })), style: {
                                        cursor: 'default',
                                        minHeight: 28,
                                        padding: '0 12px'
                                    } }),
                                React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                        React.createElement(SimpleButton, { onClick: (_v = this.props.callToActionOnClick) === null || _v === void 0 ? void 0 : _v.bind(this), children: React.createElement(React.Fragment, null,
                                                React.createElement("span", { className: "aspect-span", children: this.props.callToAction, style: {
                                                        color: 'white',
                                                        fontSize: 12,
                                                        fontWeight: 500,
                                                        letterSpacing: 0,
                                                        textAlign: 'right'
                                                    } })), style: {
                                                cursor: 'default',
                                                minHeight: 28,
                                                padding: '0 12px'
                                            } })), style: {
                                        backgroundColor: '#06f'
                                    } })), style: {
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
                            } })), style: Object.assign({ alignContent: 'center', backgroundColor: 'rgba(255,255,255,1)', display: 'grid', gridTemplateRows: 'auto 1fr auto', height: 240, justifyItems: 'flex-start', width: 306 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (FigmaPluginView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    FigmaPluginView.State = State;
})(FigmaPluginView || (FigmaPluginView = {}));
export class FloatingListView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new FloatingListView.State();
    }
    get customState() {
        if (this.props.isExpanded === true) {
            return 'expanded';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        switch (this.customState) {
            case 'expanded':
                return (React.createElement(VStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: this.props.title, style: {
                                        fontSize: 10,
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    } }),
                                React.createElement("input", { className: "aspect-input", onChange: (_h = this.props.inputOnChange) === null || _h === void 0 ? void 0 : _h.bind(this), defaultValue: this.props.inputDefaultValue, placeholder: "filter", spellCheck: false, type: "search", style: {
                                        borderColor: 'rgba(0,0,0, 0.1)',
                                        fontSize: 12,
                                        height: 22,
                                        outline: 'none',
                                        padding: '0 8px',
                                        width: '100%'
                                    } }),
                                React.createElement(SimpleButton, { onClick: (_j = this.props.accessoryButtonOnClick) === null || _j === void 0 ? void 0 : _j.bind(this), children: this.props.accessoryButtonIcon, style: {
                                        justifyContent: 'center',
                                        minHeight: 24
                                    } })), style: {
                                gap: 14,
                                gridTemplateColumns: '1fr',
                                minHeight: 36,
                                padding: '0 8px 0 16px',
                                width: '100%'
                            } }),
                        React.createElement(ScrollableList, { children: this.props.children, style: {
                                maxHeight: 160,
                                minHeight: '',
                                padding: 8,
                                width: '100%'
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)', gap: 0, overflow: 'hidden', width: 224 }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(HStack, { onMouseEnter: (_k = this.props.onMouseEnter) === null || _k === void 0 ? void 0 : _k.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_l = this.props.onClick) === null || _l === void 0 ? void 0 : _l.bind(this), onDoubleClick: (_m = this.props.onDoubleClick) === null || _m === void 0 ? void 0 : _m.bind(this), onChange: (_o = this.props.onChange) === null || _o === void 0 ? void 0 : _o.bind(this), onInput: (_p = this.props.onInput) === null || _p === void 0 ? void 0 : _p.bind(this), onFocus: (_q = this.props.onFocus) === null || _q === void 0 ? void 0 : _q.bind(this), onBlur: (_r = this.props.onBlur) === null || _r === void 0 ? void 0 : _r.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontSize: 10,
                                fontWeight: 600,
                                textTransform: 'uppercase'
                            } }),
                        React.createElement(Text, { text: this.props.detail, style: {
                                fontSize: 11,
                                fontWeight: 500,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)', gap: 14, gridTemplateColumns: '1fr', justifyContent: 'space-between', minHeight: 36, padding: '0 16px', width: '100%' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (FloatingListView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    FloatingListView.State = State;
})(FloatingListView || (FloatingListView = {}));
export class HStack extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new HStack.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: this.props.children, style: Object.assign({ alignItems: 'center', boxSizing: 'border-box', display: 'grid', gap: '8px', gridAutoFlow: 'column', justifyContent: 'flex-start' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (HStack) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    HStack.State = State;
})(HStack || (HStack = {}));
export class ImportButtonDropdown extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ImportButtonDropdown.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        switch (this.customState) {
            default:
                return (React.createElement(VStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(SimpleButton, { onClick: (_h = this.props.importOnClick) === null || _h === void 0 ? void 0 : _h.bind(this), children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "Import from Figma" })), style: {
                                padding: '10px 12px',
                                width: '100%'
                            } }),
                        React.createElement("div", { className: "aspect-div", style: {
                                backgroundColor: 'rgba(0,0,0,0.07)',
                                height: 1
                            } }),
                        React.createElement(SimpleButton, { onClick: (_j = this.props.optionsOnClick) === null || _j === void 0 ? void 0 : _j.bind(this), children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "Options" })), style: {
                                padding: '10px 12px',
                                width: '100%'
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0,0,0,0.05)', fontSize: 12, fontWeight: 500, gap: 0, lineHeight: 1.4, padding: 8, width: 224 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ImportButtonDropdown) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ImportButtonDropdown.State = State;
})(ImportButtonDropdown || (ImportButtonDropdown = {}));
export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new LandingPage.State();
    }
    get customState() {
        if (this.props.size === 'tablet') {
            return 'tablet';
        }
        else if (this.props.size === 'mobile') {
            return 'mobile';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
        switch (this.customState) {
            case 'tablet':
                return (React.createElement(VStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(LandingPageRow, { children: React.createElement(React.Fragment, null,
                                React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                        React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                                React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                                        React.createElement("h1", { className: "aspect-h1", children: "Build UI, fast", style: {
                                                                fontSize: 48
                                                            } }),
                                                        React.createElement(Text, { text: "Create React components visually. Sync to your codebase.", style: {
                                                                fontSize: 21
                                                            } }),
                                                        React.createElement(Text, { text: "Aspect was built using Aspect.", style: {
                                                                color: 'rgb(102, 110, 117)',
                                                                fontSize: 16,
                                                                fontWeight: 500
                                                            } })), style: {
                                                        gap: 12,
                                                        justifyItems: 'center',
                                                        textAlign: 'center'
                                                    } }),
                                                React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                                        React.createElement(LandingPageCallToActionButton, { onClick: (_h = this.props.onSignupClick) === null || _h === void 0 ? void 0 : _h.bind(this), text: "Get started for free", style: {
                                                                padding: '0 20px'
                                                            } })), style: {
                                                        gap: 12,
                                                        justifyContent: 'center'
                                                    } })), style: {
                                                gap: 24
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("img", { className: "aspect-img", src: "https://dev.aspect.app/static/media/aspect-video-thumbnail.jpg", style: {
                                                        width: '100%'
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", onClick: (_j = this.props.playViewOnClick) === null || _j === void 0 ? void 0 : _j.bind(this), children: this.props.playView, style: {
                                                        alignItems: 'center',
                                                        bottom: 0,
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        left: 0,
                                                        position: 'absolute',
                                                        right: 0,
                                                        top: 0
                                                    } })), style: {
                                                position: 'relative'
                                            } })), style: {
                                        gap: 36
                                    } })) }),
                        React.createElement(LandingPageHeader, { children: React.createElement(React.Fragment, null,
                                React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                        React.createElement("a", { className: "aspect-a", children: this.props.headerLogoView, href: "https://dev.aspect.app", target: "" })), style: {
                                        height: '100%'
                                    } }),
                                React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                        React.createElement(LandingPageHeaderButton, { onClick: (_k = this.props.onLoginClick) === null || _k === void 0 ? void 0 : _k.bind(this), text: "Log in" }),
                                        React.createElement(LandingPageCallToActionButton, { onClick: (_l = this.props.onSignupClick) === null || _l === void 0 ? void 0 : _l.bind(this), text: "Try Aspect Free" })), style: {
                                        gap: 12,
                                        height: '100%'
                                    } })), style: {
                                backgroundColor: '#fff',
                                position: 'fixed',
                                top: 0,
                                width: '100%'
                            } }),
                        React.createElement(LandingPageRow, { children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "\u00A9 Metacode, Inc. dba Aspect", style: {
                                        color: 'rgb(102, 110, 117)'
                                    } })), style: {
                                padding: 80
                            } })), style: Object.assign({ gap: 0, maxWidth: '100%', minWidth: '100%', paddingTop: 'calc(72px + 24px)', position: 'relative', width: 1000 }, this.props.style), id: this.props.id }));
            case 'mobile':
                return (React.createElement(VStack, { onMouseEnter: (_m = this.props.onMouseEnter) === null || _m === void 0 ? void 0 : _m.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_o = this.props.onClick) === null || _o === void 0 ? void 0 : _o.bind(this), onDoubleClick: (_p = this.props.onDoubleClick) === null || _p === void 0 ? void 0 : _p.bind(this), onChange: (_q = this.props.onChange) === null || _q === void 0 ? void 0 : _q.bind(this), onInput: (_r = this.props.onInput) === null || _r === void 0 ? void 0 : _r.bind(this), onFocus: (_s = this.props.onFocus) === null || _s === void 0 ? void 0 : _s.bind(this), onBlur: (_t = this.props.onBlur) === null || _t === void 0 ? void 0 : _t.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(LandingPageRow, { children: React.createElement(React.Fragment, null,
                                React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                        React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                                React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                                        React.createElement("h1", { className: "aspect-h1", children: "Build UI, fast", style: {
                                                                fontSize: 44
                                                            } }),
                                                        React.createElement(Text, { text: "Create React components visually. Sync to your codebase.", style: {
                                                                fontSize: 18,
                                                                width: 320
                                                            } }),
                                                        React.createElement(Text, { text: "Aspect was built using Aspect.", style: {
                                                                color: 'rgb(102, 110, 117)',
                                                                fontSize: 16,
                                                                fontWeight: 500
                                                            } })), style: {
                                                        gap: 12,
                                                        justifyItems: 'center',
                                                        textAlign: 'center'
                                                    } }),
                                                React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                                        React.createElement(LandingPageCallToActionButton, { onClick: (_u = this.props.onSignupClick) === null || _u === void 0 ? void 0 : _u.bind(this), text: "Get started for free", style: {
                                                                padding: '0 20px'
                                                            } })), style: {
                                                        gap: 12,
                                                        justifyContent: 'center'
                                                    } })), style: {
                                                gap: 24
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("img", { className: "aspect-img", src: "https://dev.aspect.app/static/media/aspect-video-thumbnail.jpg", style: {
                                                        width: '100%'
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", onClick: (_v = this.props.playViewOnClick) === null || _v === void 0 ? void 0 : _v.bind(this), children: this.props.playView, style: {
                                                        alignItems: 'center',
                                                        bottom: 0,
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        left: 0,
                                                        position: 'absolute',
                                                        right: 0,
                                                        top: 0
                                                    } })), style: {
                                                position: 'relative'
                                            } })), style: {
                                        gap: 36
                                    } })), style: {
                                padding: '0 24px'
                            } }),
                        React.createElement(LandingPageHeader, { children: React.createElement(React.Fragment, null,
                                React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                        React.createElement("a", { className: "aspect-a", children: this.props.headerLogoView, href: "https://dev.aspect.app", target: "" })), style: {
                                        height: '100%'
                                    } }),
                                React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                        React.createElement(LandingPageCallToActionButton, { onClick: (_w = this.props.onSignupClick) === null || _w === void 0 ? void 0 : _w.bind(this), text: "Sign In" })), style: {
                                        gap: 12,
                                        height: '100%'
                                    } })), style: {
                                backgroundColor: '#fff',
                                padding: '0 24px',
                                position: 'absolute',
                                top: 0,
                                width: '100%'
                            } }),
                        React.createElement(LandingPageRow, { children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "\u00A9 Metacode, Inc. dba Aspect", style: {
                                        color: 'rgb(102, 110, 117)'
                                    } })), style: {
                                padding: '40px 24px'
                            } })), style: Object.assign({ gap: 0, maxWidth: '100%', minWidth: '100%', paddingTop: 'calc(72px + 24px)', position: 'relative', width: 380 }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(VStack, { onMouseEnter: (_x = this.props.onMouseEnter) === null || _x === void 0 ? void 0 : _x.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_y = this.props.onClick) === null || _y === void 0 ? void 0 : _y.bind(this), onDoubleClick: (_z = this.props.onDoubleClick) === null || _z === void 0 ? void 0 : _z.bind(this), onChange: (_0 = this.props.onChange) === null || _0 === void 0 ? void 0 : _0.bind(this), onInput: (_1 = this.props.onInput) === null || _1 === void 0 ? void 0 : _1.bind(this), onFocus: (_2 = this.props.onFocus) === null || _2 === void 0 ? void 0 : _2.bind(this), onBlur: (_3 = this.props.onBlur) === null || _3 === void 0 ? void 0 : _3.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(LandingPageRow, { children: React.createElement(React.Fragment, null,
                                React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                        React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                                React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                                        React.createElement("h1", { className: "aspect-h1", children: "Build UI, fast", style: {
                                                                fontSize: 48
                                                            } }),
                                                        React.createElement(Text, { text: "Create  React components visually. Sync to your codebase.", style: {
                                                                fontSize: 21
                                                            } }),
                                                        React.createElement(Text, { text: "Aspect was built using Aspect.", style: {
                                                                color: 'rgb(102, 110, 117)',
                                                                fontSize: 16,
                                                                fontWeight: 500
                                                            } })), style: {
                                                        gap: 12,
                                                        justifyItems: 'center',
                                                        textAlign: 'center'
                                                    } }),
                                                React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                                        React.createElement(LandingPageCallToActionButton, { onClick: (_4 = this.props.onSignupClick) === null || _4 === void 0 ? void 0 : _4.bind(this), text: "Get started for free", style: {
                                                                padding: '0 20px'
                                                            } })), style: {
                                                        gap: 12,
                                                        justifyContent: 'center'
                                                    } })), style: {
                                                gap: 24
                                            } }),
                                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                                React.createElement("img", { className: "aspect-img", src: "https://dev.aspect.app/static/media/aspect-video-thumbnail.jpg", style: {
                                                        width: '100%'
                                                    } }),
                                                React.createElement("div", { className: "aspect-div", onClick: (_5 = this.props.playViewOnClick) === null || _5 === void 0 ? void 0 : _5.bind(this), children: this.props.playView, style: {
                                                        alignItems: 'center',
                                                        bottom: 0,
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        left: 0,
                                                        position: 'absolute',
                                                        right: 0,
                                                        top: 0
                                                    } })), style: {
                                                position: 'relative'
                                            } })), style: {
                                        gap: 24
                                    } })) }),
                        React.createElement(LandingPageHeader, { children: React.createElement(React.Fragment, null,
                                React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                        React.createElement("a", { className: "aspect-a", children: this.props.headerLogoView, href: "https://dev.aspect.app", target: "" })), style: {
                                        height: '100%'
                                    } }),
                                React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                        React.createElement(LandingPageHeaderButton, { onClick: (_6 = this.props.onLoginClick) === null || _6 === void 0 ? void 0 : _6.bind(this), text: "Log in" }),
                                        React.createElement(LandingPageCallToActionButton, { onClick: (_7 = this.props.onSignupClick) === null || _7 === void 0 ? void 0 : _7.bind(this), text: "Use Aspect Free" })), style: {
                                        gap: 12,
                                        height: '100%'
                                    } })), style: {
                                backgroundColor: '#fff',
                                position: 'fixed',
                                top: 0,
                                width: '100%'
                            } }),
                        React.createElement(LandingPageRow, { children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "\u00A9 Metacode, Inc. dba Aspect", style: {
                                        color: 'rgb(102, 110, 117)'
                                    } })), style: {
                                padding: 80
                            } })), style: Object.assign({ gap: 0, maxWidth: '100%', minWidth: '100%', paddingTop: 'calc(72px + 24px)', position: 'relative', width: 1000 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (LandingPage) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    LandingPage.State = State;
})(LandingPage || (LandingPage = {}));
export class LandingPageCallToActionButton extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new LandingPageCallToActionButton.State();
    }
    get customState() {
        if (this.state.isPressed === true) {
            return 'pressed';
        }
        else if (this.state.isHovered === true) {
            return 'hovered';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        switch (this.customState) {
            case 'hovered':
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "aspect-span", children: this.props.text, style: {
                                fontSize: 15,
                                fontWeight: 600,
                                userSelect: 'none'
                            } })), style: Object.assign({ alignItems: 'center', backgroundColor: 'rgb(248,248,248)', border: '1px solid rgba(230,230,230)', boxSizing: 'border-box', cursor: 'pointer', display: 'grid', gap: '8px', gridAutoFlow: 'column', height: 42, justifyContent: 'flex-start', padding: '0 16px' }, this.props.style), id: this.props.id }));
            case 'pressed':
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_h = this.props.onMouseEnter) === null || _h === void 0 ? void 0 : _h.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_j = this.props.onClick) === null || _j === void 0 ? void 0 : _j.bind(this), onDoubleClick: (_k = this.props.onDoubleClick) === null || _k === void 0 ? void 0 : _k.bind(this), onChange: (_l = this.props.onChange) === null || _l === void 0 ? void 0 : _l.bind(this), onInput: (_m = this.props.onInput) === null || _m === void 0 ? void 0 : _m.bind(this), onFocus: (_o = this.props.onFocus) === null || _o === void 0 ? void 0 : _o.bind(this), onBlur: (_p = this.props.onBlur) === null || _p === void 0 ? void 0 : _p.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "aspect-span", children: this.props.text, style: {
                                fontSize: 15,
                                fontWeight: 600
                            } })), style: Object.assign({ alignItems: 'center', backgroundColor: 'rgb(240,240,240)', border: '1px solid rgba(230,230,230)', boxSizing: 'border-box', cursor: 'pointer', display: 'grid', gap: '8px', gridAutoFlow: 'column', height: 42, justifyContent: 'flex-start', padding: '0 16px', userSelect: 'none' }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_q = this.props.onMouseEnter) === null || _q === void 0 ? void 0 : _q.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_r = this.props.onClick) === null || _r === void 0 ? void 0 : _r.bind(this), onDoubleClick: (_s = this.props.onDoubleClick) === null || _s === void 0 ? void 0 : _s.bind(this), onChange: (_t = this.props.onChange) === null || _t === void 0 ? void 0 : _t.bind(this), onInput: (_u = this.props.onInput) === null || _u === void 0 ? void 0 : _u.bind(this), onFocus: (_v = this.props.onFocus) === null || _v === void 0 ? void 0 : _v.bind(this), onBlur: (_w = this.props.onBlur) === null || _w === void 0 ? void 0 : _w.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "aspect-span", children: this.props.text, style: {
                                fontSize: 15,
                                fontWeight: 600
                            } })), style: Object.assign({ alignItems: 'center', backgroundColor: '#fff', border: '1px solid rgba(230,230,230)', boxShadow: '0 0 1px 1px rgba(0,0,0,0.02)', boxSizing: 'border-box', cursor: 'pointer', display: 'grid', gap: '8px', gridAutoFlow: 'column', height: 42, justifyContent: 'flex-start', padding: '0 16px', userSelect: 'none' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (LandingPageCallToActionButton) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    LandingPageCallToActionButton.State = State;
})(LandingPageCallToActionButton || (LandingPageCallToActionButton = {}));
export class LandingPageHeader extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new LandingPageHeader.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            case 'medium':
                return (null);
            case 'small':
                return (null);
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(HStack, { children: this.props.children, style: {
                                justifyContent: 'space-between',
                                maxWidth: 1200,
                                width: '100%'
                            } })), style: Object.assign({ display: 'flex', justifyContent: 'center', minHeight: 72, padding: '0 80px' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (LandingPageHeader) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    LandingPageHeader.State = State;
})(LandingPageHeader || (LandingPageHeader = {}));
export class LandingPageHeaderButton extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new LandingPageHeaderButton.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement(SimpleButton, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.text, style: {
                                color: 'rgb(102, 110, 117)',
                                fontSize: 14,
                                fontWeight: 500
                            } })), style: Object.assign({ cursor: 'pointer', height: 32, padding: '0 10px', userSelect: 'none', width: 'fit-content' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (LandingPageHeaderButton) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    LandingPageHeaderButton.State = State;
})(LandingPageHeaderButton || (LandingPageHeaderButton = {}));
export class LandingPageRow extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new LandingPageRow.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(VStack, { children: this.props.children, style: {
                                maxWidth: 1200
                            } })), style: Object.assign({ display: 'flex', justifyContent: 'center', padding: '0 80px' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (LandingPageRow) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    LandingPageRow.State = State;
})(LandingPageRow || (LandingPageRow = {}));
export class ModalView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ModalView.State();
    }
    get customState() {
        if (this.props.isScrollable === false) {
            return 'noscroll';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        switch (this.customState) {
            case 'noscroll':
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onClickClose && this.props.onClickClose(e);
                        this.props.onClick && this.props.onClick(e);
                    }, onDoubleClick: (_b = this.props.onDoubleClick) === null || _b === void 0 ? void 0 : _b.bind(this), onChange: (_c = this.props.onChange) === null || _c === void 0 ? void 0 : _c.bind(this), onInput: (_d = this.props.onInput) === null || _d === void 0 ? void 0 : _d.bind(this), onFocus: (_e = this.props.onFocus) === null || _e === void 0 ? void 0 : _e.bind(this), onBlur: (_f = this.props.onBlur) === null || _f === void 0 ? void 0 : _f.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", onClick: (_g = this.props.onClickContent) === null || _g === void 0 ? void 0 : _g.bind(this), children: this.props.children, style: {
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
                            } })), style: Object.assign({ alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', height: '100vh', justifyContent: 'center', left: '0', padding: '24px', position: 'fixed', top: '0', width: '100vw', zIndex: 5 }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_h = this.props.onMouseEnter) === null || _h === void 0 ? void 0 : _h.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onClickClose && this.props.onClickClose(e);
                        this.props.onClick && this.props.onClick(e);
                    }, onDoubleClick: (_j = this.props.onDoubleClick) === null || _j === void 0 ? void 0 : _j.bind(this), onChange: (_k = this.props.onChange) === null || _k === void 0 ? void 0 : _k.bind(this), onInput: (_l = this.props.onInput) === null || _l === void 0 ? void 0 : _l.bind(this), onFocus: (_m = this.props.onFocus) === null || _m === void 0 ? void 0 : _m.bind(this), onBlur: (_o = this.props.onBlur) === null || _o === void 0 ? void 0 : _o.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", onClick: (_p = this.props.onClickContent) === null || _p === void 0 ? void 0 : _p.bind(this), children: this.props.children, style: {
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
                            } })), style: Object.assign({ alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', height: '100vh', justifyContent: 'center', left: '0', padding: '24px', position: 'fixed', top: '0', width: '100vw', zIndex: 5 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ModalView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ModalView.State = State;
})(ModalView || (ModalView = {}));
export class ProjectSettingsView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ProjectSettingsView.State();
    }
    get customState() {
        if (this.props.didCopyApiKey === true) {
            return 'copiedApiKey';
        }
        else if (this.props.didCopyProjectId === true) {
            return 'copiedProjectId';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
        switch (this.customState) {
            case 'copiedApiKey':
                return (React.createElement(VStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement("h1", { className: "aspect-h1", children: this.props.title, style: {
                                        fontSize: 17
                                    } })), style: {
                                boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
                                justifyContent: 'space-between',
                                marginBottom: 8,
                                padding: 16,
                                width: '100%'
                            } }),
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Project ID", style: {
                                        fontWeight: 500
                                    } }),
                                React.createElement(Text, { text: this.props.projectId, style: {
                                        border: '1px solid #ddd',
                                        fontSize: 13,
                                        padding: '6px 10px'
                                    } })), style: {
                                justifyContent: 'space-between',
                                width: '100%'
                            } }),
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "API Key", style: {
                                        fontWeight: 500
                                    } }),
                                React.createElement(Text, { text: "API key copied!", style: {
                                        border: '1px solid #ddd',
                                        fontSize: 13,
                                        padding: '6px 10px'
                                    } })), style: {
                                justifyContent: 'space-between',
                                width: '100%'
                            } }),
                        React.createElement(SimpleButton, { onClick: (_h = this.props.onCreateApiKeyClick) === null || _h === void 0 ? void 0 : _h.bind(this), children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Generate new API key", style: {
                                        minHeight: 0
                                    } })), style: {
                                border: '1px solid #ddd',
                                justifySelf: 'end',
                                padding: '6px 12px',
                                width: 'fit-content'
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Export directly into your codebase using the API key and " }),
                                React.createElement("a", { className: "aspect-a", children: React.createElement(React.Fragment, null,
                                        React.createElement(Text, { text: "Aspect CLI" })), href: "https://www.npmjs.com/package/@metacode-inc/aspect", target: "_blank" })), style: {
                                padding: '20px 0'
                            } }),
                        React.createElement(SimpleButton, { onClick: (_j = this.props.didClickSignOut) === null || _j === void 0 ? void 0 : _j.bind(this), children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Sign Out", style: {
                                        minHeight: 0
                                    } })), style: {
                                border: '1px solid #ddd',
                                justifySelf: 'end',
                                padding: '6px 12px',
                                width: 'fit-content'
                            } })), style: Object.assign({ fontSize: 13, gap: 14, minHeight: 166, minWidth: 400, padding: 40, width: '100%' }, this.props.style), id: this.props.id }));
            case 'copiedProjectId':
                return (React.createElement(VStack, { onMouseEnter: (_k = this.props.onMouseEnter) === null || _k === void 0 ? void 0 : _k.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_l = this.props.onClick) === null || _l === void 0 ? void 0 : _l.bind(this), onDoubleClick: (_m = this.props.onDoubleClick) === null || _m === void 0 ? void 0 : _m.bind(this), onChange: (_o = this.props.onChange) === null || _o === void 0 ? void 0 : _o.bind(this), onInput: (_p = this.props.onInput) === null || _p === void 0 ? void 0 : _p.bind(this), onFocus: (_q = this.props.onFocus) === null || _q === void 0 ? void 0 : _q.bind(this), onBlur: (_r = this.props.onBlur) === null || _r === void 0 ? void 0 : _r.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement("h1", { className: "aspect-h1", children: this.props.title, style: {
                                        fontSize: 17
                                    } })), style: {
                                boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
                                justifyContent: 'space-between',
                                marginBottom: 8,
                                padding: 16,
                                width: '100%'
                            } }),
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Project ID", style: {
                                        fontWeight: 500
                                    } }),
                                React.createElement(Text, { text: "Project ID copied!", style: {
                                        border: '1px solid #ddd',
                                        fontSize: 13,
                                        padding: '6px 10px'
                                    } })), style: {
                                justifyContent: 'space-between',
                                width: '100%'
                            } }),
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "API Key", style: {
                                        fontWeight: 500
                                    } }),
                                React.createElement(SimpleButton, { onClick: (_s = this.props.onApiKeyClick) === null || _s === void 0 ? void 0 : _s.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement(Text, { text: this.props.apiKey, style: {
                                                fontSize: 13
                                            } })), style: {
                                        border: '1px solid #ddd',
                                        padding: '6px 10px',
                                        width: 'fit-content'
                                    } })), style: {
                                justifyContent: 'space-between',
                                width: '100%'
                            } }),
                        React.createElement(SimpleButton, { onClick: (_t = this.props.onCreateApiKeyClick) === null || _t === void 0 ? void 0 : _t.bind(this), children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Generate new API key", style: {
                                        minHeight: 0
                                    } })), style: {
                                border: '1px solid #ddd',
                                justifySelf: 'end',
                                padding: '6px 12px',
                                width: 'fit-content'
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Export directly into your codebase using the API key and " }),
                                React.createElement("a", { className: "aspect-a", children: React.createElement(React.Fragment, null,
                                        React.createElement(Text, { text: "Aspect CLI" })), href: "https://www.npmjs.com/package/@metacode-inc/aspect", target: "_blank" })), style: {
                                padding: '20px 0'
                            } }),
                        React.createElement(SimpleButton, { onClick: (_u = this.props.didClickSignOut) === null || _u === void 0 ? void 0 : _u.bind(this), children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Sign Out", style: {
                                        minHeight: 0
                                    } })), style: {
                                border: '1px solid #ddd',
                                justifySelf: 'end',
                                padding: '6px 12px',
                                width: 'fit-content'
                            } })), style: Object.assign({ fontSize: 13, gap: 14, minHeight: 166, minWidth: 400, padding: 40, width: '100%' }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(VStack, { onMouseEnter: (_v = this.props.onMouseEnter) === null || _v === void 0 ? void 0 : _v.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_w = this.props.onClick) === null || _w === void 0 ? void 0 : _w.bind(this), onDoubleClick: (_x = this.props.onDoubleClick) === null || _x === void 0 ? void 0 : _x.bind(this), onChange: (_y = this.props.onChange) === null || _y === void 0 ? void 0 : _y.bind(this), onInput: (_z = this.props.onInput) === null || _z === void 0 ? void 0 : _z.bind(this), onFocus: (_0 = this.props.onFocus) === null || _0 === void 0 ? void 0 : _0.bind(this), onBlur: (_1 = this.props.onBlur) === null || _1 === void 0 ? void 0 : _1.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement("h1", { className: "aspect-h1", children: this.props.title, style: {
                                        fontSize: 17
                                    } })), style: {
                                boxShadow: '0 1px 0 0 rgba(0,0,0,0.1)',
                                justifyContent: 'space-between',
                                marginBottom: 8,
                                padding: 16,
                                width: '100%'
                            } }),
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Project ID", style: {
                                        fontWeight: 500
                                    } }),
                                React.createElement(SimpleButton, { onClick: (_2 = this.props.onProjectIdClick) === null || _2 === void 0 ? void 0 : _2.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement(Text, { text: this.props.projectId, style: {
                                                fontSize: 13
                                            } })), style: {
                                        border: '1px solid #ddd',
                                        padding: '6px 10px',
                                        width: 'fit-content'
                                    } })), style: {
                                justifyContent: 'space-between',
                                width: '100%'
                            } }),
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "API Key", style: {
                                        fontWeight: 500
                                    } }),
                                React.createElement(SimpleButton, { onClick: (_3 = this.props.onApiKeyClick) === null || _3 === void 0 ? void 0 : _3.bind(this), children: React.createElement(React.Fragment, null,
                                        React.createElement(Text, { text: this.props.apiKey, style: {
                                                fontSize: 13
                                            } })), style: {
                                        border: '1px solid #ddd',
                                        padding: '6px 10px',
                                        width: 'fit-content'
                                    } })), style: {
                                justifyContent: 'space-between',
                                width: '100%'
                            } }),
                        React.createElement(SimpleButton, { onClick: (_4 = this.props.onCreateApiKeyClick) === null || _4 === void 0 ? void 0 : _4.bind(this), children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Generate new API key", style: {
                                        minHeight: 0
                                    } })), style: {
                                border: '1px solid #ddd',
                                justifySelf: 'end',
                                padding: '6px 12px',
                                width: 'fit-content'
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Export directly into your codebase using the API key and " }),
                                React.createElement("a", { className: "aspect-a", children: React.createElement(React.Fragment, null,
                                        React.createElement(Text, { text: "Aspect CLI" })), href: "https://www.npmjs.com/package/@metacode-inc/aspect", target: "_blank" })), style: {
                                padding: '20px 0'
                            } }),
                        React.createElement(SimpleButton, { onClick: (_5 = this.props.didClickSignOut) === null || _5 === void 0 ? void 0 : _5.bind(this), children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: "Sign Out", style: {
                                        minHeight: 0
                                    } })), style: {
                                border: '1px solid #ddd',
                                justifySelf: 'end',
                                padding: '6px 12px',
                                width: 'fit-content'
                            } })), style: Object.assign({ fontSize: 13, gap: 14, minHeight: 166, minWidth: 400, padding: 40, userSelect: 'auto', width: '100%' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ProjectSettingsView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ProjectSettingsView.State = State;
})(ProjectSettingsView || (ProjectSettingsView = {}));
export class ProjectViewActionButton extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ProjectViewActionButton.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(SimpleButton, { children: this.props.children, style: {
                                cursor: 'default',
                                padding: '0 12px',
                                userSelect: 'none',
                                width: '100%'
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0,0,0,0.05)', display: 'grid', minHeight: 32 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ProjectViewActionButton) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ProjectViewActionButton.State = State;
})(ProjectViewActionButton || (ProjectViewActionButton = {}));
export class ProjectViewButton extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ProjectViewButton.State();
    }
    get customState() {
        if (this.props.isEditing === true) {
            return 'editing';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        switch (this.customState) {
            case 'editing':
                return (React.createElement(HStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("input", { className: "aspect-input" }),
                        React.createElement(SimpleButton, { onClick: (_h = this.props.onSettingsClick) === null || _h === void 0 ? void 0 : _h.bind(this), children: this.props.buttonIcon, style: {
                                justifyContent: 'center',
                                minHeight: 24,
                                width: 28
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)', justifyContent: 'space-between', minHeight: 36, paddingLeft: 16, paddingRight: 8, width: 224 }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(HStack, { onMouseEnter: (_j = this.props.onMouseEnter) === null || _j === void 0 ? void 0 : _j.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_k = this.props.onClick) === null || _k === void 0 ? void 0 : _k.bind(this), onDoubleClick: (_l = this.props.onDoubleClick) === null || _l === void 0 ? void 0 : _l.bind(this), onChange: (_m = this.props.onChange) === null || _m === void 0 ? void 0 : _m.bind(this), onInput: (_o = this.props.onInput) === null || _o === void 0 ? void 0 : _o.bind(this), onFocus: (_p = this.props.onFocus) === null || _p === void 0 ? void 0 : _p.bind(this), onBlur: (_q = this.props.onBlur) === null || _q === void 0 ? void 0 : _q.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontSize: 11,
                                fontWeight: 500
                            } }),
                        React.createElement(SimpleButton, { onClick: (_r = this.props.onSettingsClick) === null || _r === void 0 ? void 0 : _r.bind(this), children: this.props.buttonIcon, style: {
                                justifyContent: 'center',
                                minHeight: 24,
                                width: 28
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)', justifyContent: 'space-between', minHeight: 36, paddingLeft: 16, paddingRight: 8, width: 224 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ProjectViewButton) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ProjectViewButton.State = State;
})(ProjectViewButton || (ProjectViewButton = {}));
export class PropertyFloatingView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new PropertyFloatingView.State();
    }
    get customState() {
        if (this.props.isExpanded === true) {
            return 'expanded';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        switch (this.customState) {
            case 'expanded':
                return (React.createElement(VStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(HStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(Text, { text: this.props.title, style: {
                                        fontSize: 10,
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    } }),
                                React.createElement("input", { className: "aspect-input", onChange: (_h = this.props.inputOnChange) === null || _h === void 0 ? void 0 : _h.bind(this), placeholder: "filter", spellCheck: false, type: "search", style: {
                                        borderColor: 'rgba(0,0,0, 0.1)',
                                        fontSize: 12,
                                        height: 22,
                                        outline: 'none',
                                        padding: '0 8px',
                                        width: '100%'
                                    } })), style: {
                                boxShadow: '0 1px 0 0 rgba(0,0,0,0.07)',
                                gap: 14,
                                gridTemplateColumns: '1fr',
                                minHeight: 36,
                                padding: '0 16px',
                                width: '100%',
                                zIndex: 1
                            } }),
                        React.createElement(ScrollableList, { children: this.props.children, style: {
                                maxHeight: 160,
                                minHeight: '',
                                padding: '4px 0',
                                width: '100%'
                            } })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)', gap: 0, overflow: 'hidden', paddingBottom: 12, width: 224 }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(HStack, { onMouseEnter: (_j = this.props.onMouseEnter) === null || _j === void 0 ? void 0 : _j.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_k = this.props.onClick) === null || _k === void 0 ? void 0 : _k.bind(this), onDoubleClick: (_l = this.props.onDoubleClick) === null || _l === void 0 ? void 0 : _l.bind(this), onChange: (_m = this.props.onChange) === null || _m === void 0 ? void 0 : _m.bind(this), onInput: (_o = this.props.onInput) === null || _o === void 0 ? void 0 : _o.bind(this), onFocus: (_p = this.props.onFocus) === null || _p === void 0 ? void 0 : _p.bind(this), onBlur: (_q = this.props.onBlur) === null || _q === void 0 ? void 0 : _q.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontSize: 10,
                                fontWeight: 600,
                                textTransform: 'uppercase'
                            } }),
                        React.createElement(HStack, { children: this.props.accessoryView })), style: Object.assign({ backgroundColor: '#fff', boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)', gap: 14, gridTemplateColumns: '1fr', justifyContent: 'space-between', minHeight: 36, padding: '0 16px', width: '100%' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (PropertyFloatingView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    PropertyFloatingView.State = State;
})(PropertyFloatingView || (PropertyFloatingView = {}));
export class ScrollableList extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ScrollableList.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "aspect-div", children: this.props.children, style: {
                                width: '100%'
                            } })), style: Object.assign({ overflow: 'auto' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ScrollableList) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ScrollableList.State = State;
})(ScrollableList || (ScrollableList = {}));
export class SidebarItem extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new SidebarItem.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "aspect-span", children: "Default", style: {
                                color: 'rgba(0,0,0,1)',
                                fontSize: 11,
                                fontWeight: 400,
                                letterSpacing: 0,
                                textAlign: 'left'
                            } })), style: Object.assign({ alignItems: 'center', background: 'rgba(255,255,255,1)', backgroundColor: 'rgba(255,255,255,1)', display: 'grid', gridAutoFlow: 'column', justifyContent: 'flex-start', minHeight: 30, width: 211 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (SidebarItem) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    SidebarItem.State = State;
})(SidebarItem || (SidebarItem = {}));
export class SignInButton extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new SignInButton.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("button", { className: "aspect-button", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "aspect-span", children: this.props.text, style: {
                                fontSize: 14
                            } })), style: Object.assign({ backgroundColor: '#fff', border: 'none', boxShadow: '0 0 0 1px rgba(0,0,0,0.05)', height: 40, padding: '0 14px' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (SignInButton) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    SignInButton.State = State;
})(SignInButton || (SignInButton = {}));
export class SignInInput extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new SignInInput.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("input", { className: "aspect-input", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), placeholder: this.props.placeholder, style: Object.assign({ border: 'none', boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.07)', fontSize: 14, height: 40, padding: '0 14px' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (SignInInput) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    SignInInput.State = State;
})(SignInInput || (SignInInput = {}));
export class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new SignInView.State();
    }
    get customState() {
        if (this.props.isPasswordSignIn === true) {
            return 'passwordSignIn';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        switch (this.customState) {
            case 'passwordSignIn':
                return (React.createElement("form", { className: "aspect-form", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                React.createElement("h1", { className: "aspect-h1", children: this.props.title, style: {
                                        textAlign: 'center'
                                    } }),
                                React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                        React.createElement(SignInInput, { placeholder: "Email" }),
                                        React.createElement(SignInInput, { placeholder: "Password" })), style: {
                                        gap: 10
                                    } }),
                                React.createElement(SignInWithPasswordButton, { text: this.props.callToAction })), style: {
                                gap: 24,
                                padding: '40px 40px 52px',
                                width: 400
                            } })), onSubmit: (_h = this.props.onPasswordSignInSubmit) === null || _h === void 0 ? void 0 : _h.bind(this), style: this.props.style, id: this.props.id }));
            default:
                return (React.createElement(VStack, { onMouseEnter: (_j = this.props.onMouseEnter) === null || _j === void 0 ? void 0 : _j.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_k = this.props.onClick) === null || _k === void 0 ? void 0 : _k.bind(this), onDoubleClick: (_l = this.props.onDoubleClick) === null || _l === void 0 ? void 0 : _l.bind(this), onChange: (_m = this.props.onChange) === null || _m === void 0 ? void 0 : _m.bind(this), onInput: (_o = this.props.onInput) === null || _o === void 0 ? void 0 : _o.bind(this), onFocus: (_p = this.props.onFocus) === null || _p === void 0 ? void 0 : _p.bind(this), onBlur: (_q = this.props.onBlur) === null || _q === void 0 ? void 0 : _q.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("h1", { className: "aspect-h1", children: "Sign In", style: {
                                textAlign: 'center'
                            } }),
                        React.createElement(VStack, { children: React.createElement(React.Fragment, null,
                                React.createElement(SignInButton, { text: "Use email and password" }),
                                React.createElement(SignInButton, { text: "Continue with Google" })), style: {
                                gap: 10
                            } })), style: Object.assign({ gap: 24, padding: '40px 40px 52px', width: 400 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (SignInView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    SignInView.State = State;
})(SignInView || (SignInView = {}));
export class SignInWithPasswordButton extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new SignInWithPasswordButton.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("button", { className: "aspect-button", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "aspect-span", children: this.props.text, style: {
                                color: '#fff',
                                fontSize: 14,
                                fontWeight: 500
                            } })), style: Object.assign({ backgroundColor: '#06f', border: 'none', height: 40, padding: '0 14px' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (SignInWithPasswordButton) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    SignInWithPasswordButton.State = State;
})(SignInWithPasswordButton || (SignInWithPasswordButton = {}));
export class SimpleButton extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new SimpleButton.State();
    }
    get customState() {
        if (this.props.disabled === true) {
            return 'disabled';
        }
        else if (this.state.isPressed === true) {
            return 'pressed';
        }
        else if (this.state.isHovered === true) {
            return 'hovered';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        switch (this.customState) {
            case 'hovered':
                return (React.createElement(HStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: this.props.children, style: Object.assign({ backgroundColor: 'rgba(0, 0, 0, 0.04)', minHeight: 28, minWidth: 28 }, this.props.style), id: this.props.id }));
            case 'pressed':
                return (React.createElement(HStack, { onMouseEnter: (_h = this.props.onMouseEnter) === null || _h === void 0 ? void 0 : _h.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_j = this.props.onClick) === null || _j === void 0 ? void 0 : _j.bind(this), onDoubleClick: (_k = this.props.onDoubleClick) === null || _k === void 0 ? void 0 : _k.bind(this), onChange: (_l = this.props.onChange) === null || _l === void 0 ? void 0 : _l.bind(this), onInput: (_m = this.props.onInput) === null || _m === void 0 ? void 0 : _m.bind(this), onFocus: (_o = this.props.onFocus) === null || _o === void 0 ? void 0 : _o.bind(this), onBlur: (_p = this.props.onBlur) === null || _p === void 0 ? void 0 : _p.bind(this), children: this.props.children, style: Object.assign({ backgroundColor: 'rgba(0, 0, 0, 0.07)', minHeight: 28, minWidth: 28 }, this.props.style), id: this.props.id }));
            case 'disabled':
                return (React.createElement(HStack, { onMouseEnter: (_q = this.props.onMouseEnter) === null || _q === void 0 ? void 0 : _q.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_r = this.props.onClick) === null || _r === void 0 ? void 0 : _r.bind(this), onDoubleClick: (_s = this.props.onDoubleClick) === null || _s === void 0 ? void 0 : _s.bind(this), onChange: (_t = this.props.onChange) === null || _t === void 0 ? void 0 : _t.bind(this), onInput: (_u = this.props.onInput) === null || _u === void 0 ? void 0 : _u.bind(this), onFocus: (_v = this.props.onFocus) === null || _v === void 0 ? void 0 : _v.bind(this), onBlur: (_w = this.props.onBlur) === null || _w === void 0 ? void 0 : _w.bind(this), children: this.props.children, style: Object.assign({ backgroundColor: 'rgba(255,255,255,0.5)', minHeight: 28, minWidth: 28, pointerEvents: 'none' }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(HStack, { onMouseEnter: (_x = this.props.onMouseEnter) === null || _x === void 0 ? void 0 : _x.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_y = this.props.onClick) === null || _y === void 0 ? void 0 : _y.bind(this), onDoubleClick: (_z = this.props.onDoubleClick) === null || _z === void 0 ? void 0 : _z.bind(this), onChange: (_0 = this.props.onChange) === null || _0 === void 0 ? void 0 : _0.bind(this), onInput: (_1 = this.props.onInput) === null || _1 === void 0 ? void 0 : _1.bind(this), onFocus: (_2 = this.props.onFocus) === null || _2 === void 0 ? void 0 : _2.bind(this), onBlur: (_3 = this.props.onBlur) === null || _3 === void 0 ? void 0 : _3.bind(this), children: this.props.children, style: Object.assign({ minHeight: 28, minWidth: 28 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (SimpleButton) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    SimpleButton.State = State;
})(SimpleButton || (SimpleButton = {}));
export class Test extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new Test.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement(VStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(VStack, null),
                        React.createElement(LandingPageHeader, null)), style: this.props.style, id: this.props.id }));
        }
    }
}
(function (Test) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    Test.State = State;
})(Test || (Test = {}));
export class Text extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new Text.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("span", { className: "aspect-span", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: this.props.text, style: this.props.style, id: this.props.id }));
        }
    }
}
(function (Text) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    Text.State = State;
})(Text || (Text = {}));
export class ViewStateItemView extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ViewStateItemView.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            case 'selected':
                return (null);
            case 'hovered':
                return (null);
            default:
                return (React.createElement(HStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontSize: 12,
                                fontWeight: 500
                            } }),
                        React.createElement("div", { className: "aspect-div", children: this.props.accessoryView, style: {
                                minHeight: 24,
                                width: 28
                            } })), style: Object.assign({ boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.05)', justifyContent: 'space-between', minHeight: 36, paddingLeft: 16, paddingRight: 8, width: 224 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ViewStateItemView) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ViewStateItemView.State = State;
})(ViewStateItemView || (ViewStateItemView = {}));
export class ViewStateManagerCondition extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ViewStateManagerCondition.State();
    }
    get customState() {
        if (this.props.title === 'test') {
            return 'edit-text-value';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        switch (this.customState) {
            case 'edit-text-value':
                return (React.createElement(HStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title }),
                        React.createElement(HStack, { style: {
                                gap: 12,
                                justifyContent: 'end',
                                minHeight: '100%',
                                minWidth: 28
                            } })), style: Object.assign({ fontSize: 12, fontWeight: 500, gridTemplateColumns: '1fr auto', justifyContent: 'space-between', minHeight: 32, minWidth: 200, paddingLeft: 8, paddingRight: 8, width: '100%' }, this.props.style), id: this.props.id }));
            default:
                return (React.createElement(HStack, { onMouseEnter: (_h = this.props.onMouseEnter) === null || _h === void 0 ? void 0 : _h.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_j = this.props.onClick) === null || _j === void 0 ? void 0 : _j.bind(this), onDoubleClick: (_k = this.props.onDoubleClick) === null || _k === void 0 ? void 0 : _k.bind(this), onChange: (_l = this.props.onChange) === null || _l === void 0 ? void 0 : _l.bind(this), onInput: (_m = this.props.onInput) === null || _m === void 0 ? void 0 : _m.bind(this), onFocus: (_o = this.props.onFocus) === null || _o === void 0 ? void 0 : _o.bind(this), onBlur: (_p = this.props.onBlur) === null || _p === void 0 ? void 0 : _p.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            } }),
                        React.createElement(HStack, { children: this.props.accessoryView, style: {
                                gap: 12,
                                justifyContent: 'end',
                                maxWidth: 128,
                                minHeight: '100%',
                                minWidth: 28
                            } })), style: Object.assign({ fontSize: 12, fontWeight: 500, gap: 16, justifyContent: 'space-between', minHeight: 32, minWidth: 200, paddingLeft: 8, width: '100%' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ViewStateManagerCondition) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ViewStateManagerCondition.State = State;
})(ViewStateManagerCondition || (ViewStateManagerCondition = {}));
export class ViewStateManagerHeader extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ViewStateManagerHeader.State();
    }
    get customState() {
        if (false) {
            return 'State 1';
        }
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            case 'State 1':
                return (null);
            default:
                return (React.createElement(HStack, { onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement(Text, { text: this.props.title, style: {
                                fontSize: 12,
                                fontWeight: 500
                            } }),
                        React.createElement(SimpleButton, { children: this.props.accesoryView, style: {
                                minHeight: 24,
                                width: 28
                            } })), style: Object.assign({ boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.05)', justifyContent: 'space-between', minHeight: 36, paddingLeft: 16, paddingRight: 8, width: 224 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ViewStateManagerHeader) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ViewStateManagerHeader.State = State;
})(ViewStateManagerHeader || (ViewStateManagerHeader = {}));
export class ViewStateSidebar extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new ViewStateSidebar.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "aspect-span", children: "states", style: {
                                color: 'rgba(0,0,0,1)',
                                fontSize: 10,
                                fontWeight: 600,
                                letterSpacing: 0.2,
                                textAlign: 'left'
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "Default", style: {
                                        color: 'rgba(0,0,0,1)',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } })), style: {
                                alignItems: 'center',
                                background: 'rgba(255,255,255,1)',
                                display: 'grid',
                                gridAutoFlow: 'column',
                                justifyContent: 'flex-start',
                                minHeight: 30,
                                width: 211
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "State 2", style: {
                                        color: 'rgba(0,0,0,1)',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } })), style: {
                                alignItems: 'center',
                                background: 'rgba(255,255,255,1)',
                                display: 'grid',
                                gridAutoFlow: 'column',
                                justifyContent: 'flex-start',
                                minHeight: 30,
                                width: 211
                            } }),
                        React.createElement("div", { className: "aspect-div", children: React.createElement(React.Fragment, null,
                                React.createElement("span", { className: "aspect-span", children: "State 3", style: {
                                        color: 'rgba(0,0,0,1)',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        letterSpacing: 0,
                                        textAlign: 'left'
                                    } })), style: {
                                alignItems: 'center',
                                background: 'rgba(255,255,255,1)',
                                display: 'grid',
                                gridAutoFlow: 'column',
                                justifyContent: 'flex-start',
                                minHeight: 30,
                                width: 211
                            } })), style: Object.assign({ alignContent: 'flex-start', backgroundColor: 'rgba(255,255,255,1)', display: 'grid', gap: 5, justifyItems: 'center', minHeight: 250, width: 227 }, this.props.style), id: this.props.id }));
        }
    }
}
(function (ViewStateSidebar) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    ViewStateSidebar.State = State;
})(ViewStateSidebar || (ViewStateSidebar = {}));
export class VStack extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.handleMouseUp = (e) => {
            if (!this._isMounted) {
                return;
            }
            this.setState({
                isPressed: false,
            });
        };
        this.state = new VStack.State();
    }
    get customState() {
        return 'default';
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
        var _a, _b, _c, _d, _e, _f, _g;
        switch (this.customState) {
            default:
                return (React.createElement("div", { className: "aspect-div", onMouseEnter: (_a = this.props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.bind(this), onMouseOver: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseOver && this.props.onMouseOver(e);
                        this.setState({
                            isHovered: true,
                        });
                    }, onMouseLeave: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseLeave && this.props.onMouseLeave(e);
                        this.setState({
                            isHovered: false,
                        });
                    }, onMouseDown: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseDown && this.props.onMouseDown(e);
                        this.setState({
                            isPressed: true,
                        });
                    }, onMouseUp: (e) => {
                        if (!this._isMounted) {
                            return;
                        }
                        this.props.onMouseUp && this.props.onMouseUp(e);
                        this.setState({
                            isPressed: false,
                        });
                    }, onClick: (_b = this.props.onClick) === null || _b === void 0 ? void 0 : _b.bind(this), onDoubleClick: (_c = this.props.onDoubleClick) === null || _c === void 0 ? void 0 : _c.bind(this), onChange: (_d = this.props.onChange) === null || _d === void 0 ? void 0 : _d.bind(this), onInput: (_e = this.props.onInput) === null || _e === void 0 ? void 0 : _e.bind(this), onFocus: (_f = this.props.onFocus) === null || _f === void 0 ? void 0 : _f.bind(this), onBlur: (_g = this.props.onBlur) === null || _g === void 0 ? void 0 : _g.bind(this), children: this.props.children, style: Object.assign({ alignContent: 'flex-start', alignItems: 'flex-start', boxSizing: 'border-box', display: 'grid', gap: '8px' }, this.props.style), id: this.props.id }));
        }
    }
}
(function (VStack) {
    class State {
        constructor(isHovered = false, isPressed = false) {
            this.isHovered = isHovered;
            this.isPressed = isPressed;
        }
    }
    VStack.State = State;
})(VStack || (VStack = {}));
