import db from '../nedb/index'

const ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyz0123456789"

export function generateRoomCode() {
    let code = '';
    for (let i = 0; i < 6; i++) {
        code = code + ALPHANUMERIC[Math.floor(Math.random() * ALPHANUMERIC.length)]
    }
    return code
}