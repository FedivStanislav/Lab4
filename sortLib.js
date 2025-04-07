var SortLib = {
    isSparse: function(arr) {
        return arr.some(function(el) { return el === undefined; });
    },
    compare: function(a, b, order) {
        return order === "asc" ? a > b : a < b;
    },

    exchangeSort: function(arr, order) {
        var comparisons = 0, swaps = 0;
        var n = arr.length;
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - i - 1; j++) {
                comparisons++;
                if (SortLib.compare(arr[j], arr[j+1], order)) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swaps++;
                }
            }
        }
        console.log("Обмін (Bubble Sort): Порівнянь = " + comparisons + ", обмінів = " + swaps);
        return arr;
    },

    selectionSort: function(arr, order) {
        var comparisons = 0, swaps = 0;
        var n = arr.length;
        for (var i = 0; i < n - 1; i++) {
            var selectedIndex = i;
            for (var j = i + 1; j < n; j++) {
                comparisons++;
                if (SortLib.compare(arr[selectedIndex], arr[j], order)) {
                    selectedIndex = j;
                }
            }
            if (selectedIndex !== i) {
                var temp = arr[i];
                arr[i] = arr[selectedIndex];
                arr[selectedIndex] = temp;
                swaps++;
            }
        }
        console.log("Мінімальних елементів (Selection Sort): Порівнянь = " + comparisons + ", обмінів = " + swaps);
        return arr;
    },

    insertionSort: function(arr, order) {
        var comparisons = 0, moves = 0;
        var n = arr.length;
        for (var i = 1; i < n; i++) {
            var key = arr[i];
            var j = i - 1;
            while (j >= 0) {
                comparisons++;
                if (SortLib.compare(arr[j], key, order)) {
                    arr[j+1] = arr[j];
                    moves++;
                    j--;
                } else {
                    break;
                }
            }
            arr[j+1] = key;
        }
        console.log("Вставок (Insertion Sort): Порівнянь = " + comparisons + ", переміщень = " + moves);
        return arr;
    },

    shellSort: function(arr, order) {
        var comparisons = 0, moves = 0;
        var n = arr.length;
        var gap = Math.floor(n / 2);
        while (gap > 0) {
            for (var i = gap; i < n; i++) {
                var temp = arr[i];
                var j = i;
                while (j >= gap) {
                    comparisons++;
                    if (SortLib.compare(arr[j-gap], temp, order)) {
                        arr[j] = arr[j-gap];
                        moves++;
                        j -= gap;
                    } else {
                        break;
                    }
                }
                arr[j] = temp;
            }
            gap = Math.floor(gap / 2);
        }
        console.log("Шелла (Shell Sort): Порівнянь = " + comparisons + ", переміщень = " + moves);
        return arr;
    },

    quickSort: function(arr, order) {
        var comparisons = 0, swaps = 0;
        function _quickSort(items, left, right) {
            if (left < right) {
                var pivotIndex = partition(items, left, right);
                _quickSort(items, left, pivotIndex - 1);
                _quickSort(items, pivotIndex + 1, right);
            }
        }
        function partition(items, left, right) {
            var pivot = items[right];
            var i = left - 1;
            for (var j = left; j < right; j++) {
                comparisons++;
                if (!SortLib.compare(items[j], pivot, order)) {
                    i++;
                    var temp = items[i];
                    items[i] = items[j];
                    items[j] = temp;
                    swaps++;
                }
            }
            var temp = items[i+1];
            items[i+1] = items[right];
            items[right] = temp;
            swaps++;
            return i + 1;
        }
        _quickSort(arr, 0, arr.length - 1);
        console.log("Хоара (Quick Sort): Порівнянь = " + comparisons + ", обмінів = " + swaps);
        return arr;
    },

    sortWithCheck: function(sortFunction, arr, order) {
        if (SortLib.isSparse(arr)) {
            console.log("Увага: масив містить undefined елементи. Визначені елементи будуть відсортовані, а undefined переміщені в кінець масиву.");
            var defined = arr.filter(function(x) { return x !== undefined; });
            var sortedDefined = sortFunction(defined, order);
            var undefinedCount = arr.length - defined.length;
            for (var i = 0; i < undefinedCount; i++) {
                sortedDefined.push(undefined);
            }
            for (var i = 0; i < arr.length; i++) {
                arr[i] = sortedDefined[i];
            }
            return arr;
        } else {
            return sortFunction(arr, order);
        }
    },

    exchangeSortWrapper: function(arr, order) {
        return SortLib.sortWithCheck(SortLib.exchangeSort, arr, order);
    },
    selectionSortWrapper: function(arr, order) {
        return SortLib.sortWithCheck(SortLib.selectionSort, arr, order);
    },
    insertionSortWrapper: function(arr, order) {
        return SortLib.sortWithCheck(SortLib.insertionSort, arr, order);
    },
    shellSortWrapper: function(arr, order) {
        return SortLib.sortWithCheck(SortLib.shellSort, arr, order);
    },
    quickSortWrapper: function(arr, order) {
        return SortLib.sortWithCheck(SortLib.quickSort, arr, order);
    }
};
