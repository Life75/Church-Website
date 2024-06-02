export default class Event {
    date: Date = new Date()
    description: string = "" 
    title: String = ""
    imageID: String = `${new Date()}`
    location?: String = ""
}