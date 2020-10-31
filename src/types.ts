export type Settings = {
    spreadsheetId: string
    sheetId: number
    profiles: { [profileName: string]: string }
    autoFill: boolean
}
