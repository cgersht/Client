export const stringIsJson = (json) => {
    try {
        const obj = JSON.parse(json);
        return !!obj && typeof (obj) === 'object';
    }
    catch (_a) {
    }
    return false;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWlzLWpzb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Z1bmN0aW9ucy9zdHJpbmctaXMtanNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFTLEVBQVcsRUFBRTtJQUMvQyxJQUFJO1FBQ0EsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQztLQUM3QztJQUNELFdBQUs7S0FFSjtJQUNELE9BQU8sS0FBSyxDQUFBO0FBQ2hCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdHJpbmdJc0pzb24gPSAoanNvbjogYW55KTogYm9vbGVhbiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgcmV0dXJuICEhb2JqICYmIHR5cGVvZiAob2JqKSA9PT0gJ29iamVjdCc7XHJcbiAgICB9XHJcbiAgICBjYXRjaHtcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxufSJdfQ==