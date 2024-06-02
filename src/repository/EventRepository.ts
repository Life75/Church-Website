import { addDoc, collection } from "firebase/firestore";
import CRUD from "../Interfaces/CRUD";
import BaseRepository from "./BaseRepository";
import Event from "../Interfaces/Event"
import { getStorage, uploadBytes, ref } from "firebase/storage";

export default class EventRepository extends BaseRepository implements CRUD<Event> {
    async Create(event: Event): Promise<void> {
         await addDoc(collection(this.db, "Event"), {
            date: event.date,
            description: event.description, 
            title: event.title, 
            location: event.location, 
            imageID: event.imageID
        })
    }

    async SaveImage(image: Blob, imageID: string): Promise<void> {
        const storage = getStorage()
        const imageRef = ref(storage, imageID)
        await uploadBytes(imageRef, image)
    }

    Get(): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    GetAll(): Promise<Event[]> {
        throw new Error("Method not implemented.");
    }
    Update(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    Delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}