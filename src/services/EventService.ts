import CRUD from "../Interfaces/CRUD"
import EventRepository from "../repository/EventRepository";
import Event from "../Interfaces/Event";
export default class EventService implements CRUD<Event> {
    
    private repo: EventRepository 

    constructor(eventRepo: EventRepository) {
        this.repo = eventRepo
    }

    async Create(event: Event): Promise<void> {
        await this.repo.Create(event)
    }
    
    async SaveImage(blob: Blob, imageID: string): Promise<void> {
        await this.repo.SaveImage(blob, imageID)
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