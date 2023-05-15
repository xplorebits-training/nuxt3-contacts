import { Sequelize } from 'sequelize'

export default defineNitroPlugin(async (nitroApp) => {
    const seq = new Sequelize('postgres://saikksub:XqmSKB2xJP9H@ep-frosty-thunder-716183.us-east-2.aws.neon.tech/neondb?sslmode=require')
    await seq.authenticate()
    console.log("Database: Connection has been established successfully.");
})
