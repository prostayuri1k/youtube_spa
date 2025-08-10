import {instance} from "./instance.ts";

export const youTubeAPI = {
    search(searchString: string) {
        return instance.get()
    }
}