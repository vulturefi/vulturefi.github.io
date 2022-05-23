
export function setDefaultFeatures () {
    if(localStorage.getItem('features') != null) return;

    const defaultFeatures = {
        pool: true
    }
    localStorage.setItem('features', JSON.stringify(defaultFeatures));
}

export function getFeatures () {
    const features = localStorage.getItem('features');
    console.log(features);
    return JSON.parse(String(features));
}