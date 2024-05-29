export declare enum LayoutFeatures {
    row = "row",
    column = "column",
    reverse = "reverse",
    first = "first",
    last = "last"
}
export declare enum Layout {
    row = "row",
    rowReverse = "row reverse",
    column = "column",
    columnReverse = "column reverse",
    top = "column first",
    bottom = "column last",
    topReverse = "column reverse first",
    bottomReverse = "column reverse last ",
    left = "row first",
    right = "row last",
    leftReverse = "row reverse first",
    rightReverse = "row reverse last"
}
export declare const layoutToggleMap: {
    "column reverse": Layout;
    row: Layout;
};
export declare const default_layout = Layout.row;
