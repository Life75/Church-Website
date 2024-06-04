import { addDoc, collection, getDocs } from "firebase/firestore";
import CRUD from "../Interfaces/CRUD";
import BaseRepository from "./BaseRepository";
import Event from "../Interfaces/Event"
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";

export default class EventRepository extends BaseRepository implements CRUD<Event> {
    private _base = "Event"
    async Create(event: Event): Promise<void> {
         await addDoc(collection(this.db, this._base), {
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

    async GetImage(imageID: string): Promise<string> {
        const storage = getStorage()
        let url = await getDownloadURL(ref(storage, imageID))
        return url
    }

    Get(): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    async GetAll(): Promise<Event[]> {
       let events: Array<Event> = []

       const querySnapshot = await getDocs(collection(this.db, this._base))
       querySnapshot.forEach((doc) => {
        //let event: Event = doc.data()
        //events.push(event
       // console.log(doc.data())
        let event: Event = {
            date: doc.data()["date"],
            description: doc.data()["description"],
            title: doc.data()["title"],
            imageID: doc.data()["imageID"]
        }
        events.push(event)
       })

       return events
    }

    Update(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    Delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}