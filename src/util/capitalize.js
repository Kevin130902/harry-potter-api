
// PascalCase
export function capitalize(str) {
    if (str.length === 0) return "";

    return str.charAt(0).toUpperCase() + str.substr(1);
}