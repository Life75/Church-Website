export default interface CRUD<T> {
    Create(entity: T): Promise<void>
    Get(): Promise<T>
    GetAll(): Promise<Array<T>>
    Update(): Promise<boolean> 
    Delete(): Promise<boolean> 
}