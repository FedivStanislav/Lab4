function print(message) {
    var outputDiv = document.getElementById("output");
    var p = document.createElement("pre");
    p.textContent = message;
    outputDiv.appendChild(p);
}

function generateDenseArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 500) + 1);
    }
    return arr;
}

function generateSparseArray(length) {
    var arr = generateDenseArray(length);
    [10, 30, 55, 70, 90].forEach(function(idx) {
        arr[idx] = undefined;
    });
    return arr;
}

function cloneArray(arr) {
    return arr.slice();
}

window.onload = function() {
    print("=== Демонстрація на нерозрідженому масиві ===");
    var denseArray = generateDenseArray(100);
    print("Початковий масив (не відсортовано):");
    print(JSON.stringify(denseArray));

    var arr1 = cloneArray(denseArray);
    var sorted1 = SortLib.exchangeSortWrapper(arr1, "asc");
    print("Результат сортування обміну (asc):");
    print(JSON.stringify(sorted1));

    var arr2 = cloneArray(denseArray);
    var sorted2 = SortLib.selectionSortWrapper(arr2, "asc");
    print("Результат сортування мінімальних елементів (asc):");
    print(JSON.stringify(sorted2));

    var arr3 = cloneArray(denseArray);
    var sorted3 = SortLib.insertionSortWrapper(arr3, "asc");
    print("Результат сортування вставками (asc):");
    print(JSON.stringify(sorted3));

    var arr4 = cloneArray(denseArray);
    var sorted4 = SortLib.shellSortWrapper(arr4, "asc");
    print("Результат сортування Шелла (asc):");
    print(JSON.stringify(sorted4));

    var arr5 = cloneArray(denseArray);
    var sorted5 = SortLib.quickSortWrapper(arr5, "asc");
    print("Результат сортування Хоара (asc):");
    print(JSON.stringify(sorted5));

    print("=== Демонстрація на розрідженому масиві ===");
    var sparseArray = generateSparseArray(100);
    print("Початковий розріджений масив:");
    print(JSON.stringify(sparseArray));

    var arr6 = cloneArray(sparseArray);
    var sorted6 = SortLib.exchangeSortWrapper(arr6, "desc");
    print("Результат сортування обміну (desc) для розрідженого масиву:");
    print(JSON.stringify(sorted6));

    var arr7 = cloneArray(sparseArray);
    var sorted7 = SortLib.selectionSortWrapper(arr7, "desc");
    print("Результат сортування мінімальних елементів (desc) для розрідженого масиву:");
    print(JSON.stringify(sorted7));

    var arr8 = cloneArray(sparseArray);
    var sorted8 = SortLib.insertionSortWrapper(arr8, "desc");
    print("Результат сортування вставками (desc) для розрідженого масиву:");
    print(JSON.stringify(sorted8));

    var arr9 = cloneArray(sparseArray);
    var sorted9 = SortLib.shellSortWrapper(arr9, "desc");
    print("Результат сортування Шелла (desc) для розрідженого масиву:");
    print(JSON.stringify(sorted9));

    var arr10 = cloneArray(sparseArray);
    var sorted10 = SortLib.quickSortWrapper(arr10, "desc");
    print("Результат сортування Хоара (desc) для розрідженого масиву:");
    print(JSON.stringify(sorted10));
};
