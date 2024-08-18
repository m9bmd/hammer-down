"use server"

import db from "@/lib/db"

export const getUserCount = async () => {
    try {
        const userLength = await db.user.count()
        return userLength
    } catch (error) {
        return null
    }
}