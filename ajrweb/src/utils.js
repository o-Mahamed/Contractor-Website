export const getImageUrl = (path) => {
    return new URL(`/immgs/${path}`, import.meta.url).href;
};