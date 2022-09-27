export const getRungFromPoints = (points) => {
    switch(points) {
        case 0:
            return "none";
        case 4:
            return "Low";
        case 6:
            return "Mid";
        case 10:
            return "High";
        case 15:
            return "Traversal";
    }
    return "none";
}