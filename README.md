# 🎵 Song Request Form

ฟอร์ม HTML สำหรับขอเพลงที่เชื่อมต่อกับ Google Sheet และแจ้งเตือนทางอีเมล โดยโฮสต์ผ่าน Netlify

## 🔧 วิธีใช้งาน

### 1. แก้ไข Script URL

เปิด `index.html` แล้วแก้:

```js
window.SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec";
```

ให้เป็น URL ที่ได้จากการ Deploy Google Apps Script

### 2. เตรียม GitHub Repository

```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/song-request-form.git
git add .
git commit -m "initial commit"
git push -u origin master
```

### 3. เชื่อมกับ Netlify

- เข้า https://app.netlify.com
- เลือก "Import from GitHub"
- เลือก repo นี้
- ไม่ต้องใส่ build command
- Publish directory: `.`

Netlify จะสร้าง URL เช่น `https://song-request-form.netlify.app`

## 📄 โครงสร้างไฟล์

```
song-request-form/
├── index.html     # แบบฟอร์ม HTML
└── README.md      # คำแนะนำการ deploy
```

---

สร้างโดย AI 💜 เพื่อเพลงที่คุณเลือกเอง
