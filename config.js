const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+923170984635";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_30_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOSxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMzLFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU0LFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9lT1IvUzlFWHlwVUZIU1FySnR6Z1JTcGJ3R2VSTUYycU9DQVZ5ekppZVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRUU0lhcjlsU1M2dFJrQjVZNC1GYmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmQ0ZGE4NWEtNmUxMS00ZDkwLWJjOGItYjU1NjE1NDk4MWI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NixcbiAgICAgIDgwLFxuICAgICAgMTAzLFxuICAgICAgMTE5LFxuICAgICAgNjgsXG4gICAgICAxNjYsXG4gICAgICAxMTgsXG4gICAgICA3NCxcbiAgICAgIDE4OCxcbiAgICAgIDUwLFxuICAgICAgMTU3LFxuICAgICAgMTk4LFxuICAgICAgNTYsXG4gICAgICAxMTAsXG4gICAgICAxNjUsXG4gICAgICAxMDUsXG4gICAgICAxOTEsXG4gICAgICA1MCxcbiAgICAgIDkyLFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDIxMyxcbiAgICAgIDI2LFxuICAgICAgMTg3LFxuICAgICAgMTU0LFxuICAgICAgMjIzLFxuICAgICAgMTc1LFxuICAgICAgMTAxLFxuICAgICAgMTE1LFxuICAgICAgMTc2LFxuICAgICAgODEsXG4gICAgICAyNCxcbiAgICAgIDE1LFxuICAgICAgMjM2LFxuICAgICAgMTM4LFxuICAgICAgNzAsXG4gICAgICAxMTcsXG4gICAgICAzNyxcbiAgICAgIDE4OSxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMMlZLSDlLUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTcwOTg0NjM1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOYXplZXIgS2hhblwiLFxuICAgIFwibGlkXCI6IFwiNzU1NDg5NzgxMTQ3Mjk6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZkFzNU1IRUlpWWxiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIngwYnBjYXZwRy96dTl4eGRsYVlRdVhzajMwdkd1VkxTTE9STUt0Zzlxalk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTTdTRVRBanROZG0wenZqYUFYRjRPbVBlTnVFeXZtYlNWd3NsTGFQT3VTeTBkWTdsd1o3c01IUXhyK0dxWU4yRVF3OU9KVnBmN1dpZFJSQWljWkIyRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUG1jYlpLWG43QmVFc1l1d0srWjFSbStTdEx3cjQ0MitzVFd2OUZObzdDTVIzb2dON0hpMUpWbkFpS0JCMFZNbmxac2tlcVVQUGEraGUvaXBLUS9tQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTcwOTg0NjM1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzkxNDYzNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUloT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWhPLmpzb24iOiAie1wia2V5RGF0YVwiOlwidGN1alRPNVNKTjd2MHpMdU9QZUJaQXJ6emZGM0UyMXl5Wk4xZyt1QU1BWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTE5NzM3ODk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE3OTE0NTgzNjE3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
