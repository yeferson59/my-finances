import { turso } from "@/turso"
import { brokers } from "./definitions";

export async function getBrokers() {
    try{
        const { rows } = await turso.execute("SELECT * FROM BROKERS;")
        if(rows.length == 0){
            return [];
        }
        return  brokers.parse(rows);
    } catch (error){
        throw new Error("Error")
    }
}