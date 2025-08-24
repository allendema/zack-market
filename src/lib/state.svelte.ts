// https://svelte.dev/docs/svelte/stores#When-to-use-stores

export const projectName = "Zack-Market";
export const stores = $state(["Lidl", "Rewe", "Geizhals", "Alnatura"]);
export const listingTypes = $state(["deals", "brands", "categories","stores"]);
export const cdnHostnames = $state(["rewe.com", "img.rewe-static.de", "lidl.de", "www.lidl.de", "imgproxy-retcat.assets.schwarz", "geizhals.de", "geizhals.at", "mediaservice.alnatura.de"]);
