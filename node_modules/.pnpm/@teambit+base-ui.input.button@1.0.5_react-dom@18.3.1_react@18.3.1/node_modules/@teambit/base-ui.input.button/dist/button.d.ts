import React, { Component, ReactNode } from 'react';
export declare type ButtonProps = {
    /**
     * loader to show while button is busy. Turns on when onClick returns a promise (until it resolves), or when `loading={true}`.
     */
    loader?: ReactNode;
    /**
     * explicitly toggle loader on and off
     */
    loading?: boolean;
    /**
     * allow clicking on button even while loading. (i.e. make simultaneous triggers)
     */
    activeWhenLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * Base button, with very basic styles. Accepts all parameters of native html button.
 *
 * If onClick returns a promise, BaseButton will show a loader automatically, until the promise is resolved or rejected.
 * @example
 * <Button onClick={() => api.submitUserData()} loader={<CustomLoader/> } />
 */
export default class Button extends Component<ButtonProps> {
    state: {
        isLoading: boolean;
    };
    private activePromises;
    private unmounted;
    static defaultProps: {
        loader: JSX.Element;
        loading: boolean;
    };
    componentWillUnmount(): void;
    private handleClick;
    private handleResolve;
    render(): JSX.Element;
}
