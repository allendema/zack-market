// https://svelte.dev/docs/svelte/stores#When-to-use-stores

export const projectName: string = "Zack-Market";
export const stores: string[] = $state(["Lidl", "Rewe", "Geizhals", "Alnatura"]);
export const listingTypes: string[] = $state(["deals", "brands", "categories"]); // TODO: reconsider "stores"
export const cdnHostnames: string[] = $state(["https://rewe.com", "https://img.rewe-static.de",
                                             "https://lidl.de", "https://www.lidl.de", "https://imgproxy-retcat.assets.schwarz",
                                             "https://geizhals.de", "https://gzhls.at",
                                             "https://mediaservice.alnatura.de",
                                             "https://cdn.idealo.com"
                                             ]);
export const api: string = $state("http://127.0.0.1:8000");
