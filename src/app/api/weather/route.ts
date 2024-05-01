import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
        const lat = 2.2710512
        const lon = 102.2886898
        //const lat = 35.6833484
        //const lon = 139.5598366
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        console.log('⣿⣿⠿⢿⠿⢿⣿⣿⣿⠿⢛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿')
        console.log('⣿⣇⠄⠠⠄⢀⡿⠏⣁⣢⡶⠄⢿⣿⣿⣿⣿⣿⣿⠿⠿⠛⣛⠙⣿⣿')
        console.log('⣿⣿⣆⣄⣰⠎⣠⡾⣯⢷⣟⡃⢌⣉⣉⡉⢍⣉⣤⡾⣞⡿⡯⡆⢺⣿')
        console.log('⣿⣿⣿⡿⢁⣼⢿⢽⢯⣟⢲⢸⢼⣯⠣⡪⣞⣯⢷⣻⡽⣯⣟⡇⣼⣿')
        console.log('⣿⣿⠿⢣⡾⡏⢟⣯⢿⡽⣦⢿⣽⢾⣼⣺⣻⣞⣯⢷⣟⣷⡻⠄⣿⣿')
        console.log('⣿⣧⢺⣺⣽⠤⠠⠘⢻⣽⢿⣿⣿⣿⣾⣗⡿⠺⠙⠻⣺⣞⡇⢰⣿⣿')
        console.log('⣿⠋⣼⣳⣇⣨⣤⢶⣿⣿⣬⣯⣝⣫⣿⣥⡀⡈⠰⣶⣟⣾⡻⠄⣻⣿')
        console.log('⣿⡂⡻⡚⡡⠑⠄⠌⠉⠻⠟⠋⢉⠉⠍⡙⢻⢶⡴⣗⣟⡾⣶⣄⢻⣿')
        console.log('⣿⣷⠩⢈⣄⡈⠄⠂⠁⠄⠂⠈⠄⢄⣂⡈⠢⠹⣝⣯⢷⢿⡕⢡⣾⣿')
        console.log('⣿⣿⢰⣿⣿⣷⠁⠪⠂⢀⠈⠄⡁⣿⣿⣿⣷⣦⣕⠮⣹⢹⢲⠈⣿⣿')
        console.log('⣿⣿⢸⣿⣿⣿⠄⠈⠄⠄⠄⡄⠄⢻⣽⣿⣿⣿⣿⣿⣮⣌⠰⣾⣿⣿')
        console.log('⣿⣿⣄⢻⡽⠆⢄⠄⠄⠄⠐⠘⠈⠄⠳⣻⢿⣿⣿⣟⣷⣻⣳⣌⢻⣿')
        const res = await axios.get(url)
        return NextResponse.json(res.data)
    } catch (error) {
        console.log('ERROR IN GETTING WEATHER DATA!!!', error);
        return new Response('error fetching weather data!!!', {status: 500})
    }
}