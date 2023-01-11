interface IEventData {
    type: "warning" | "success" | "error" | "processing" | "default" | undefined;
    content: string;
    id: number;
}

export default IEventData;