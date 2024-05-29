"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const button_1 = __importDefault(require("./button"));
const button_composition_1 = require("./button.composition");
const testLoader = react_1.default.createElement("span", { "data-testid": "test-loader" }, "loading...");
it('should render with children', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(button_composition_1.BasicButton, null));
    const rendered = getByText('Click');
    expect(rendered).toBeInstanceOf(HTMLElement);
});
it('should trigger onClick', () => {
    const onClick = jest.fn();
    const { getByText } = (0, react_2.render)(react_1.default.createElement(button_1.default, { onClick: onClick }, "actual button"));
    const rendered = getByText('actual button');
    //could use userEvents.click(), in @testing-library/user-event
    react_2.fireEvent.click(rendered);
    expect(onClick).toHaveBeenCalled();
});
// it('should remove loader after onClick has been resolved', async () => {
// 	let resolveClick = () => {};
// 	const onClick = () => new Promise(res => (resolveClick = res));
// 	const { getByTestId, queryByTestId } = render(
// 		<Button data-testid="test-button" loader={testLoader} onClick={onClick} />
// 	);
// 	fireEvent.click(getByTestId('test-button'));
// 	resolveClick();
// 	await waitForElementToBeRemoved(() => queryByTestId('test-loader'));
// });
// it('should remove loader even when onClick has been rejected', async () => {
// 	let rejectClick = () => {};
// 	const onClick = () => new Promise((_res, rej) => (rejectClick = rej));
// 	const { getByTestId, queryByTestId } = render(
// 		<Button data-testid="test-button" loader={testLoader} onClick={onClick} />
// 	);
// 	fireEvent.click(getByTestId('test-button'));
// 	rejectClick();
// 	await waitForElementToBeRemoved(() => queryByTestId('test-loader'));
// });
it('should show loader when explicitly set loading={true}', () => {
    const { getByTestId } = (0, react_2.render)(react_1.default.createElement(button_1.default, { loader: testLoader, loading: true }));
    expect(getByTestId('test-loader')).toBeInstanceOf(HTMLElement);
});
it('should not show loader when explicitly set loading={false}', () => {
    const { queryByTestId } = (0, react_2.render)(react_1.default.createElement(button_1.default, { loader: testLoader, loading: false }));
    expect(queryByTestId('test-loader')).not.toBeInstanceOf(HTMLElement);
});
it('should not render children while loading', () => {
    const { queryByText } = (0, react_2.render)(react_1.default.createElement(button_1.default, { loader: testLoader, loading: true }, "actual children"));
    expect(queryByText('actual children')).not.toBeInstanceOf(HTMLElement);
});
it('should remove loader when changing loading back to ={false}', () => {
    const { queryByTestId, rerender } = (0, react_2.render)(react_1.default.createElement(button_1.default, { loader: testLoader, loading: true }));
    expect(queryByTestId('test-loader')).toBeInstanceOf(HTMLElement);
    rerender(react_1.default.createElement(button_1.default, { loader: testLoader, loading: false }));
    expect(queryByTestId('test-loader')).not.toBeInstanceOf(HTMLElement);
});
//# sourceMappingURL=button.spec.js.map