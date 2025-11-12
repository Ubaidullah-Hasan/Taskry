export default function getRandomDeepColorRGB() {
    const r = Math.floor(Math.random() * 150); // Limit to lower values for deepness
    const g = Math.floor(Math.random() * 150);
    const b = Math.floor(Math.random() * 150);

    return `rgb(${r}, ${g}, ${b})`;
}