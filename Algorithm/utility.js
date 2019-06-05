module.exports = {
    binarySearch(items, value) {
        let firstIndex = 0;
        let lastIndex = items.length - 1;
        let middleIndex = Math.floor((lastIndex + firstIndex) / 2);

        while (items[middleIndex] != value && firstIndex < lastIndex) {
            if (value < items[middleIndex]) {
                lastIndex = middleIndex - 1;
            } else if (value > items[middleIndex]) {
                firstIndex = middleIndex + 1;
            }
            middleIndex = Math.floor((lastIndex + firstIndex) / 2);
        }

        return (items[middleIndex] != value) ? -1 : middleIndex;
    },
    isAnagram(a, b) {
        var x = [];
        x = a.toLowerCase();
        var y = [];
        y = b.toLowerCase();
        if (x.length != y.length) {
            console.log("Given string is not Anagram.");
        } else {
            var m = [],
                n = [];
            m = x.split("");
            n = y.split("");
            x = m.sort();
            y = n.sort();
            if (x.length == y.length) {
                var j = 0;
                while (j < x.length) {
                    for (let i = j; i < x.length; i++) {
                        if (x[j] != y[i]) {
                            return false;
                        } else {
                            j++;
                        }
                    }
                }
                return true;
            }
        }
    },
    primenumber(n) {
        if (n == 0 || n == 1) {
            return false;
        } else {
            for (let i = 2; i < n; i++) {
                if (n % i == 0) {
                    return false;
                }
            }
            return true;
        }
    },
}