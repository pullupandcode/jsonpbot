type OverlayResponse = {
    path?: string,
    type?: string,
    apiKey: string,
    content: string
}

export const getOverlay = (req: any): OverlayResponse => {
    const response: OverlayResponse = {
        apiKey: req.body.apiKey,
        content: "<div>test</div>"
    }

    return response
}