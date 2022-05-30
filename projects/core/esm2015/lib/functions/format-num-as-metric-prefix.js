export const formatNumAsMetricPrefix = (num) => {
    const ranges = [
        { divider: 1e18, suffix: 'P' },
        { divider: 1e15, suffix: 'E' },
        { divider: 1e12, suffix: 'T' },
        { divider: 1e9, suffix: 'G' },
        { divider: 1e6, suffix: 'M' },
        { divider: 1e3, suffix: 'K' },
    ];
    for (let i = 0; i < ranges.length; i++) {
        if (num >= ranges[i].divider) {
            return _formatNumString(num / ranges[i].divider) + ranges[i].suffix;
        }
    }
    return _formatNumString(num);
};
export const _formatNumString = (num) => {
    return (Number(num.toFixed(2)) / 1).toString(); // 1 to remove trailing zeros
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW51bS1hcy1tZXRyaWMtcHJlZml4LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9mdW5jdGlvbnMvZm9ybWF0LW51bS1hcy1tZXRyaWMtcHJlZml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLENBQUMsR0FBVyxFQUFVLEVBQUU7SUFDM0QsTUFBTSxNQUFNLEdBQUc7UUFDWCxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUM5QixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUM5QixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUM5QixFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUM3QixFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUM3QixFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtLQUNoQyxDQUFDO0lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUMxQixPQUFPLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUN2RTtLQUNKO0lBRUQsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQVcsRUFBVSxFQUFFO0lBQ3BELE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsNkJBQTZCO0FBQ2pGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtYXROdW1Bc01ldHJpY1ByZWZpeCA9IChudW06IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCByYW5nZXMgPSBbXHJcbiAgICAgICAgeyBkaXZpZGVyOiAxZTE4LCBzdWZmaXg6ICdQJyB9LFxyXG4gICAgICAgIHsgZGl2aWRlcjogMWUxNSwgc3VmZml4OiAnRScgfSxcclxuICAgICAgICB7IGRpdmlkZXI6IDFlMTIsIHN1ZmZpeDogJ1QnIH0sXHJcbiAgICAgICAgeyBkaXZpZGVyOiAxZTksIHN1ZmZpeDogJ0cnIH0sXHJcbiAgICAgICAgeyBkaXZpZGVyOiAxZTYsIHN1ZmZpeDogJ00nIH0sXHJcbiAgICAgICAgeyBkaXZpZGVyOiAxZTMsIHN1ZmZpeDogJ0snIH0sXHJcbiAgICBdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobnVtID49IHJhbmdlc1tpXS5kaXZpZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfZm9ybWF0TnVtU3RyaW5nKG51bSAvIHJhbmdlc1tpXS5kaXZpZGVyKSArIHJhbmdlc1tpXS5zdWZmaXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBfZm9ybWF0TnVtU3RyaW5nKG51bSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBfZm9ybWF0TnVtU3RyaW5nID0gKG51bTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiAoTnVtYmVyKG51bS50b0ZpeGVkKDIpKSAvIDEpLnRvU3RyaW5nKCk7IC8vIDEgdG8gcmVtb3ZlIHRyYWlsaW5nIHplcm9zXHJcbn0iXX0=